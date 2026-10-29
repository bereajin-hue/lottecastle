import { siteConfig } from '@/data/site-config'

const { overview, sellingPoints } = siteConfig.business

export default function BusinessSection() {
  return (
    <section id="business" className="bg-navy py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">Business Overview</p>
        <h2 className="mt-2 text-3xl font-bold text-gold md:text-4xl">사업개요</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <table className="w-full text-left text-sm md:text-base">
            <caption className="sr-only">경기광주역 롯데캐슬 시그니처 2단지 사업개요</caption>
            <tbody>
              {Object.entries(overview).map(([key, value]) => (
                <tr key={key} className="border-b border-white/10">
                  <th scope="row" className="w-24 py-4 pr-4 align-top font-medium text-gold md:w-28">
                    {key}
                  </th>
                  <td className="py-4 text-white/90">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="grid gap-4">
            {sellingPoints.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/50"
              >
                <span className="text-3xl leading-none" aria-hidden>
                  {p.icon}
                </span>
                <div>
                  <h3 className="font-bold text-gold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
