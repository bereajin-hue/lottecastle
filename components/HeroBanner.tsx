'use client'

import { useEffect, useState } from 'react'
import SafeImage from './SafeImage'
import { siteConfig } from '@/data/site-config'

const { slides } = siteConfig.hero

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [current])

  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden bg-gray-800" aria-label="메인 배너">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          <SafeImage
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
              i === current ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-6xl">
          {slides[0].title}
        </h1>
        <div key={current} className="mt-5 animate-fadeUp md:mt-7">
          {current !== 0 && (
            <p className="mb-2 text-lg font-bold text-gold md:text-2xl">{slides[current].title}</p>
          )}
          <p className="text-base text-white/90 md:text-xl">{slides[current].subtitle}</p>
        </div>
      </div>

      <div className="absolute bottom-24 right-6 z-10 flex gap-2 md:bottom-10 md:right-10">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`${i + 1}번 슬라이드 보기`}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? 'w-8 bg-gold' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      <a
        href="#contact"
        className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 text-base font-bold text-navy shadow-xl shadow-black/40 transition hover:scale-105 md:bottom-8 md:text-lg"
      >
        📞 {siteConfig.contact.phone} 상담 문의
      </a>
    </section>
  )
}
