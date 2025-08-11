import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Stats } from '@/components/stats'
import { CTA } from '@/components/cta'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-darker to-black">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </main>
  )
}
