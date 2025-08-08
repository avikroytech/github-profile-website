'use client'

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Git & GitHub',
  'MongoDB',
  'GraphQL',
]

export default function SkillsSection() {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)

  // Cycle badges every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Badge colors for light/dark mode
  // Opposite background: light bg -> dark badge, dark bg -> light badge
  const badgeClass = theme === 'dark'
    ? 'bg-gray-100 text-gray-900'    // Light badge for dark background
    : 'bg-gray-900 text-gray-100'    // Dark badge for light background

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="relative w-48 h-10 overflow-hidden">
        {skills.map((skill, index) => (
          <Badge
            key={skill}
            className={`
              absolute top-0 left-0 right-0 mx-auto
              transition-opacity duration-1000
              ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
              ${badgeClass}
              w-max
              select-none
            `}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
