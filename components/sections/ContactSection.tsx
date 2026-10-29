'use client'

import { useState, type FormEvent } from 'react'
import { siteConfig } from '@/data/site-config'

const { contact, product } = siteConfig

const unitOptions = product.units.map(
  (u) => `${u.type} (${u.pyeong})${u.badge === '84A2' ? ' — 주력' : ''}`
)

const inputClass =
  'w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-gold'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-navy py-12 pb-28 text-white md:py-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">Reservation</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">방문예약</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-gray-400">지금 바로 전화 상담하세요</p>
            <p className="mt-2 text-sm text-gray-500">{contact.label}</p>
            <p className="mt-6 text-5xl font-black tracking-tight text-gold md:text-6xl">{contact.phone}</p>
            <a
              href={contact.telLink}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gold px-8 py-5 text-lg font-bold text-navy shadow-xl shadow-black/40 transition hover:brightness-110 sm:w-auto sm:self-start"
            >
              📞 {contact.phone} 전화 상담 바로하기
            </a>
          </div>

          <form
            action={contact.formspreeEndpoint}
            method="POST"
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <label className="grid gap-2 text-sm text-gray-300">
              성함
              <input name="name" placeholder="성함" required autoComplete="name" className={inputClass} />
            </label>
            <label className="grid gap-2 text-sm text-gray-300">
              연락처
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="연락처 (010-0000-0000)"
                required
                autoComplete="tel"
                className={inputClass}
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-300">
              희망 평형
              <select name="unit_type" className={inputClass} defaultValue={unitOptions[2]}>
                {unitOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm text-gray-300">
              방문 희망일
              <input name="visit_date" type="date" className={inputClass} />
            </label>
            <label className="flex items-start gap-2 text-xs leading-relaxed text-gray-400">
              <input type="checkbox" name="privacy_agree" value="동의" required className="mt-0.5 accent-[#E8B84B]" />
              개인정보 수집·이용에 동의합니다. (수집항목: 성함, 연락처 / 목적: 분양 상담 및 방문 예약 / 보유기간: 분양 종료 시까지)
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 rounded-lg bg-gold py-4 text-base font-bold text-navy transition hover:brightness-110 disabled:opacity-60"
            >
              {status === 'sending' ? '전송 중…' : '방문 예약 신청'}
            </button>
            {status === 'done' && (
              <p className="text-center text-sm text-gold">예약 신청이 접수되었습니다. 곧 연락드리겠습니다.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-400">
                전송에 실패했습니다. {contact.phone}로 전화 주시면 바로 안내해 드립니다.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
