import { siteConfig } from '@/data/site-config'

const { contact } = siteConfig

const guides = [
  { no: '01', title: '분양 상담', desc: '분양가 · 계약 조건 안내' },
  { no: '02', title: '방문 예약', desc: '견본주택 방문 일정 예약' },
  { no: '03', title: '평형 안내', desc: '59 · 84 · 114㎡ 타입 상담' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(232,184,75,0.14), transparent 70%), linear-gradient(180deg, #0D1B2A 0%, #13253A 55%, #0D1B2A 100%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">Reservation</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">방문예약</h2>
        <p className="mt-4 text-sm text-gray-400 md:text-base">
          방문 예약은 전화로 접수합니다. 지금 바로 상담하세요.
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-gold/60" />
        <p className="mt-10 text-sm font-medium tracking-widest text-gold">{contact.label}</p>
        <a
          href={contact.telLink}
          className="mt-3 block text-5xl font-black tracking-tight text-white transition hover:text-gold sm:text-6xl md:text-7xl"
        >
          {contact.phone}
        </a>

        <a
          href={contact.telLink}
          className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-10 py-5 text-lg font-bold text-navy shadow-xl shadow-black/40 transition hover:brightness-110 sm:w-auto"
        >
          📞 전화 상담 바로하기
        </a>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {guides.map((g) => (
            <li key={g.no} className="bg-navy/90 px-6 py-6">
              <p className="text-sm font-black text-gold">{g.no}</p>
              <p className="mt-2 font-bold">{g.title}</p>
              <p className="mt-1 text-sm text-gray-400">{g.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
