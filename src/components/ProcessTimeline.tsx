import { motion } from "framer-motion"

export interface ProcessStep {
  title: string
  description: string
  icon: React.ReactNode
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-border md:before:mx-auto">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          className="relative flex items-center md:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow md:absolute md:left-1/2 md:-translate-x-1/2">
            {step.icon}
          </div>
          <div className={`${
            index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
          } ml-6 md:ml-0 md:w-1/2`}>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}