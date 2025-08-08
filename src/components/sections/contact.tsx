import { Card, CardContent } from '@/components/ui/card'

export default function ContactSection() {
  return (
    <section id="contact">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">
            You can reach me at <a href="mailto:your@email.com" className="text-primary underline">your@email.com</a>.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}