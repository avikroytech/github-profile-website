'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0].target.id)
        }
      },
      {
        threshold: 0.3,
      }
    )

    const elements = ids.map((id) => document.getElementById(id))
    elements.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return activeId
}