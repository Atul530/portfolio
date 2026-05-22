'use client'

import { Container, Row, Col } from 'react-bootstrap'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={4} md={6} xs={12}>
            <div className={styles.footerBrand}>
              <h3>Atul</h3>
              <p>Cloud & Linux Enthusiast | Web Developer </p>
            </div>
          </Col>

          <Col lg={4} md={6} xs={12}>
            <div className={styles.quickLinks}>
              <p className={styles.linkTitle}>Quick Links</p>
              <div className={styles.links}>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} xs={12}>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Atul2330" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/atulsingh5" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:singh.atul5914@outlook.com" className={styles.socialLink}>
                <FiMail size={20} />
              </a>
            </div>
          </Col>
        </Row>

        <div className={styles.footerDivider}></div>

      </Container>
    </footer>
  )
}
