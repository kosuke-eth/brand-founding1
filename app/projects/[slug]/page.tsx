import { notFound } from "next/navigation"
import { getProjectBySlug, getPageBlocks } from "@/lib/notion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Calendar, MapPin, Users, Building2 } from "lucide-react"
import Link from "next/link"
import PaymentForm from "@/components/payment-form"

type PageProps = { params: { slug: string } }

export const dynamic = "force-dynamic"
export const revalidate = 0
export const runtime = "nodejs"

export default async function ProjectBySlugPage({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug)
  if (!project) return notFound()
  const blocks = await getPageBlocks(project.id)

  const fundingPercent = project.fundingGoalUsd && project.fundingCurrentUsd
    ? Math.min(100, Math.round((project.fundingCurrentUsd / project.fundingGoalUsd) * 100))
    : 0

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Opportunities
            </Link>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/504BCA26-7471-4676-A9CC-0F2FED0B601A_4_5005_c-epQEdGpGZ1eqg4HJYk6enT05PDKqAQ.jpeg"
              alt="Brand Founding Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="relative h-96 overflow-hidden rounded-lg mb-6">
                <img
                  src={project.heroImageUrl || "/placeholder.jpg"}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                {project.category.map((c) => (
                  <Badge key={c} className="bg-gray-800 text-white">{c}</Badge>
                ))}
                {project.status && (
                  <Badge variant="outline" className="text-black border-black">{project.status}</Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-black mb-6">{project.projectName}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {/* Short description can be pulled from Notion body in future; placeholder for now */}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-gray-600 text-sm">Expected Return (APY)</div>
                  <div className="font-bold text-black text-2xl">{project.apyPercent ? `${project.apyPercent}%` : "-"}</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Investment Term</div>
                  <div className="font-bold text-black text-2xl">{project.termMonths ? `${project.termMonths} Months` : "-"}</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Funding Progress</span>
                  <span className="font-bold text-black">
                    {project.fundingCurrentUsd ? `$${project.fundingCurrentUsd.toLocaleString('en-US')}` : "-"}
                    {" / "}
                    {project.fundingGoalUsd ? `$${project.fundingGoalUsd.toLocaleString('en-US')}` : "-"}
                  </span>
                </div>
                <Progress value={fundingPercent} className="h-3" />
                <div className="text-xs text-gray-500 mt-1">{fundingPercent}% funded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-black mb-8">Project Overview</h2>

              <div className="space-y-8">{renderSections(blocks)}</div>
            </div>

            <div>
              <Card className="border-2 border-gray-200 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-black">Investment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Investment</span>
                      <span className="font-bold text-black">{project.minInvestmentUsd ? `$${project.minInvestmentUsd.toLocaleString('en-US')}` : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maximum Investment</span>
                      <span className="font-bold text-black">{project.maxInvestmentUsd ? `$${project.maxInvestmentUsd.toLocaleString('en-US')}` : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span className="font-bold text-black">{project.paymentMethod || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Returns</span>
                      <span className="font-bold text-black">{project.apyPercent ? `${project.apyPercent}% APY` : "-"}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    {project.location && (
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                    )}
                    {project.founded && (
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        Founded in {project.founded}
                      </div>
                    )}
                    {project.employees && (
                      <div className="flex items-center text-sm text-gray-600 mb-6">
                        <Users className="w-4 h-4 mr-2" />
                        {project.employees} employees
                      </div>
                    )}
                  </div>

                  <PaymentForm
                    projectName={project.projectName}
                    minAmount={project.minInvestmentUsd || 0}
                    maxAmount={project.maxInvestmentUsd || 0}
                    slug={project.slug}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  // We can opt into dynamic rendering; leaving empty to ISR/fallback in future if needed
  return []
}

function renderBlocks(blocks: any[]): JSX.Element[] {
  const elements: JSX.Element[] = []
  let listBuffer: { type: "bulleted_list_item" | "numbered_list_item"; items: any[] } | null = null

  const flushList = () => {
    if (!listBuffer) return
    if (listBuffer.type === "bulleted_list_item") {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc pl-6 space-y-2 text-gray-600">
          {listBuffer.items.map((it: any, idx: number) => (
            <li key={idx}>{it.rich_text?.map((t: any) => t.plain_text).join("")}</li>
          ))}
        </ul>
      )
    } else {
      elements.push(
        <ol key={`ol-${elements.length}`} className="list-decimal pl-6 space-y-2 text-gray-600">
          {listBuffer.items.map((it: any, idx: number) => (
            <li key={idx}>{it.rich_text?.map((t: any) => t.plain_text).join("")}</li>
          ))}
        </ol>
      )
    }
    listBuffer = null
  }

  for (const b of blocks) {
    if (b.type === "bulleted_list_item" || b.type === "numbered_list_item") {
      if (!listBuffer || listBuffer.type !== b.type) {
        flushList()
        listBuffer = { type: b.type, items: [] }
      }
      listBuffer.items.push(b[b.type])
      continue
    } else {
      flushList()
    }

    if (b.type === "heading_1") {
      elements.push(
        <h2 key={b.id} className="text-3xl font-bold text-black mt-8 mb-4">
          {b.heading_1.rich_text?.map((t: any) => t.plain_text).join("")}
        </h2>
      )
    } else if (b.type === "heading_2") {
      elements.push(
        <h3 key={b.id} className="text-xl font-bold text-black mb-4">
          {b.heading_2.rich_text?.map((t: any) => t.plain_text).join("")}
        </h3>
      )
    } else if (b.type === "heading_3") {
      elements.push(
        <h4 key={b.id} className="text-lg font-semibold text-black mb-3">
          {b.heading_3.rich_text?.map((t: any) => t.plain_text).join("")}
        </h4>
      )
    } else if (b.type === "paragraph") {
      const text = b.paragraph.rich_text?.map((t: any) => t.plain_text).join("")
      if (text && text.trim().length > 0) {
        elements.push(
          <p key={b.id} className="text-gray-600 leading-relaxed">
            {text}
          </p>
        )
      }
    }
  }
  flushList()
  return elements
}

function renderSections(blocks: any[]): JSX.Element[] {
  // Group content by heading_2 (primary sections). Everything before first heading_2 is rendered raw
  const sections: Array<{ title?: string; blocks: any[] }> = []
  let current: { title?: string; blocks: any[] } = { blocks: [] }
  for (const b of blocks) {
    if (b.type === "heading_2") {
      if (current.blocks.length) sections.push(current)
      current = {
        title: b.heading_2.rich_text?.map((t: any) => t.plain_text).join("") || undefined,
        blocks: [],
      }
      continue
    }
    current.blocks.push(b)
  }
  if (current.blocks.length) sections.push(current)

  return sections.map((section, idx) => {
    const title = section.title
    const isCardGrid = title && [
      "Farm Operations",
      "Operations Snapshot",
      "Collection Details",
      "Risk Mitigation",
    ].includes(title)

    if (title) {
      // Render section heading
      const headingEl = (
        <h3 key={`h-${idx}`} className="text-xl font-bold text-black mb-4">
          {title}
        </h3>
      )

      if (isCardGrid) {
        let items = extractLabelValueItems(section.blocks)
        // Ensure Risk Mitigation always renders as cards even without label:value lines
        if (title === "Risk Mitigation" && items.length === 0) {
          const listTexts = extractListOrParagraphTexts(section.blocks)
          // Pair consecutive lines: first is label, second (if present) is value
          const paired: Array<{ label: string; value: string }> = []
          for (let i = 0; i < listTexts.length; i += 2) {
            const label = listTexts[i]
            const value = listTexts[i + 1] || ""
            if (label) paired.push({ label, value })
          }
          items = paired.length ? paired : listTexts.map((t) => ({ label: t, value: "" }))
        }
        if (items.length > 0) {
          return (
            <div key={`sec-${idx}`} className="space-y-4">
              {headingEl}
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((it, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      {title === "Risk Mitigation" ? (
                        <div className="mt-0.5 text-gray-700">
                          {getRiskIcon(it.label)}
                        </div>
                      ) : null}
                      <div>
                        <h4 className="font-medium text-black mb-1">{it.label}</h4>
                        {it.value ? (
                          <p className="text-sm text-gray-600">{it.value}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      }

      // Fallback to generic renderer inside the section
      return (
        <div key={`sec-${idx}`} className="space-y-4">
          {headingEl}
          {renderBlocks(section.blocks)}
        </div>
      )
    }

    // No title; render as-is
    return (
      <div key={`sec-${idx}`} className="space-y-4">
        {renderBlocks(section.blocks)}
      </div>
    )
  })
}

function extractLabelValueItems(blocks: any[]): Array<{ label: string; value: string }> {
  const items: Array<{ label: string; value: string }> = []

  // Consider bulleted/numbered list items or paragraphs with pattern "Label: Value"
  for (const b of blocks) {
    let text = ""
    if (b.type === "bulleted_list_item") {
      text = b.bulleted_list_item.rich_text?.map((t: any) => t.plain_text).join("") || ""
    } else if (b.type === "numbered_list_item") {
      text = b.numbered_list_item.rich_text?.map((t: any) => t.plain_text).join("") || ""
    } else if (b.type === "paragraph") {
      text = b.paragraph.rich_text?.map((t: any) => t.plain_text).join("") || ""
    }
    const sepIndex = text.indexOf(":")
    if (sepIndex > 0) {
      const label = text.slice(0, sepIndex).trim()
      const value = text.slice(sepIndex + 1).trim()
      if (label && value) items.push({ label, value })
    }
  }

  return items
}

function extractListOrParagraphTexts(blocks: any[]): string[] {
  const texts: string[] = []
  for (const b of blocks) {
    if (b.type === "bulleted_list_item") {
      const t = b.bulleted_list_item.rich_text?.map((r: any) => r.plain_text).join("") || ""
      if (t.trim()) texts.push(t.trim())
    } else if (b.type === "numbered_list_item") {
      const t = b.numbered_list_item.rich_text?.map((r: any) => r.plain_text).join("") || ""
      if (t.trim()) texts.push(t.trim())
    } else if (b.type === "paragraph") {
      const t = b.paragraph.rich_text?.map((r: any) => r.plain_text).join("") || ""
      if (t.trim()) texts.push(t.trim())
    }
  }
  return texts
}

function getRiskIcon(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes("insurance")) {
    return <Building2 className="w-5 h-5" />
  }
  if (normalized.includes("collateral") || normalized.includes("asset")) {
    return <Building2 className="w-5 h-5" />
  }
  return <Shield className="w-5 h-5" />
}


