import HeroSection from '@/components/landing/HeroSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import ToolsGrid from '@/components/landing/ToolsGrid'
import AboutSection from '@/components/landing/AboutSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ToolsGrid />
      <AboutSection />
    </>
  )
}
