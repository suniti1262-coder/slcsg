import AboutSection from '../sections/AboutSection'
import AppDevelopmentSection from '../sections/AppDevelopmentSection'
import BlogSection from '../sections/BlogSection'
import CaseStudiesSection from '../sections/CaseStudiesSection'
import ContactSection from '../sections/ContactSection'
import CtaSection from '../sections/CtaSection'
import FinOpsSection from '../sections/FinOpsSection'
import HeroSection from '../sections/HeroSection'
import MonitoringPreviewSection from '../sections/MonitoringPreviewSection'
import PricingSection from '../sections/PricingSection'
import ProductsSection from '../sections/ProductsSection'
import ServicesSection from '../sections/ServicesSection'
import TechStackSection from '../sections/TechStackSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'

function HomePage({ branding }) {
  return (
    <>
      <HeroSection branding={branding} />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <TechStackSection />
      <FinOpsSection />
      <AppDevelopmentSection />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <MonitoringPreviewSection />
      <PricingSection />
      <BlogSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}

export default HomePage
