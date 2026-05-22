'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight'
  delay?: number
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeInUp',
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.opacity = '0'
          element.style.transform = 
            animation === 'fadeInUp' ? 'translateY(30px)' :
            animation === 'slideInLeft' ? 'translateX(-20px)' :
            'translateX(20px)'
          
          setTimeout(() => {
            element.style.animation = `${animation} 0.8s ease-out forwards`
            element.style.animationDelay = `${delay}ms`
          }, 10)
          
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [animation, delay])

  return <div ref={ref}>{children}</div>
}
