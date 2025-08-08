'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Sun, Moon, User, Code, Laptop, Phone } from 'lucide-react'
import { useActiveSection } from '@/lib/useActiveSection'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Laptop size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Phone size={18} /> },
]

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false)
  const activeSection = useActiveSection(sections.map((s) => s.id))

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 overflow-y-auto border-r border-muted p-6 justify-between">
      <div>
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="/avatar.png" alt="Avatar" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold mb-6">Avik Roy</h1>
        <nav className="space-y-3">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className={cn(
                'w-full justify-start gap-2',
                section.id === activeSection
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground'
              )}
              asChild
            >
              <a href={`#${section.id}`}>{section.icon} {section.label}</a>
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-between">
        <Switch
          checked={darkMode}
          onCheckedChange={setDarkMode}
          id="dark-mode"
        />
        <span className="text-sm">{darkMode ? <Moon size={16} /> : <Sun size={16} />}</span>
      </div>
    </aside>
  )
}