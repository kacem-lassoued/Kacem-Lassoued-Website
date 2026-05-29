import { useEffect, useState } from 'react'

const TYPING_STRINGS = [
  'Linux Engineer in training',
  'Cloud & Infra enthusiast',
  'RHCSA candidate',
  'Docker wrangler',
  'CI/CD pipeline builder',
]

export default function Hero({ visitors }) {
  const [displayed, setDisplayed] = useState('')
  const [strIdx, setStrIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPING_STRINGS[strIdx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 60)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 30)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setStrIdx(s => (s + 1) % TYPING_STRINGS.length)
    }
    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, strIdx])

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        <div style={styles.noise} />
        <div style={styles.inner}>
          <div style={styles.badge}>
            <span style={styles.dot} />
            <span className="mono" style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '0.1em' }}>
              AVAILABLE FOR INTERNSHIPS
            </span>
          </div>

          <h1 style={styles.name}>Kacem<br />Lassoued</h1>

          <div style={styles.typingRow}>
            <span className="mono" style={styles.prompt}>$ whoami →&nbsp;</span>
            <span className="mono" style={styles.typed}>{displayed}</span>
            <span style={styles.cursor}>▋</span>
          </div>

          <p style={styles.bio}>
            IT student at <span style={{ color: 'var(--accent)' }}>Tunis Business School</span> on a mission to go from
            code to cloud. Currently grinding RHCSA, building toward AZ-104, and automating everything with Terraform.
            Docker is already home.
          </p>

          <div style={styles.statsRow}>
            <Stat label="Visitors" value={visitors} accent="var(--accent)" />
            <Stat label="Certs in progress" value="2" accent="var(--accent2)" />
            <Stat label="Repos" value="14" accent="var(--accent3)" />
            <Stat label="Commits (30d)" value="87" accent="var(--amber)" />
          </div>

          <div style={styles.btnRow}>
            <a href="#roadmap" style={styles.btnPrimary}>View Roadmap</a>
            <a href="https://github.com/kacem-lassoued" target="_blank" rel="noreferrer" style={styles.btnSecondary}>GitHub →</a>
          </div>
        </div>

        <div style={styles.terminalWrap}>
          <Terminal />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, accent }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="mono" style={{ fontSize: 28, fontWeight: 700, color: accent }}>{value}</div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}

function Terminal() {
  const lines = [
    { t: 300, text: '$ uname -r', color: 'var(--accent)' },
    { t: 900, text: '6.8.0-45-generic', color: 'var(--text-dim)' },
    { t: 1400, text: '$ docker ps', color: 'var(--accent)' },
    { t: 2000, text: 'nginx   Up 3 days   0.0.0.0:80->80', color: 'var(--text-dim)' },
    { t: 2500, text: 'redis   Up 3 days   0.0.0.0:6379->6379', color: 'var(--text-dim)' },
    { t: 3100, text: '$ az account show', color: 'var(--accent)' },
    { t: 3700, text: '"state": "Enabled"', color: 'var(--accent3)' },
    { t: 4200, text: '$ terraform plan', color: 'var(--accent)' },
    { t: 4800, text: 'Plan: 3 to add, 0 to change', color: 'var(--accent3)' },
    { t: 5400, text: '$ _', color: 'var(--accent)' },
  ]

  const [visible, setVisible] = useState([])

  useEffect(() => {
    const timers = lines.map((l, i) =>
      setTimeout(() => setVisible(v => [...v, i]), l.t)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div style={styles.terminal}>
      <div style={styles.termBar}>
        <span style={{ ...styles.termDot, background: 'var(--red)' }} />
        <span style={{ ...styles.termDot, background: 'var(--amber)' }} />
        <span style={{ ...styles.termDot, background: 'var(--accent3)' }} />
        <span className="mono" style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-muted)' }}>
          kacem@cloud-lab:~
        </span>
      </div>
      <div style={styles.termBody}>
        {lines.map((l, i) =>
          visible.includes(i) ? (
            <div key={i} className="mono" style={{ fontSize: 13, color: l.color, marginBottom: 4, animation: 'fadeIn 0.3s ease' }}>
              {l.text}
            </div>
          ) : null
        )}
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(4px); } to { opacity:1; transform:none; } }`}</style>
    </div>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '6rem 2rem 4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  grid: {
    maxWidth: 1200,
    margin: '0 auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
  },
  noise: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,212,255,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  inner: { position: 'relative', zIndex: 1 },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    border: '1px solid rgba(0,212,255,0.3)',
    background: 'rgba(0,212,255,0.05)',
    borderRadius: 4,
    padding: '4px 12px',
    marginBottom: '1.5rem',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: 'var(--accent)',
    boxShadow: '0 0 8px var(--accent)',
    animation: 'pulse 2s infinite',
  },
  name: {
    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.5))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  typingRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: 2,
  },
  prompt: { fontSize: 15, color: 'var(--text-muted)' },
  typed: { fontSize: 15, color: 'var(--accent)', fontWeight: 500 },
  cursor: { fontSize: 15, color: 'var(--accent)', animation: 'blink 1s step-end infinite' },
  bio: {
    fontSize: 16,
    color: 'var(--text-dim)',
    lineHeight: 1.7,
    maxWidth: 520,
    marginBottom: '2rem',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    marginBottom: '2rem',
    padding: '1.25rem',
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: 8,
  },
  btnRow: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  btnPrimary: {
    display: 'inline-block',
    padding: '12px 28px',
    background: 'var(--accent)',
    color: '#000',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 4,
    letterSpacing: '0.05em',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  btnSecondary: {
    display: 'inline-block',
    padding: '12px 28px',
    border: '1px solid var(--border-bright)',
    color: 'var(--text)',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 14,
    borderRadius: 4,
    letterSpacing: '0.05em',
    textDecoration: 'none',
    transition: 'border-color 0.2s',
  },
  terminalWrap: { position: 'relative', zIndex: 1 },
  terminal: {
    background: '#0d1117',
    border: '1px solid var(--border-bright)',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
  },
  termBar: {
    background: '#161b22',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    borderBottom: '1px solid var(--border)',
  },
  termDot: { width: 12, height: 12, borderRadius: '50%' },
  termBody: { padding: '1.25rem', minHeight: 280 },
}
