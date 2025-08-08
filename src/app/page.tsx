'use client'

import Sidebar from '@/components/sidebar'
import AboutSection from '@/components/sections/about'
import SkillsSection from '@/components/sections/skills'
import ProjectsSection from '@/components/sections/projects'
import ContactSection from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 space-y-32">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}