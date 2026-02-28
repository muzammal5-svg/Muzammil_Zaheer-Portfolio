import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    feedback: "Outstanding work! The website exceeded our expectations. Fast, responsive, and exactly what we needed.",
    rating: 5,
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Michael Chen",
    company: "Global eCommerce",
    feedback: "Incredible attention to detail and performance optimization. Our conversion rate increased by 40%!",
    rating: 5,
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Emma Williams",
    company: "Creative Agency",
    feedback:
      "Professional, reliable, and delivers on time. We've worked on multiple projects together with great success.",
    rating: 5,
    avatar: "/professional-woman-avatar-2.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Client Testimonials</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.feedback}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
