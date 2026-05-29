export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <span className="mono" style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>
            kacem@cloud-lab:~$
          </span>
          <span className="mono" style={{ fontSize: 13, color: 'var(--text-muted)', marginLeft: 8 }}>
            echo "thanks for visiting"
          </span>
        </div>
        <div style={styles.links}>
          <a href="https://github.com/kacem-lassoued" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/kacem-lassoued-620a45294/" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
          <a href="mailto:kacem.lass@gmail.com" style={styles.link}>Email</a>
        </div>
        <div>
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            © {year} Kacem Lassoued · Built with React + Vite · Deployed on Cloudflare Pages
          </span>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '3rem 2rem',
    borderTop: '1px solid var(--border)',
    background: 'var(--bg2)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
  },
  left: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: 4 },
  links: { display: 'flex', gap: '2rem' },
  link: {
    fontSize: 13,
    color: 'var(--text-dim)',
    textDecoration: 'none',
    fontWeight: 500,
    fontFamily: 'var(--font-display)',
    transition: 'color 0.2s',
  },
}
