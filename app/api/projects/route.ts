import { NextResponse } from "next/server"
import { queryProjects } from "@/lib/notion"

export const runtime = "nodejs"

export async function GET() {
  try {
    const projects = await queryProjects()
    return NextResponse.json({ success: true, projects })
  } catch (err) {
    console.error("Error fetching projects from Notion:", err)
    return NextResponse.json({ success: false, error: "Failed to fetch projects" }, { status: 500 })
  }
}


