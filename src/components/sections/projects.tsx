import { Card, CardContent } from '@/components/ui/card'

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-4">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-sm text-muted-foreground">Description of project one.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <h3 className="font-semibold">Project Two</h3>
            <p className="text-sm text-muted-foreground">Description of project two.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}