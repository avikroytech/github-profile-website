'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="w-full h-screen flex flex-col items-center justify-start">
      {/* Top Image Banner */}
      <div className="relative w-full h-1/2 rounded-xl shadow-lg overflow-hidden">
        <Image
          src="/placeholder-image.jpg"
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Name and Caption */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">Avik Roy</h1>
        <p className="text-muted-foreground text-lg mt-2">Aspiring Developer & Lifelong Learner</p>
      </div>

      {/* Avatar and Description Card */}
      <div className="mt-12 w-full flex justify-center">
        <Card className="max-w-4xl w-full flex flex-col md:flex-row p-6 items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <CardContent className="text-base text-muted-foreground">
            <p>
              Hello! I'm Avik Roy, a passionate software developer with interests in web technologies,
              game development, and building things that help others. I love working on personal
              projects and exploring the latest in tech.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}