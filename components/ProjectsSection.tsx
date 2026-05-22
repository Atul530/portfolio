'use client'

import { Container, Row, Col } from 'react-bootstrap'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './ProjectsSection.module.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
}

const projects: Project[] = [
  {
    title: 'RSync Enumeration & Anonymous Sync Toolkit',
    description: 'Bash-based Linux networking and security toolkit designed to enumerate RSync services and perform anonymous synchronization from publicly accessible modules. Supports multi-target scanning, port 873 detection, module enumeration, automated file synchronization, logging, and basic security assessment workflows directly from the terminal.',
    technologies: ['Bash', 'Linux', 'RSync', 'Netcat', 'Nmap', 'Shell Scripting', 'Networking'],
    githubLink: 'https://github.com/Atul2330/rsync_enumeration_and_anonymous_sync',
  },
  {
    title: 'Automated Daily System Log Backup',
    description: 'Bash-based Linux automation project designed to perform scheduled daily backups of system logs using cron jobs. The script compresses log files, stores timestamped backups, maintains backup activity logs, and automatically removes old backups based on a retention policy.',
    technologies: ['Bash', 'Linux', 'Shell Scripting', 'Cron Jobs', 'System Administration'],
    githubLink: 'https://github.com/Atul2330/automated_log_backup',
  },
  {
    title: 'Linux User & Group Management Toolkit',
    description: 'Bash-based Linux administration toolkit designed to automate user and group management tasks through interactive menu-driven scripts. Supports user creation, password management, group administration, permission handling, and retrieval of user details directly from the terminal.',
    technologies: ['Bash', 'Linux', 'Shell Scripting', 'System Administration'],
    githubLink: 'https://github.com/Atul2330/User-Group_Management',
  },
  {
    title: 'SSH Secure Login Automation',
    description: 'Bash-based Linux automation project that configures secure passwordless SSH authentication across multiple Linux distributions. Automates SSH server installation, service management, SSH key generation, and secure remote login setup using lightweight interactive scripting.',
    technologies: ['Bash', 'Linux', 'SSH', 'Shell Scripting'],
    githubLink: 'https://github.com/Atul2330/SSH_Secure_Login',
},
{
    title: 'Linux MOTD Automation',
    description: 'Linux automation project that dynamically generates and updates the system MOTD (Message of the Day) using Bash scripting, systemd services, and timers. Demonstrates Linux system administration concepts including automation, scheduled execution, and system information management.',
    technologies: ['Bash', 'Linux', 'systemd', 'Shell Scripting'],
    githubLink: 'https://github.com/Atul2330/MOTD-Creator',
},
{
    title: 'Task Scheduler Tool',
    description: 'Interactive Linux task scheduling utility built with Bash scripting and Cron. Allows users to view, create, and remove scheduled tasks through a terminal-based interface while simplifying Cronjob management and automation.',
    technologies: ['Bash', 'Linux', 'Cron', 'Shell Scripting'],
    githubLink: 'https://github.com/Atul2330/Task_Scheduler',
},
{
    title: 'Linux System Monitoring Tool',
    description: 'Beginner-friendly Linux monitoring tool created using Bash scripting. Provides monitoring for CPU, memory, disk usage, running processes, and network information, along with automated log generation for system analysis.',
    technologies: ['Bash', 'Linux', 'Shell Scripting', 'System Monitoring'],
    githubLink: 'https://github.com/Atul2330/Linux-Monitoring-Tool',
},
{
    title: 'Hotel Viewing Website',
    description: 'Feature-rich hotel viewing application developed using Angular, HTML, CSS, and JavaScript. Designed to help users explore hotel information, amenities, and location details through a clean and interactive interface.',
    technologies: ['Angular', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Atul2330/Hotel_Viewing_Website',
},
{
    title: 'Counter App',
    description: 'Simple counter application built using Angular that demonstrates dynamic state management and interactive UI updates through a clean and responsive interface.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    githubLink: 'https://github.com/Atul2330/Simple_Counter',
},
{
    title: 'Profile Card App',
    description: 'Responsive profile card application developed using Angular and TypeScript. Showcases component-based UI design and modern frontend development practices with a clean user interface.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    githubLink: 'https://github.com/Atul2330/Profile-Card',
},
{
    title: 'QR Code Generator',
    description: 'Interactive QR code generator built with React and JavaScript that allows users to generate QR codes from custom text or links in real time, with support for downloading and sharing generated codes.',
    technologies: ['React', 'JavaScript', 'CSS', 'Web Share API'],
    githubLink: 'https://github.com/Atul2330/QR-Code-Generator',
},
{
    title: 'Weather App',
    description: 'Responsive weather application built using React, JavaScript, CSS, and Axios. Fetches real-time weather data from the OpenWeatherMap API, allowing users to search weather conditions by city.',
    technologies: ['React', 'JavaScript', 'CSS', 'Axios'],
    githubLink: 'https://github.com/Atul2330/WeatherApp',
},
{
    title: 'Password Generator',
    description: 'Customizable password generator built with React and JavaScript. Allows users to generate secure passwords with configurable length and character options including uppercase letters, numbers, and symbols.',
    technologies: ['React', 'JavaScript', 'CSS'],
    githubLink: 'https://github.com/Atul2330/Password-Generator',
},
{
    title: 'AI ChatBot',
    description: 'Conversational AI web application built using React and Vite, powered by the Google Gemini API. Features real-time AI interactions with a responsive chat interface and streaming message support.',
    technologies: ['React', 'Vite', 'JavaScript', 'Gemini API'],
    githubLink: 'https://github.com/Atul2330/ChatBot',
},
{
    title: 'Task Manager App',
    description: 'Responsive task management application built with React and Vite. Allows users to create, edit, and delete tasks with support for deadlines, priorities, and efficient form validation.',
    technologies: ['React', 'Vite', 'JavaScript', 'React Hook Form'],
    githubLink: 'https://github.com/Atul2330/React-To-Do-List',
},
{
    title: 'Tic Tac Toe Game',
    description: 'Interactive Tic Tac Toe game developed using React, JavaScript, HTML, and CSS. Features dynamic game logic, responsive UI updates, and a clean interface for two-player gameplay.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Atul2330/Tic_Tac_Toe',
},
{
    title: 'Travel Agency Website',
    description: 'Responsive travel agency website built using HTML, CSS, and JavaScript to showcase tourism services, travel destinations, and booking-related information through a clean and user-friendly layout.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Atul2330/Travel_Agency',
},
{
    title: 'Counter App',
    description: 'Simple counter application built using React and Vite with Chakra UI styling. Demonstrates dynamic state management and interactive UI updates through a clean and responsive interface.',
    technologies: ['React', 'Vite', 'JavaScript', 'Chakra UI'],
    githubLink: 'https://github.com/Atul2330/Simple_Counter_App',
},
{
    title: 'CV Creator',
    description: 'CV generator application built with React and JavaScript that collects user information and generates a structured resume layout through a clean and user-friendly interface.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Atul2330/CV-Creator',
},
{
    title: 'To-Do List',
    description: 'Task management application built using React that allows users to add, update, complete, and delete tasks through an interactive and responsive interface.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Atul2330/To-Do-List',
},
{
    title: 'Unit Converter',
    description: 'Practical unit conversion tool developed using HTML, CSS, and JavaScript. Supports conversion across multiple measurement categories including height, weight, and storage units through a responsive client-side interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Atul2330/Convertor',
},
{
    title: 'Collection of Small Web Apps',
    description: 'Collection of small interactive web applications built using HTML, CSS, and JavaScript. Includes projects such as an Analog Clock, BMI Calculator, CV Creator, Internet Status Checker, Loan Calculator, Palindrome Checker, RGB Color Generator, and To-Do List, showcasing core frontend development concepts and practical UI functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Atul2330/Web-Apps',
}
]

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Showcase of my recent work and side projects
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx} lg={6} md={12} xs={12}>
              <div className={styles.projectCard}>                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <FiGithub size={20} />
                    Code
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
