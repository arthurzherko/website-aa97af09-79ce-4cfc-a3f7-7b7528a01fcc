import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick: () => void
}

export function HeroSection({
  title = "Transform Your Digital Presence",
  subtitle = "Strategic digital marketing solutions that drive growth and deliver results",
  ctaText = "Get Started",
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background px-4 py-24">
      <div className="container relative z-10 mx-auto grid max-w-5xl gap-8 text-center">
        <motion.h1 
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="mx-auto max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" onClick={onCtaClick} className="px-8">
            {ctaText}
          </Button>
        </motion.div>
      </div>
      
      {/* Abstract background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/5 blur-2xl" />
      </div>
    </section>
  )
}