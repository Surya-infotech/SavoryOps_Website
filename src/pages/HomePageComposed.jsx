import FaqSection from '../components/home/FaqSection'
import FeatureWalkthroughSection from '../components/home/FeatureWalkthroughSection'
import HomeHeroSection from '../components/home/HomeHeroSection'
import InHomeContactSection from '../components/home/InHomeContactSection'
import SoftwareFeaturesGridSection from '../components/home/SoftwareFeaturesGridSection'
import WhySavorySection from '../components/home/WhySavorySection'
import {
  ecosystemBundleCards,
  faqItems,
  homeHero,
  inHomeContact,
  walkthroughTabs,
  whySavoryCards,
} from '../data/homePageData'
import { softwareFeatures } from '../data/siteData'

function HomePageComposed() {
  return (
    <main className="bg-white">
      <HomeHeroSection data={homeHero} />
      <FeatureWalkthroughSection tabsData={walkthroughTabs} />
      <SoftwareFeaturesGridSection features={softwareFeatures} />
      <WhySavorySection
        advantageCards={whySavoryCards}
        ecosystemCards={ecosystemBundleCards}
      />
      <InHomeContactSection data={inHomeContact} />
      <FaqSection items={faqItems} showViewMore />
    </main>
  )
}

export default HomePageComposed
