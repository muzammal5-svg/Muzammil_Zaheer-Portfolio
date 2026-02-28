"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Code2, Zap, Shield, Search, Smartphone, Gauge, Star, Award, Clock, Users, Sparkles, Heart, MessageCircle, Eye, Layers, Palette } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function FrontendPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const packages = [
    {
      name: "Basic Frontend Website",
      price: "$199",
      originalPrice: "$299",
      description: "Perfect for landing pages and simple websites",
      deliveryTime: "5 days",
      revisions: "2 revisions",
      features: [
        "Modern React.js development",
        "Up to 5 pages with animations",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Performance optimization",
        "Cross-browser compatibility",
        "1 month support"
      ],
      badge: "Starter",
      popular: false
    },
    {
      name: "Standard Frontend App",
      price: "$299",
      originalPrice: "$599",
      description: "Most popular for interactive web applications",
      deliveryTime: "7 days",
      revisions: "3 revisions",
      features: [
        "Advanced React.js/Next.js development",
        "Up to 15 pages with complex interactions",
        "State management (Redux/Context)",
        "API integration & data fetching",
        "Advanced animations & transitions",
        "Progressive Web App (PWA)",
        "Google Analytics integration",
        "Performance optimization (90+ score)",
        "2 months premium support"
      ],
      badge: "Most Popular",
      popular: true
    },
    {
      name: "Premium Frontend Solution",
      price: "$399",
      originalPrice: "$699",
      description: "Complete solution for complex applications",
      deliveryTime: "12 days",
      revisions: "5 revisions",
      features: [
        "Full-stack React.js/Next.js application",
        "Unlimited pages & components",
        "Advanced state management",
        "Real-time features (WebSocket)",
        "Database integration",
        "Authentication & user management",
        "Advanced SEO & performance",
        "Custom animations & micro-interactions",
        "Testing & documentation",
        "3 months premium support"
      ],
      badge: "Best Value",
      popular: false
    }
  ]

  const features = [
    {
      icon: Code2,
      title: "Modern Technologies",
      description: "Built with React.js, Next.js, TypeScript, and latest web technologies"
    },
    {
      icon: Layers,
      title: "Component-Based",
      description: "Reusable components for maintainable and scalable code"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique designs tailored to your brand and user experience"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed with 90+ performance scores"
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Built with SEO best practices for better search rankings"
    }
  ]

  const faqs = [
    {
      question: "What technologies do you use for frontend development?",
      answer: "I specialize in React.js, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks for building fast, scalable applications."
    },
    {
      question: "How long does frontend development take?",
      answer: "Depending on complexity: Basic (5 days), Standard (7 days), Premium (12 days). Rush delivery available for +50%."
    },
    {
      question: "Do you provide API integration?",
      answer: "Yes! I can integrate with any REST API, GraphQL, or third-party services to make your application fully functional."
    },
    {
      question: "Can you convert designs to code?",
      answer: "Absolutely! I can convert Figma, Adobe XD, or any design files into pixel-perfect, responsive React applications."
    }
  ]

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages')
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
        
        {/* Hero Section with Gig Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
                    <Code2 className="w-4 h-4 mr-2" />
                    Frontend Development
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white">Modern</span>{" "}
                    <span className="text-gradient">React.js</span>{" "}
                    <span className="text-white block">Web Development</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Build fast, interactive, and scalable web applications with modern React.js and Next.js. 
                    From simple websites to complex applications - I create frontend solutions that deliver exceptional user experiences.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">30+</div>
                    <div className="text-sm text-gray-400">React Apps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">5★</div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">98+</div>
                    <div className="text-sm text-gray-400">Performance Score</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={scrollToPackages}
                      size="lg" 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Packages
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://wa.me/923417359571?text=Hi! I'm interested in React.js frontend development services. Let's discuss my project!">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300"
                      >
                        <WhatsAppIcon className="mr-2 h-5 w-5" />
                        Contact Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Gig Image */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/pages/Frontend.png" 
                    alt="Frontend Development Service"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6">
                    <Card className="glass-card border-white/20 p-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">5/5</span>
                        <span className="text-gray-300 text-sm">(20 reviews)</span>
                      </div>
                    </Card>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <Card className="glass-card border-white/20 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm">100% Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm">React Expert</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">Why Choose My</span>{" "}
                <span className="text-gradient">Frontend Services?</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Modern React.js development with cutting-edge technologies, performance optimization, and exceptional user experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="glass-card border-white/10 hover-lift transition-all duration-500 h-full p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
                        <Icon className="h-6 w-6 text-green-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">Frontend Development</span>{" "}
                <span className="text-gradient">Packages</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the perfect package for your React.js project. All packages include premium support and satisfaction guarantee.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className={`relative glass-card border-white/10 hover-lift transition-all duration-500 h-full overflow-hidden ${
                    pkg.popular ? 'ring-2 ring-green-500/50 shadow-2xl shadow-green-500/25' : ''
                  }`}>
                    {pkg.badge && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className={`px-4 py-2 font-semibold ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                            : 'bg-white/10 text-white border border-white/20'
                        }`}>
                          {pkg.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4 text-white">{pkg.name}</h3>
                        <div className="mb-4">
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-4xl font-bold text-green-400">{pkg.price}</span>
                            {pkg.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-400">Starting at</div>
                        </div>
                        <p className="text-gray-300 mb-6">{pkg.description}</p>
                        
                        {/* Package Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 glass rounded-xl">
                          <div className="text-center">
                            <Clock className="w-5 h-5 text-green-400 mx-auto mb-1" />
                            <div className="text-sm text-gray-400">Delivery</div>
                            <div className="text-sm font-medium text-white">{pkg.deliveryTime}</div>
                          </div>
                          <div className="text-center">
                            <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                            <div className="text-sm text-gray-400">Revisions</div>
                            <div className="text-sm font-medium text-white">{pkg.revisions}</div>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link href="/contact">
                            <Button 
                              className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                                pkg.popular 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl' 
                                  : 'glass border-white/20 text-white hover:bg-white/10'
                              }`}
                            >
                              Order Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link href="https://wa.me/923417359571?text=Hi! I want to discuss the React.js development package. Can you provide more details?">
                            <Button 
                              variant="outline"
                              className="w-full glass border-white/20 text-white hover:bg-white/10 py-3 rounded-xl transition-all duration-300"
                            >
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Discuss Requirements
                            </Button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Money Back Guarantee */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Card className="glass-card border-white/10 p-8 max-w-2xl mx-auto">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-gray-300 text-sm">
                  Not happy with your React application? Get your money back within 7 days. No questions asked.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">Frequently Asked</span>{" "}
                <span className="text-gradient">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Build Your{" "}
                <span className="text-gradient">React Application?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's create a modern, fast, and scalable web application that delivers exceptional user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://wa.me/923417359571?text=Hi! I'm interested in React.js frontend development services. Let's discuss my project!">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300"
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5" />
                      WhatsApp Now
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  )
}