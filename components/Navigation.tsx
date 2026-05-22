'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import styles from './Navigation.module.css'

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = ['Home', 'Skills', 'Education', 'Certificates', 'Projects', 'Contact']

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        const navHeight = 80 // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
        onNavigate(section)
      }
    }, 100)
  }

  return (
    <nav className={styles.navbar} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className={styles.navContainer}>
        <div className={styles.brand} onClick={() => handleNavClick('home')}>
          <span className={styles.brandText}>Atul</span>
        </div>
    
        <button 
          className={styles.menuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`${styles.navMenu} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <button
                key={item}
                className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ''}`}
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
