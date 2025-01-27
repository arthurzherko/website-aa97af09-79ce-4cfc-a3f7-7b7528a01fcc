import { HeroSection } from "@/components/HeroSection"
import { ServicesGrid, type Service } from "@/components/ServicesGrid"
import { TestimonialsCarousel, type Testimonial } from "@/components/TestimonialsCarousel"
import { ContactForm } from "@/components/ContactForm"
import { Rocket, Megaphone, BarChart } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  const services: Service[] = [
    {
      title: "Digital Strategy",
      description: "Custom digital strategies to grow your online presence and reach your target audience effectively.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness through strategic social media campaigns.",
      icon: <Megaphone className="h-6 w-6" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and detailed reporting to measure and optimize your marketing performance.",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const testimonials: Testimonial[] = [
    {
      content: "Working with DigitalPro Agency transformed our online presence. Their strategic approach delivered real results.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "/placeholder.svg",
    },
    {
      content: "The team's expertise in digital marketing helped us achieve our growth goals faster than expected.",
      author: "Michael Chen",
      role: "CEO",
      avatar: "/placeholder.svg",
    },
    {
      content: "Exceptional service and outstanding results. They truly understand the digital landscape.",
      author: "Emma Davis",
      role: "Business Owner",
      avatar: "/placeholder.svg",
    },
  ]

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data)
    // Handle form submission
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Transform Your Digital Presence"
        subtitle="Strategic digital marketing solutions that drive growth and deliver measurable results"
        ctaText="Explore Services"
        onCtaClick={() => navigate("/services")}
      />

      <section className="bg-background py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Services</h2>
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Client Success Stories</h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container max-w-xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Get in Touch</h2>
          <ContactForm onSubmit={handleContactSubmit} />
        </div>
      </section>
    </div>
  )
}