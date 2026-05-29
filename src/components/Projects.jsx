import { SectionHeader } from './Roadmap'

const PROJECTS = [
  {
    title: 'cloud-portfolio',
    desc: 'This very site. React + Vite, auto-deploys to Cloudflare Pages on every push via GitHub Actions. Zero manual deployments.',
    tags: ['React', 'Vite', 'GitHub Actions', 'Cloudflare Pages', 'CI/CD'],
    stars: 12,
    color: 'var(--accent)',
    status: 'live',
    link: '#',
    highlight: true,
  },
  {
    title: 'linux-lab-configs',
    desc: 'Personal RHCSA prep lab configs. Vagrant + VirtualBox multi-VM setup replicating exam conditions. Automated with shell scripts.',
    tags: ['Linux', 'Bash', 'Vagrant', 'RHCSA'],
    stars: 8,
    color: 'var(--red)',
    status: 'active',
    link: '#',
    highlight: false,
  },
  {
    title: 'docker-homelab',
    desc: 'Self-hosted services stack: Nginx reverse proxy, Portainer, Uptime Kuma, Redis, and Watchtower for auto-updates. All Compose-managed.',
    tags: ['Docker', 'Compose', 'Nginx', 'Self-hosted'],
    stars: 21,
    color: 'var(--accent3)',
    status: 'live',
    link: '#',
    highlight: false,
  },
  {
    title: 'az-study-tracker',
    desc: 'CLI tool to track AZ-104 study sessions, log completed topics and set exam date countdowns. Built in Python, data in JSON.',
    tags: ['Python', 'CLI', 'Azure'],
    stars: 5,
    color: 'var(--accent2)',
    status: 'wip',
    link: '#',
    highlight: false,
  },
  {
    title: 'nginx-terraform-azure',
    desc: 'First Terraform project: provisions an Azure VM, configures Nginx via remote-exec, adds DNS record. Learning IaC hands-on.',
    tags: ['Terraform', 'Azure', 'Nginx', 'IaC'],
    stars: 9,
    color: 'var(--amber)',
    status: 'wip',
    link: '#',
    highlight: false,
  },
  {
    title: 'bash-toolkit',
    desc: 'Collection of Bash scripts for system auditing, disk usage alerts, log rotation helpers, and user management automation.',
    tags: ['Bash', 'Linux', 'Automation'],
    stars: 17,
    color: 'var(--accent)',
    status: 'active',
    link: '#',
    highlight: false,
  },
]

const STATUS_MAP = {
  live:   { label: 'LIVE',   color: 'var(--accent3)' },
  active: { label: 'ACTIVE', color: 'var(--accent)' },
  wip:    { label: 'WIP',    color: 'var(--amber)' },
}

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <SectionHeader
          tag="$ ls ~/projects"
          title="Projects"
          sub="Things I've built while learning. All repos on GitHub."
        />
        <div style={styles.grid}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  const s = STATUS_MAP[p.status]
  return (
    <div style={{
      ...styles.card,
      ...(p.highlight ? { borderColor: p.color, boxShadow: `0 0 30px ${p.color}10` } : {}),
    }}>
      <div style={styles.cardHead}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ ...styles.dot, background: p.color }} />
          <span className="mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{p.title}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ ...styles.status, color: s.color, borderColor: `${s.color}44`, background: `${s.color}11` }}>
            {s.label}
          </span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>⭐ {p.stars}</span>
        </div>
      </div>
      <p style={styles.desc}>{p.desc}</p>
      <div style={styles.tags}>
        {p.tags.map((t, i) => (
          <span key={i} style={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  )
}

const styles = {
  section: { padding: '6rem 2rem', background: 'var(--bg2)' },
  container: { maxWidth: 1200, margin: '0 auto' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.25rem',
  },
  card: {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transition: 'border-color 0.2s, transform 0.2s',
  },
  cardHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: '50%', flexShrink: 0 },
  status: {
    fontSize: 9,
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    padding: '2px 7px',
    borderRadius: 3,
    border: '1px solid',
  },
  desc: { fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    fontSize: 11,
    padding: '3px 9px',
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: 20,
    color: 'var(--text-dim)',
    fontFamily: 'var(--font-mono)',
  },
}
