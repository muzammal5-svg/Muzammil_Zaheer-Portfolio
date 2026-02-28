import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsHero } from "@/components/rsweblabs-hero"
// import { MZwebSolutionsServices } from "@/components/rsweblabs-services"
import { FeaturedPortfolio } from "@/components/featured-portfolio"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MZwebSolutionsNavigation />
      <MZwebSolutionsHero />
      {/* <MZwebSolutionsServices /> */}
      <FeaturedPortfolio />
      <Contact />
      <MZwebSolutionsFooter />
    </main>
  )
}
