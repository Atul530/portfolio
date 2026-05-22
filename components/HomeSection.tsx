'use client'

import { Container, Row, Col } from 'react-bootstrap'
import { FiArrowDown } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './HomeSection.module.css'

export default function HomeSection() {
  return (
    <section className={styles.heroSection}>
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                Hi, I&apos;m <span className={styles.highlight}>Atul</span>
              </h1>
              
              <p className={styles.subtitle}>
                Cloud & Linux Enthusiast | Web Developer
              </p>

              <p className={styles.description}>
                Building modern, responsive web applications with React and Bootstrap. 
                Currently learning Cloud+ and Linux to expand my tech stack. 
                Passionate about clean code and beautiful user experiences.
              </p>

              <div className={styles.cta}>
                <button 
                  className={styles.ctaButton}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button 
                  className={styles.ctaButtonSecondary}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </button>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://github.com/Atul530" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FiGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/atulsingh5" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FiLinkedin size={24} />
                </a>
                <a href="mailto:singh.atul5914@outlook.com" className={styles.socialLink}>
                  <FiMail size={24} />
                </a>
              </div>

              <div className={styles.scrollIndicator}>
                <FiArrowDown size={24} className={styles.arrow} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
