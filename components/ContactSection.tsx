'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import styles from './ContactSection.module.css'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_cy0h7iu', 
        'template_afr72vj', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '5GL6G_J8adK0ogzCP' 
      )

      setSubmitStatus('success')

      setFormData({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)

      setSubmitStatus('error')

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>

          <p className={styles.sectionSubtitle}>
            I'm currently open to new opportunities and collaborations.
            Whether you have a question, want to discuss a project, or
            just want to say hi, feel free to reach out!
          </p>
        </div>

        <Row className="g-4">
          <Col lg={5} md={12} xs={12}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiMail size={24} />
                </div>

                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Email</h4>

                  <a
                    href="mailto:singh.atul5914@outlook.com"
                    className={styles.infoLink}
                  >
                    singh.atul5914@outlook.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiPhone size={24} />
                </div>

                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Phone</h4>

                  <a
                    href="tel:+919476133481"
                    className={styles.infoLink}
                    aria-label="Call +91 9476133481"
                  >
                    +91 9476133481
                  </a>

                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiMapPin size={24} />
                </div>

                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Location</h4>

                  <p className={styles.infoText}>
                    Darjeeling, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7} md={12} xs={12}>
            <form
              onSubmit={handleSubmit}
              className={styles.contactForm}
            >
              <div className="mb-4">
                <label htmlFor="name" className={styles.formLabel}>
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={styles.formInput}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={styles.formInput}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className={styles.formInput}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}