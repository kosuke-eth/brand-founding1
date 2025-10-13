import BrandFoundingLanding from "@/components/brand-founding-landing"
import { queryProjects } from "@/lib/notion"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const runtime = "nodejs"

export default async function Page() {
  const projects = await queryProjects()
  return <BrandFoundingLanding projects={projects} />
}
