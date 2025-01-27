import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  ctaText: string
  popular?: boolean
}

interface PricingTableProps {
  plans: PricingPlan[]
  onPlanSelect: (plan: PricingPlan) => void
}

export function PricingTable({ plans, onPlanSelect }: PricingTableProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`relative ${
            plan.popular
              ? "border-primary shadow-lg scale-[1.02]"
              : "border-border"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Most Popular
            </span>
          )}
          <CardHeader>
            <CardTitle className="text-xl">{plan.name}</CardTitle>
            <div className="flex items-baseline text-2xl font-semibold">
              {plan.price}
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onPlanSelect(plan)}
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.ctaText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}