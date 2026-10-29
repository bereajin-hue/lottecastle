import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import BusinessSection from '@/components/sections/BusinessSection'
import LocationSection from '@/components/sections/LocationSection'
import ComplexSection from '@/components/sections/ComplexSection'
import ProductSection from '@/components/sections/ProductSection'
import ContactSection from '@/components/sections/ContactSection'
import { siteConfig } from '@/data/site-config'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <BusinessSection />
        <LocationSection />
        <ComplexSection />
        <ProductSection />
        <ContactSection />
      </main>
      <footer className="bg-black py-10 text-center text-xs leading-relaxed text-gray-500">
        <p>{siteConfig.business.overview.사업명}</p>
        <p>
          {siteConfig.business.overview.위치} · 분양문의 {siteConfig.contact.phone}
        </p>
        <p className="mt-3 text-gray-600">
          본 홈페이지의 CG 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.
        </p>
      </footer>
    </>
  )
}
