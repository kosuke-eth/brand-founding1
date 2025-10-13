type NotionNumber = {
  type: "number"
  number: number | null
}

type NotionRichText = {
  type: "rich_text"
  rich_text: Array<{ plain_text: string }>
}

type NotionTitle = {
  id: string
  type: "title"
  title: Array<{ plain_text: string }>
}

type NotionSelect = {
  type: "select"
  select: { name: string } | null
}

type NotionMultiSelect = {
  type: "multi_select"
  multi_select: Array<{ name: string }>
}

type NotionFiles = {
  type: "files"
  files: Array<
    | { file: { url: string } }
    | { external: { url: string } }
  >
}

type NotionText = {
  type: "rich_text"
  rich_text: Array<{ plain_text: string }>
}

export type ProjectRecord = {
  id: string
  slug: string
  projectName: string
  category: string[]
  status: string | null
  heroImageUrl: string | null
  apyPercent: number | null
  termMonths: number | null
  fundingCurrentUsd: number | null
  fundingGoalUsd: number | null
  minInvestmentUsd: number | null
  maxInvestmentUsd: number | null
  paymentMethod: string | null
  location: string | null
  founded: number | null
  employees: number | null
  securityType: string | null
}

export type InvestorRecord = {
  id: string
  investorName: string
  email: string
  phone: string | null
  referralCode: string | null
  projectName: string
  projectSlug: string
  investmentAmount: number
  submittedAt: string
  notes: string | null
}

const notionApiKey = process.env.NOTION_API_KEY
const databaseId = process.env.NOTION_DATABASE_ID
const investorsDatabaseId = process.env.NOTION_INVESTORS_DATABASE_ID
const NOTION_VERSION = "2022-06-28"

if (!notionApiKey) {
  // Intentionally not throwing to allow build to succeed; runtime will fail gracefully
  console.warn("NOTION_API_KEY is not set. Notion integration will not function.")
}
if (!databaseId) {
  console.warn("NOTION_DATABASE_ID is not set. Notion integration will not function.")
}
if (!investorsDatabaseId) {
  console.warn("NOTION_INVESTORS_DATABASE_ID is not set. Investor tracking will not function.")
}

async function notionFetch<T = any>(path: string, init?: RequestInit): Promise<T> {
  if (!notionApiKey) throw new Error("NOTION_API_KEY is not configured")
  const resp = await fetch(`https://api.notion.com/v1${path}`, {
    method: "GET",
    ...init,
    headers: {
      "Authorization": `Bearer ${notionApiKey}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  })
  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Notion API error ${resp.status}: ${text}`)
  }
  return resp.json() as Promise<T>
}

function getPlainTextTitle(title: NotionTitle | undefined): string {
  if (!title) return ""
  return title.title.map((t) => t.plain_text).join("")
}

function getPlainText(rt: NotionRichText | NotionText | undefined): string | null {
  if (!rt) return null
  return rt.rich_text.map((t) => t.plain_text).join("")
}

function getNumber(n: NotionNumber | undefined): number | null {
  if (!n) return null
  return n.number ?? null
}

function getSelect(s: NotionSelect | undefined): string | null {
  if (!s) return null
  return s.select?.name ?? null
}

function getMultiSelect(ms: NotionMultiSelect | undefined): string[] {
  if (!ms) return []
  return ms.multi_select.map((o) => o.name)
}

function getFilesUrl(files: NotionFiles | undefined): string | null {
  if (!files || files.files.length === 0) return null
  const f = files.files[0]
  if ("file" in f) return f.file.url
  if ("external" in f) return f.external.url
  return null
}

export async function queryProjects(): Promise<ProjectRecord[]> {
  if (!databaseId) return []
  const resp = await notionFetch<{ results: any[] }>(`/databases/${databaseId}/query`, { method: "POST" })
  return resp.results
    .map((page: any) => mapProject(page))
    .filter((p): p is ProjectRecord => Boolean(p?.slug))
}

export async function getProjectBySlug(slug: string): Promise<ProjectRecord | null> {
  if (!databaseId) return null
  const body = {
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
    page_size: 1,
  }
  const resp = await notionFetch<{ results: any[] }>(`/databases/${databaseId}/query`, {
    method: "POST",
    body: JSON.stringify(body),
  })
  const page = resp.results?.[0]
  return page ? mapProject(page) : null
}

export async function getPageBlocks(pageId: string) {
  const blocks: any[] = []
  let cursor: string | undefined = undefined
  do {
    const query = cursor ? `?start_cursor=${encodeURIComponent(cursor)}` : ""
    const resp = await notionFetch<{ results: any[]; has_more: boolean; next_cursor?: string }>(
      `/blocks/${pageId}/children${query}`,
      { method: "GET" }
    )
    blocks.push(...resp.results)
    cursor = resp.has_more ? resp.next_cursor ?? undefined : undefined
  } while (cursor)
  return blocks
}

function mapProject(page: any): ProjectRecord | null {
  const props = page.properties as Record<string, any>

  return {
    id: page.id,
    projectName: (getPlainTextTitle(props["Aa Name"]) || getPlainText(props["Project Name"]) || "").trim(),
    slug: (getPlainText(props["Slug"]) || "").trim(),
    category: getMultiSelect(props["Category"]) || [],
    status: getSelect(props["Status"]),
    heroImageUrl: getFilesUrl(props["Hero Image"]),
    apyPercent: getNumber(props["APY"]),
    termMonths: getNumber(props["Term (Months)"]),
    fundingCurrentUsd: getNumber(props["Funding Current"]),
    fundingGoalUsd: getNumber(props["Funding Goal"]),
    minInvestmentUsd: getNumber(props["Min Investment"]),
    maxInvestmentUsd: getNumber(props["Max Investment"]),
    paymentMethod: getSelect(props["Payment Method"]),
    location: getPlainText(props["Location"]) || null,
    founded: getNumber(props["Founded"]),
    employees: getNumber(props["Employees"]),
    securityType: getPlainText(props["Security Type"]) || null,
  }
}

// Investor Database Functions
export async function createInvestorRecord(investorData: {
  investorName: string
  email: string
  phone?: string
  referralCode?: string
  projectName: string
  projectSlug: string
  investmentAmount: number
  notes?: string
}): Promise<InvestorRecord | null> {
  if (!investorsDatabaseId) {
    console.warn("NOTION_INVESTORS_DATABASE_ID is not configured")
    return null
  }

  try {
    const response = await notionFetch<any>(`/pages`, {
      method: "POST",
      body: JSON.stringify({
        parent: { database_id: investorsDatabaseId },
        properties: {
          "Name": {
            title: [
              {
                text: {
                  content: investorData.investorName
                }
              }
            ]
          },
          "Email": {
            email: investorData.email
          },
          "Phone": {
            phone_number: investorData.phone || null
          },
          "Referral Code": {
            rich_text: investorData.referralCode ? [
              {
                text: {
                  content: investorData.referralCode
                }
              }
            ] : []
          },
          "Project Name": {
            rich_text: [
              {
                text: {
                  content: investorData.projectName
                }
              }
            ]
          },
          "Project Slug": {
            rich_text: [
              {
                text: {
                  content: investorData.projectSlug
                }
              }
            ]
          },
          "Investment Amount": {
            number: investorData.investmentAmount
          },
          "Notes": {
            rich_text: investorData.notes ? [
              {
                text: {
                  content: investorData.notes
                }
              }
            ] : []
          }
        }
      })
    })

    return mapInvestor(response)
  } catch (error) {
    console.error("Error creating investor record:", error)
    return null
  }
}

export async function queryInvestors(): Promise<InvestorRecord[]> {
  if (!investorsDatabaseId) return []
  
  try {
    const resp = await notionFetch<{ results: any[] }>(`/databases/${investorsDatabaseId}/query`, { method: "POST" })
    return resp.results
      .map((page: any) => mapInvestor(page))
      .filter((i): i is InvestorRecord => Boolean(i?.investorName))
  } catch (error) {
    console.error("Error querying investors:", error)
    return []
  }
}

export async function updateInvestorNotes(investorId: string, notes: string): Promise<boolean> {
  if (!investorsDatabaseId) return false

  try {
    await notionFetch(`/pages/${investorId}`, {
      method: "PATCH",
      body: JSON.stringify({
        properties: {
          "Notes": {
            rich_text: [
              {
                text: {
                  content: notes
                }
              }
            ]
          }
        }
      })
    })
    return true
  } catch (error) {
    console.error("Error updating investor notes:", error)
    return false
  }
}

function mapInvestor(page: any): InvestorRecord | null {
  const props = page.properties as Record<string, any>

  return {
    id: page.id,
    investorName: getPlainTextTitle(props["Name"]) || "",
    email: props["Email"]?.email || "",
    phone: props["Phone"]?.phone_number || null,
    referralCode: getPlainText(props["Referral Code"]) || null,
    projectName: getPlainText(props["Project Name"]) || "",
    projectSlug: getPlainText(props["Project Slug"]) || "",
    investmentAmount: getNumber(props["Investment Amount"]) || 0,
    submittedAt: page.created_time,
    notes: getPlainText(props["Notes"]) || null,
  }
}


