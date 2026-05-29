import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#notes', label: 'Notes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.inner}>
        <a href="#" style={styles.logo}>
          <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 15 }}>KL</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-dim)', marginLeft: 8 }}>cloud.journey</span>
        </a>
        <div style={styles.links}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={styles.link}>{l.label}</a>
          ))}
          <a
            href="https://www.linkedin.com/in/kacem-lassoued-620a45294/"
            target="_blank"
            rel="noreferrer"
            style={styles.cta}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1.25rem 2rem',
    transition: 'background 0.3s, border-color 0.3s, padding 0.3s',
    borderBottom: '1px solid transparent',
  },
  navScrolled: {
    background: 'rgba(10,14,26,0.92)',
    backdropFilter: 'blur(12px)',
    borderColor: 'var(--border)',
    padding: '0.85rem 2rem',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  links: { display: 'flex', alignItems: 'center', gap: '2rem' },
  link: {
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--text-dim)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  cta: {
    fontSize: 13,
    fontWeight: 700,
    padding: '7px 18px',
    border: '1px solid var(--accent)',
    borderRadius: 4,
    color: 'var(--accent)',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-display)',
  },
}
