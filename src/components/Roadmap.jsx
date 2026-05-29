const PHASES = [
  {
    phase: '01',
    title: 'Linux Foundation',
    cert: 'RHCSA — Red Hat Certified System Administrator',
    status: 'active',
    progress: 62,
    date: 'Jan 2025 – Present',
    color: 'var(--red)',
    tasks: [
      { done: true,  text: 'File system & permissions deep dive' },
      { done: true,  text: 'Process management & systemd mastery' },
      { done: true,  text: 'Networking: nmcli, firewalld, SELinux' },
      { done: true,  text: 'Storage: LVM, partitioning, stratis' },
      { done: false, text: 'Containers with podman' },
      { done: false, text: 'Exam simulation & practice labs' },
    ],
    badge: 'IN PROGRESS',
  },
  {
    phase: '02',
    title: 'Azure Cloud Fundamentals',
    cert: 'AZ-104 — Microsoft Azure Administrator',
    status: 'upcoming',
    progress: 8,
    date: 'Q3 2025',
    color: 'var(--accent)',
    tasks: [
      { done: true,  text: 'AZ-900 fundamentals self-study ✓' },
      { done: false, text: 'Azure VMs, VNets & load balancers' },
      { done: false, text: 'Azure AD / Entra ID & RBAC' },
      { done: false, text: 'Storage accounts & blob lifecycle' },
      { done: false, text: 'Monitor, alerts & cost management' },
      { done: false, text: 'Exam prep & John Savill course' },
    ],
    badge: 'NEXT UP',
  },
  {
    phase: '03',
    title: 'Infrastructure as Code',
    cert: 'HashiCorp Terraform Associate',
    status: 'planned',
    progress: 0,
    date: 'Q4 2025',
    color: 'var(--accent2)',
    tasks: [
      { done: false, text: 'HCL syntax & providers' },
      { done: false, text: 'State management & backends' },
      { done: false, text: 'Modules & reusable infra patterns' },
      { done: false, text: 'Azure infra with Terraform' },
      { done: false, text: 'CI/CD with Terraform Cloud' },
      { done: false, text: 'Terraform Associate exam' },
    ],
    badge: 'PLANNED',
  },
  {
    phase: '04',
    title: 'Kubernetes & Platform Eng',
    cert: 'CKA — Certified Kubernetes Administrator',
    status: 'planned',
    progress: 0,
    date: '2026',
    color: 'var(--accent3)',
    tasks: [
      { done: false, text: 'Core k8s: pods, services, deployments' },
      { done: false, text: 'Networking: CNI, ingress, network policies' },
      { done: false, text: 'Storage & stateful workloads' },
      { done: false, text: 'AKS on Azure' },
      { done: false, text: 'GitOps with ArgoCD' },
      { done: false, text: 'CKA exam' },
    ],
    badge: 'HORIZON',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" style={styles.section}>
      <div style={styles.container}>
        <SectionHeader
          tag="$ cat roadmap.yaml"
          title="The Plan"
          sub="From Linux roots to cloud-native infrastructure — one cert at a time."
        />

        <div style={styles.phases}>
          {PHASES.map((p, i) => (
            <PhaseCard key={i} phase={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PhaseCard({ phase: p }) {
  const isActive = p.status === 'active'
  const isUpcoming = p.status === 'upcoming'

  return (
    <div style={{
      ...styles.card,
      ...(isActive ? styles.cardActive : {}),
      borderColor: isActive ? p.color : 'var(--border)',
    }}>
      <div style={styles.cardTop}>
        <div style={styles.phaseNum}>
          <span className="mono" style={{ fontSize: 11, color: p.color, letterSpacing: '0.1em' }}>PHASE</span>
          <span style={{ fontSize: 42, fontWeight: 800, color: 'var(--border-bright)', lineHeight: 1, fontFamily: 'var(--font-display)' }}>{p.phase}</span>
        </div>
        <div style={styles.cardMeta}>
          <div style={styles.cardTitleRow}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>{p.title}</h3>
            <span style={{
              ...styles.badge,
              background: isActive ? `${p.color}22` : 'var(--bg3)',
              color: isActive ? p.color : isUpcoming ? 'var(--accent)' : 'var(--text-muted)',
              borderColor: isActive ? `${p.color}44` : 'var(--border)',
            }}>
              {p.badge}
            </span>
          </div>
          <p className="mono" style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{p.cert}</p>
          <p className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{p.date}</p>
        </div>
      </div>

      <div style={styles.progressWrap}>
        <div style={styles.progressRow}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Progress</span>
          <span className="mono" style={{ fontSize: 12, color: p.color }}>{p.progress}%</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${p.progress}%`, background: p.color }} />
        </div>
      </div>

      <ul style={styles.tasks}>
        {p.tasks.map((t, i) => (
          <li key={i} style={styles.task}>
            <span style={{
              width: 16, height: 16, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10,
              background: t.done ? `${p.color}33` : 'transparent',
              border: `1px solid ${t.done ? p.color : 'var(--border-bright)'}`,
              color: t.done ? p.color : 'transparent',
            }}>✓</span>
            <span style={{ fontSize: 13, color: t.done ? 'var(--text-dim)' : 'var(--text-muted)', textDecoration: t.done ? 'none' : 'none' }}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SectionHeader({ tag, title, sub }) {
  return (
    <div style={styles.header}>
      <span className="mono" style={styles.tag}>{tag}</span>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.sub}>{sub}</p>
    </div>
  )
}

const styles = {
  section: { padding: '6rem 2rem', background: 'var(--bg2)' },
  container: { maxWidth: 1200, margin: '0 auto' },
  header: { marginBottom: '4rem' },
  tag: { fontSize: 12, color: 'var(--accent)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' },
  title: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' },
  sub: { fontSize: 16, color: 'var(--text-muted)', maxWidth: 520 },
  phases: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '1.5rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  cardActive: {
    boxShadow: '0 0 40px rgba(239,68,68,0.06)',
  },
  cardTop: { display: 'flex', gap: '1rem', marginBottom: '1.25rem' },
  phaseNum: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
  cardMeta: { flex: 1 },
  cardTitleRow: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' },
  badge: {
    fontSize: 9,
    fontWeight: 700,
    padding: '3px 8px',
    borderRadius: 3,
    border: '1px solid',
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-mono)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  progressWrap: { marginBottom: '1.25rem' },
  progressRow: { display: 'flex', justifyContent: 'space-between', marginBottom: 6 },
  progressBar: { height: 4, background: 'var(--bg3)', borderRadius: 2, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 2, transition: 'width 1s ease' },
  tasks: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 },
  task: { display: 'flex', alignItems: 'center', gap: 10 },
}
