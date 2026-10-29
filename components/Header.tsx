'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/data/site-config'

const { header } = siteConfig
const anchors = ['business', 'location', 'complex', 'product', 'contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = logoRef.current
    if (img && img.complete && img.naturalWidth === 0) setLogoOk(false)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-navy/95 shadow-lg shadow-black/30 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-8">
        <a href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {logoOk && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={logoRef}
              src={header.logo}
              alt="롯데캐슬 로고"
              width={120}
              height={32}
              className="h-7 w-auto md:h-8"
              onError={() => setLogoOk(false)}
            />
          )}
          <span className="text-base font-bold tracking-tight text-white md:text-lg">
            {header.projectName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {header.gnb.map((label, i) => (
            <a
              key={label}
              href={`#${anchors[i]}`}
              className="text-sm font-medium text-white/90 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a
            href={siteConfig.contact.telLink}
            className="rounded-full border border-gold px-4 py-1.5 text-sm font-bold text-gold transition hover:bg-gold hover:text-navy"
          >
            {header.phone}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy md:hidden" aria-label="모바일 메뉴">
          {header.gnb.map((label, i) => (
            <a
              key={label}
              href={`#${anchors[i]}`}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 px-6 py-4 text-white/90 hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a href={siteConfig.contact.telLink} className="block px-6 py-4 font-bold text-gold">
            📞 {header.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
