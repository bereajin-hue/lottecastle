import SafeImage from '../SafeImage'
import { siteConfig } from '@/data/site-config'

const { units } = siteConfig.product

export default function ProductSection() {
  return (
    <section id="product" className="bg-white py-12 text-navy md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400">Unit Plan</p>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">평형안내</h2>
        <h3 className="mt-3 text-base text-gray-500 md:text-lg">경기광주역 롯데캐슬 시그니처 2단지 평면도</h3>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <article key={u.type} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
              <div className="h-2" style={{ backgroundColor: u.color }} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-md px-3 py-1 text-sm font-bold text-white"
                    style={{ backgroundColor: u.color }}
                  >
                    {u.badge}
                  </span>
                  <span className="text-sm font-bold text-navy">{u.count}</span>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-medium text-navy">{u.type}</span> · {u.shape} · {u.pyeong}
                </p>
              </div>
              <a href={u.planImage} target="_blank" rel="noopener" className="block bg-gray-50">
                <SafeImage
                  src={u.planImage}
                  alt={u.planAlt}
                  width={800}
                  height={600}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  placeholderClassName="bg-gray-100 !text-gray-400"
                  className="aspect-[4/3] w-full object-contain"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
