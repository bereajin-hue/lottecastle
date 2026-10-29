import SafeImage from '../SafeImage'
import { siteConfig } from '@/data/site-config'

const { location } = siteConfig

export default function LocationSection() {
  return (
    <section id="location" className="bg-ink py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">Location</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">입지안내</h2>
      </div>

      <div className="mt-10 w-full">
        <SafeImage
          src={location.image}
          alt={location.alt}
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-[300px] max-h-[600px] w-full object-cover sm:h-[450px] md:h-[600px]"
        />
      </div>

      <ul className="mx-auto mt-10 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {location.points.map((p) => (
          <li key={p.text} className="rounded-xl border border-white/10 p-5">
            <span className="text-3xl" aria-hidden>
              {p.icon}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/90">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
