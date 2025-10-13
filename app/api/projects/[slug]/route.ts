import { NextResponse } from "next/server"
import { getPageBlocks, getProjectBySlug } from "@/lib/notion"

export const runtime = "nodejs"

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  try {
    const project = await getProjectBySlug(params.slug)
    if (!project) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 })
    }
    const blocks = await getPageBlocks(project.id)
    return NextResponse.json({ success: true, project, blocks })
  } catch (err) {
    console.error("Error fetching project detail from Notion:", err)
    return NextResponse.json({ success: false, error: "Failed to fetch project" }, { status: 500 })
  }
}


