import { SectionHeader } from './Roadmap'

const SKILL_GROUPS = [
  {
    group: 'Operating Systems & Linux',
    icon: '🐧',
    skills: [
      { name: 'Linux (RHEL/Ubuntu)', level: 75, tag: 'RHCSA prep' },
      { name: 'Shell scripting (Bash)', level: 70, tag: 'daily use' },
      { name: 'Systemd & services', level: 65, tag: 'solid' },
      { name: 'Networking (firewalld, nmcli)', level: 60, tag: 'in progress' },
    ],
  },
  {
    group: 'Containers & CI/CD',
    icon: '🐳',
    skills: [
      { name: 'Docker', level: 85, tag: 'comfortable' },
      { name: 'GitHub Actions', level: 80, tag: 'daily use' },
      { name: 'Docker Compose', level: 78, tag: 'solid' },
      { name: 'CI/CD pipelines', level: 72, tag: 'comfortable' },
    ],
  },
  {
    group: 'Cloud & IaC',
    icon: '☁️',
    skills: [
      { name: 'Azure (AZ-900 done)', level: 40, tag: 'learning' },
      { name: 'Terraform (basics)', level: 35, tag: 'learning' },
      { name: 'Azure Networking', level: 28, tag: 'planned' },
      { name: 'Kubernetes', level: 20, tag: 'horizon' },
    ],
  },
  {
    group: 'Dev & Tooling',
    icon: '⚙️',
    skills: [
      { name: 'Git / GitHub', level: 88, tag: 'strong' },
      { name: 'Python', level: 72, tag: 'scripting' },
      { name: 'VS Code & Vim', level: 80, tag: 'daily' },
      { name: 'React / Vite', level: 55, tag: 'learning' },
    ],
  },
]

const TOOLS = [
  'Linux', 'Docker', 'Git', 'GitHub Actions', 'Terraform', 'Azure CLI',
  'Bash', 'Python', 'Vim', 'VS Code', 'Nginx', 'Redis',
  'Podman', 'Ansible (intro)', 'Cloudflare', 'Vite',
]

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <SectionHeader
          tag="$ skills --list"
          title="Tech Stack"
          sub="Honest skill levels — no fake expert badges here."
        />

        <div style={styles.groups}>
          {SKILL_GROUPS.map((g, i) => (
            <div key={i} style={styles.group}>
              <div style={styles.groupHeader}>
                <span style={{ fontSize: 20 }}>{g.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{g.group}</span>
              </div>
              {g.skills.map((s, j) => (
                <SkillBar key={j} skill={s} delay={j * 100} />
              ))}
            </div>
          ))}
        </div>

        <div style={styles.toolsSection}>
          <p className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
            {'// TOOLS & TECH USED'}
          </p>
          <div style={styles.toolsGrid}>
            {TOOLS.map((t, i) => (
              <span key={i} style={styles.tool}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, delay }) {
  const color = skill.level >= 70 ? 'var(--accent3)' : skill.level >= 50 ? 'var(--accent)' : 'var(--accent2)'

  return (
    <div style={styles.skillRow}>
      <div style={styles.skillMeta}>
        <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>{skill.name}</span>
        <div style={styles.skillRight}>
          <span style={{ ...styles.skillTag, color, borderColor: `${color}44`, background: `${color}11` }}>
            {skill.tag}
          </span>
          <span className="mono" style={{ fontSize: 12, color }}>{skill.level}%</span>
        </div>
      </div>
      <div style={styles.bar}>
        <div style={{ ...styles.fill, width: `${skill.level}%`, background: color, animationDelay: `${delay}ms` }} />
      </div>
    </div>
  )
}

const styles = {
  section: { padding: '6rem 2rem', background: 'var(--bg)' },
  container: { maxWidth: 1200, margin: '0 auto' },
  groups: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  group: {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  groupHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.25rem' },
  skillRow: { display: 'flex', flexDirection: 'column', gap: 6 },
  skillMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  skillRight: { display: 'flex', alignItems: 'center', gap: 8 },
  skillTag: {
    fontSize: 9,
    padding: '2px 6px',
    borderRadius: 3,
    border: '1px solid',
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.06em',
    fontWeight: 600,
  },
  bar: { height: 3, background: 'var(--bg3)', borderRadius: 2, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 2 },
  toolsSection: { marginTop: '1rem' },
  toolsGrid: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  tool: {
    fontSize: 12,
    padding: '5px 12px',
    border: '1px solid var(--border-bright)',
    borderRadius: 20,
    color: 'var(--text-dim)',
    fontFamily: 'var(--font-mono)',
    background: 'var(--bg2)',
  },
}
