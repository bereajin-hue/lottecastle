import SafeImage from '../SafeImage'
import { siteConfig } from '@/data/site-config'

const { complex } = siteConfig

export default function ComplexSection() {
  return (
    <section id="complex" className="text-white">
      {/* 1. 배치도 */}
      <div className="bg-ink py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">Complex</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">단지소개</h2>
        </div>
        <a href={complex.sitePlan.image} target="_blank" rel="noopener" className="mt-10 block">
          <SafeImage
            src={complex.sitePlan.image}
            alt={complex.sitePlan.alt}
            width={1920}
            height={900}
            sizes="100vw"
            placeholderClassName="bg-gray-800 h-[320px] md:h-[700px]"
            className="mx-auto h-auto max-h-[700px] w-full object-contain"
          />
        </a>
        <p className="mt-6 px-4 text-center text-base font-medium tracking-wide text-white/80 md:text-lg">
          APT 10개동 · 총 1,249세대 · 지하10층~최고26층
        </p>
        <p className="mt-2 text-center text-xs text-white/40 md:hidden">이미지를 누르면 크게 볼 수 있습니다</p>
      </div>

      {/* 2. 커뮤니티 층별 안내 */}
      <div className="bg-navy py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h3 className="text-2xl font-bold text-gold md:text-3xl">단지 내 커뮤니티 시설</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Object.entries(complex.facilities).map(([floor, items]) => (
              <div key={floor} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-black text-gold md:text-4xl">{floor}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-gold/70 px-3 py-1 text-xs text-white md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. 인도어 골프장 — 초광폭(1920×500) 이미지라 자르지 않고 전체 노출 */}
      <div className="bg-ink pb-12 md:pb-16">
        <SafeImage
          src={complex.golf.image}
          alt={complex.golf.alt}
          width={1920}
          height={500}
          sizes="100vw"
          placeholderClassName="bg-gray-800 h-[200px] md:h-[400px]"
          className="h-auto w-full"
        />
        <div className="mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-10">
          <h3 className="text-2xl font-bold md:text-4xl">경기광주 유일 · 단지 내 실내 인도어 골프장</h3>
          <p className="mt-2 text-sm text-gray-400 md:text-lg">
            실내 스크린골프 + 실제 퍼팅그린 + 인도어 골프연습장 3종 완비
          </p>
        </div>
      </div>

      {/* 4. 스페셜 서비스 5 */}
      <div className="bg-navy py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h3 className="text-2xl font-bold text-gold md:text-3xl">더 특별해진 2단지만의 SPECIAL SERVICE 5</h3>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {complex.specialServices.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-gray-700 p-6 transition hover:border-gold/60">
                <p className="text-2xl font-black text-gold">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-3 font-bold leading-snug text-white">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 5. 인테리어 */}
      <div className="relative bg-ink">
        <SafeImage
          src={complex.interior.image}
          alt={complex.interior.alt}
          width={1280}
          height={720}
          sizes="100vw"
          className="aspect-video w-full object-cover md:aspect-auto md:h-[600px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 md:p-14">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Interior</p>
          <p className="mt-1 text-xl font-bold md:text-3xl">일상을 바꾸는 프리미엄 라이프</p>
        </div>
      </div>

      {/* 6. 쌍령공원 — 이미지 내 라벨·캡션이 가려지지 않도록 텍스트는 하단 배치 */}
      <div className="bg-[#1A3A2F] pb-12 md:pb-20">
        <SafeImage
          src={complex.park.image}
          alt={complex.park.alt}
          width={1920}
          height={900}
          sizes="100vw"
          placeholderClassName="bg-gray-800 h-[300px] md:h-[600px]"
          className="h-auto w-full"
        />
        <div className="mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-10">
          <h3 className="text-2xl font-bold md:text-4xl">51만㎡ 쌍령공원 — 단 한걸음</h3>
          <p className="mt-2 text-sm text-gray-200 md:text-lg">
            세계적 건축가 리차드 마이어 참여 · 꿈자람센터(CDC) · 동심생태과학관(CEM)
          </p>
        </div>
      </div>
    </section>
  )
}
