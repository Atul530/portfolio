'use client'

import { Container, Row, Col } from 'react-bootstrap'
import { FiAward } from 'react-icons/fi'
import styles from './CertificatesSection.module.css'

interface Certificate {
  title: string
  issuer: string
  date: string
  credentialUrl?: string
}

const certificates: Certificate[] = [
  {
    title: 'Git for Beginners',
    issuer: 'Udemy',
    date: '2025'
  },
  {
    title: 'React Crash Course: From Zero to Hero',
    issuer: 'Udemy',
    date: '2025'
  },
  {
    title: 'Java, C++ and PHP Crash Course All-in-One for Beginners',
    issuer: 'Udemy',
    date: '2025'
  },
  {
    title: 'Mastering MySQL: Database Creation, Management & SQL Queries',
    issuer: 'Udemy',
    date: '2025'
  },
  {
    title: 'Object-Oriented Programming (OOP) - Learn to Code Faster',
    issuer: 'Udemy',
    date: '2024'
  },
  {
    title: 'Python Programming Mastery: From Beginner to Expert',
    issuer: 'Udemy',
    date: '2024'
  },
  {
    title: 'Complete JavaScript with HTML5, CSS3 from Zero to Expert',
    issuer: 'Udemy',
    date: '2024'
  },
  {
    title: 'Angular - The Complete Course (2024 Edition)',
    issuer: 'Udemy',
    date: '2024'
  },
  {
    title: 'Object-Oriented Programming (OOP) - Learn to Code Faster',
    issuer: 'Udemy',
    date: '2025'
  },
]

export default function CertificatesSection() {
  return (
    <section id="certificates" className={styles.certificatesSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Certifications & Achievements</h2>
          <p className={styles.sectionSubtitle}>
            Professional certifications and completed courses
          </p>
        </div>

        <Row className="g-4">
          {certificates.map((cert, idx) => (
            <Col key={idx} lg={6} md={12} xs={12}>
              <a 
                href={cert.credentialUrl} 
                className={styles.certificateCard}
              >
                <div className={styles.cardIcon}>
                  <FiAward size={28} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <p className={styles.certDate}>{cert.date}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
