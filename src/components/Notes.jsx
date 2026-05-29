import { useState } from 'react'
import { SectionHeader } from './Roadmap'

const NOTES = [
  {
    id: 1,
    tag: 'Linux',
    tagColor: 'var(--red)',
    date: 'May 2025',
    title: 'SELinux: Stop fighting it, start understanding it',
    excerpt: 'SELinux feels like an enemy until it clicks. The key insight: it\'s about process labeling, not file permissions. audit2allow is your best friend during troubleshooting.',
    readTime: '4 min',
  },
  {
    id: 2,
    tag: 'Docker',
    tagColor: 'var(--accent)',
    date: 'Apr 2025',
    title: 'Multi-stage builds cut my image size by 70%',
    excerpt: 'Went from a 1.2GB Node image to 180MB using multi-stage builds. The trick is separating build tools from the runtime. Final stage: just the binary and its libs.',
    readTime: '3 min',
  },
  {
    id: 3,
    tag: 'CI/CD',
    tagColor: 'var(--accent3)',
    date: 'Apr 2025',
    title: 'GitHub Actions: my first self-hosted runner setup',
    excerpt: 'GitHub-hosted runners are great until you need persistent state or a specific OS. Set up a self-hosted runner on a DigitalOcean droplet — took 20 mins, now I have full control.',
    readTime: '5 min',
  },
  {
    id: 4,
    tag: 'Azure',
    tagColor: 'var(--accent)',
    date: 'Mar 2025',
    title: 'Azure VNets: subnets, NSGs, and why it all matters',
    excerpt: 'RBAC in Azure finally made sense when I stopped thinking of it as permissions and started thinking of it as "who can do what, where". Scope is everything: management group → subscription → RG → resource.',
    readTime: '6 min',
  },
  {
    id: 5,
    tag: 'Terraform',
    tagColor: 'var(--accent2)',
    date: 'Feb 2025',
    title: 'Terraform state: what it is and why you shouldn\'t store it locally',
    excerpt: 'My first Terraform project used local state. That\'s fine for learning. But the moment two people (or a CI pipeline) touch the same infra, you need remote state with locking. Azure Blob + state lock = ✓.',
    readTime: '4 min',
  },
  {
    id: 6,
    tag: 'Linux',
    tagColor: 'var(--red)',
    date: 'Jan 2025',
    title: 'LVM cheatsheet: the commands I actually use',
    excerpt: 'Every RHCSA candidate struggles with LVM. Here are the 8 commands that cover 90% of exam scenarios: pvcreate, vgcreate, lvcreate, lvextend, resize2fs, pvdisplay, vgdisplay, lvdisplay.',
    readTime: '2 min',
  },
]

export default function Notes() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="notes" style={styles.section}>
      <div style={styles.container}>
        <SectionHeader
          tag="$ cat learning-notes.md"
          title="Learning Notes"
          sub="Short write-ups as I go. Rubber duck debugging on paper."
        />
        <div style={styles.grid}>
          {NOTES.map(n => (
            <NoteCard
              key={n.id}
              note={n}
              expanded={expanded === n.id}
              onToggle={() => setExpanded(expanded === n.id ? null : n.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function NoteCard({ note: n, expanded, onToggle }) {
  return (
    <div style={{ ...styles.card, ...(expanded ? { borderColor: n.tagColor } : {}) }}>
      <div style={styles.cardTop}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ ...styles.tag, color: n.tagColor, borderColor: `${n.tagColor}44`, background: `${n.tagColor}11` }}>
            {n.tag}
          </span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>{n.date}</span>
        </div>
        <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>{n.readTime} read</span>
      </div>
      <h3 style={styles.title}>{n.title}</h3>
      <p style={styles.excerpt}>{n.excerpt}</p>
      <button onClick={onToggle} style={{ ...styles.btn, color: n.tagColor }}>
        {expanded ? '− collapse' : '+ read more'}
      </button>
      {expanded && (
        <div style={styles.expanded}>
          <p className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.8 }}>
            // Full note coming soon — this is a preview. Check back or see the GitHub repo for the full markdown file.
          </p>
        </div>
      )}
    </div>
  )
}

const styles = {
  section: { padding: '6rem 2rem', background: 'var(--bg)' },
  container: { maxWidth: 1200, margin: '0 auto' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.25rem',
  },
  card: {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    transition: 'border-color 0.2s',
  },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tag: {
    fontSize: 9,
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    padding: '2px 8px',
    borderRadius: 3,
    border: '1px solid',
  },
  title: { fontSize: 15, fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 },
  excerpt: { fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 },
  btn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    padding: 0,
    textAlign: 'left',
    letterSpacing: '0.04em',
  },
  expanded: {
    marginTop: '0.5rem',
    padding: '0.75rem',
    background: 'var(--bg3)',
    borderRadius: 6,
    border: '1px solid var(--border)',
  },
}
