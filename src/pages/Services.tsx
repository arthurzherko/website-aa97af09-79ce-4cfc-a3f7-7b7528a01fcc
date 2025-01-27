import { HeroSection } from "@/components/HeroSection"
import { ServicesGrid, type Service } from "@/components/ServicesGrid"
import { PricingTable, type PricingPlan } from "@/components/PricingTable"
import { ProcessTimeline, type ProcessStep } from "@/components/ProcessTimeline"
import { 
  Rocket, 
  Megaphone, 
  BarChart, 
  Search, 
  Mail, 
  PenTool,
  Target,
  BarChart2,
  MessagesSquare,
  Lightbulb,
  Puzzle,
  Zap
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Services() {
  const navigate = useNavigate()

  const services: Service[] = [
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Email Marketing",
      description: "Build customer relationships and drive conversions with targeted email campaigns.",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: "Content Strategy",
      description: "Create engaging content that resonates with your audience and drives results.",
      icon: <PenTool className="h-6 w-6" />,
    },
    {
      title: "PPC Advertising",
      description: "Maximize your ROI with targeted paid advertising campaigns.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Data Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting.",
      icon: <BarChart2 className="h-6 w-6" />,
    },
    {
      title: "Social Media Management",
      description: "Build and engage your community across social media platforms.",
      icon: <MessagesSquare className="h-6 w-6" />,
    },
  ]

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$999",
      description: "Perfect for small businesses getting started",
      features: [
        "Social Media Management",
        "Basic SEO Optimization",
        "Monthly Report",
        "Email Support",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$1,999",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced SEO",
        "Content Creation",
        "Email Marketing",
        "Priority Support",
      ],
      ctaText: "Choose Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$3,999",
      description: "For large scale operations",
      features: [
        "Everything in Professional",
        "Custom Strategy",
        "Dedicated Manager",
        "24/7 Support",
        "Advanced Analytics",
      ],
      ctaText: "Contact Us",
    },
  ]

  const steps: ProcessStep[] = [
    {
      title: "Discovery",
      description: "We analyze your business needs and goals to create a tailored strategy.",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: "Strategy",
      description: "Develop a comprehensive plan aligned with your objectives.",
      icon: <Puzzle className="h-5 w-5" />,
    },
    {
      title: "Implementation",
      description: "Execute the strategy with precision and attention to detail.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Optimization",
      description: "Continuously monitor and improve performance for better results.",
      icon: <BarChart className="h-5 w-5" />,
    },
  ]

  const handlePlanSelect = (plan: PricingPlan) => {
    // Handle plan selection
    console.log("Selected plan:", plan.name)
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions tailored to your business needs"
        ctaText="Get Started"
        onCtaClick={() => navigate("/contact")}
      />

      <section className="bg-background py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">What We Offer</h2>
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Pricing Plans</h2>
          <PricingTable plans={plans} onPlanSelect={handlePlanSelect} />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Process</h2>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg">Transform your digital presence today with our expert solutions.</p>
          <button
            onClick={() => navigate("/contact")}
            className="rounded-full bg-white px-8 py-3 text-primary hover:bg-white/90 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}