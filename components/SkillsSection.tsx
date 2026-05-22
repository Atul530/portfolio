'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from './SkillsSection.module.css'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Linux',
    skills: ['Bash Scripting', 'System Management', 'User/Group Management', 'Package Management', 'Log Monitoring', 'SSH', 'Networking', 'Virtualization', 'Automation', 'AWK', 'SED', 'Cron', 'Ubuntu 24.04 LTS', 'Ubuntu 24.04 LTS Server', 'Fedora 44']
  },
  {
    title: 'Tools & Technologies',
    skills: ['VS Code', 'npm', 'Docker', 'Nginx','Responsive Design', 'AI', 'Git', 'GitHub', 'GitLab', 'Angios']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'Angular', 'Python', 'Java']
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <p className={styles.sectionSubtitle}>
            Technologies and tools I've mastered and am currently learning
          </p>
        </div>

        <Row className="g-4">
          {skillCategories.map((category, idx) => (
            <Col key={idx} lg={4} md={6} xs={12}>
              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>{category.title}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className={styles.skillItem}>
                      <span className={styles.skillBullet}>→</span>
                      <span className={styles.skillName}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
