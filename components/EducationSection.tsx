'use client'

import { Container } from 'react-bootstrap'
import styles from './EducationSection.module.css'

interface EducationItem {
  school: string
  degree: string
  year: string
}

const educationData: EducationItem[] = [
  {
    school: 'Salesian College, Siliguri',
    degree: 'Bachelor of Computer Applications (BCA)',
    year: '2021 - 2025'
  },
  {
    school: 'Techno India Group Public School, Siliguri',
    degree: 'Higher Secondary Education',
    year: '2019 - 2021',
  },
  {
    school: 'Gyanoday Niketan, Darjeeling',
    degree: 'High School',
    year: '2019',
  }
]

export default function EducationSection() {
  return (
    <section id="education" className={styles.educationSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.sectionSubtitle}>
            My academic journey and professional development
          </p>
        </div>

        <div className={styles.timeline}>
          {educationData.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.school}>{item.school}</h3>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <p className={styles.degree}>{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
