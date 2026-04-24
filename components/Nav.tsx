'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9,
        height: '80px',
        width: '100%',
        backgroundColor: scrolled ? 'rgba(30,32,34,0.96)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(10,10,10,0.4)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-20">
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: '18px',
            fontWeight: 200,
            color: '#dfe1e2',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          AVIRA
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex gap-12 list-none m-0 p-0">
          {(['Collection', 'Craft', 'Materials', 'About'] as const).map((label) => (
            <li key={label}>
              <a
                href={`/${label.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 200,
                  color: '#dfe1e2',
                  opacity: 0.7,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/collection"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: '#dfe1e2',
              color: '#0d0d0d',
              padding: '10px 20px',
              borderRadius: '2px',
              fontSize: '13px',
              fontWeight: 200,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Shop Now
          </a>
          <a
            href="/about"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'transparent',
              color: '#dfe1e2',
              opacity: 0.6,
              fontSize: '13px',
              padding: '10px 16px',
              textDecoration: 'none',
            }}
          >
            Contact
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-[#dfe1e2]" />
          <span className="block w-6 h-[2px] bg-[#dfe1e2]" />
          <span className="block w-6 h-[2px] bg-[#dfe1e2]" />
        </button>
      </div>
    </nav>
  )
}
