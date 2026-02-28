"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ShoppingCart, Zap, Shield, Search, Smartphone, Gauge, Star, Award, Clock, Users, Sparkles, Heart, MessageCircle, Eye, CreditCard, Package } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ShopifyPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const packages = [
    {
      name: "Basic Shopify Store",
      price: "$199",
      originalPrice: "$399",
      description: "Perfect starter store for new businesses",
      deliveryTime: "5 days",
      revisions: "2 revisions",
      features: [
        "Professional Shopify theme setup",
        "Up to 25 products upload",
        "Mobile responsive design",
        "Payment gateway integration",
        "Basic SEO optimization",
        "Social media integration",
        "Contact & policy pages",
        "1 month support"
      ],
      badge: "Starter",
      popular: false
    },
    {
      name: "Standard Shopify Store",
      price: "$299",
      originalPrice: "$499",
      description: "Most popular choice for growing businesses",
      deliveryTime: "7 days",
      revisions: "3 revisions",
      features: [
        "Custom Shopify theme design",
        "Up to 100 products upload",
        "Advanced mobile optimization",
        "Complete SEO setup & optimization",
        "Email marketing integration",
        "Google Analytics & Facebook Pixel",
        "Abandoned cart recovery",
        "Product reviews setup",
        "2 months premium support"
      ],
      badge: "Most Popular",
      popular: true
    },
    {
      name: "Premium Shopify Store",
      price: "$499",
      originalPrice: "$599",
      description: "Complete solution for serious e-commerce",
      deliveryTime: "10 days",
      revisions: "5 revisions",
      features: [
        "Fully custom Shopify development",
        "Unlimited products upload",
        "Advanced e-commerce features",
        "Multi-currency & language support",
        "Advanced marketing automation",
        "Custom app integrations",
        "Advanced analytics setup",
        "Inventory management system",
        "Speed optimization (90+ score)",
        "3 months premium support"
      ],
      badge: "Best Value",
      popular: false
    }
  ]

  const features = [
    {
      icon: ShoppingCart,
      title: "E-commerce Ready",
      description: "Complete online store with cart, checkout, and payment processing"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Multiple payment gateways including PayPal, Stripe, and more"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Advanced product management and inventory tracking system"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect shopping experience across all devices"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built for search engines to drive organic traffic"
    },
    {
      icon: Gauge,
      title: "Fast Performance",
      description: "Optimized for speed and conversion rates"
    }
  ]

  const faqs = [
    {
      question: "What's included in Shopify development?",
      answer: "Complete Shopify store setup with custom design, product upload, payment integration, SEO optimization, and premium support."
    },
    {
      question: "How long does it take to complete?",
      answer: "Depending on the package: Basic (5 days), Standard (7 days), Premium (10 days). Rush delivery available for +50%."
    },
    {
      question: "Do you handle product uploads?",
      answer: "Yes! I'll upload your products with optimized descriptions, images, and SEO-friendly content."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! I can integrate with your existing inventory, CRM, or marketing tools for seamless operations."
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
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Shopify Development
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white">Professional</span>{" "}
                    <span className="text-gradient">Shopify</span>{" "}
                    <span className="text-white block">Store Development</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Launch your online business with a stunning Shopify store that converts visitors into customers. 
                    From design to deployment - I create e-commerce solutions that drive sales and growth.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">15+</div>
                    <div className="text-sm text-gray-400">Shopify Stores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">5★</div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24h</div>
                    <div className="text-sm text-gray-400">Fast Setup</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={scrollToPackages}
                      size="lg" 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Packages
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://wa.me/923417359571?text=Hi! I'm interested in Shopify store development services. Let's discuss my project!">
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
                    src="/pages/shopify.png" 
                    alt="Shopify Store Development Service"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6">
                    <Card className="glass-card border-white/20 p-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">5/5</span>
                        <span className="text-gray-300 text-sm">(19 reviews)</span>
                      </div>
                    </Card>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <Card className="glass-card border-white/20 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-400" />
                          <span className="text-white text-sm">99% Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm">E-commerce Expert</span>
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
                <span className="text-gradient">Shopify Services?</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professional Shopify development with conversion-focused design, powerful e-commerce features, and ongoing support.
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
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 mb-4">
                        <Icon className="h-6 w-6 text-purple-400" />
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
                <span className="text-white">Shopify Development</span>{" "}
                <span className="text-gradient">Packages</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the perfect package for your Shopify store. All packages include premium support and satisfaction guarantee.
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
                    pkg.popular ? 'ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/25' : ''
                  }`}>
                    {pkg.badge && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className={`px-4 py-2 font-semibold ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
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
                            <span className="text-4xl font-bold text-purple-400">{pkg.price}</span>
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
                            <Clock className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                            <div className="text-sm text-gray-400">Delivery</div>
                            <div className="text-sm font-medium text-white">{pkg.deliveryTime}</div>
                          </div>
                          <div className="text-center">
                            <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
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
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl' 
                                  : 'glass border-white/20 text-white hover:bg-white/10'
                              }`}
                            >
                              Order Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link href="https://wa.me/923417359571?text=Hi! I want to discuss the Shopify development package. Can you provide more details?">
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
                  Not happy with your Shopify store? Get your money back within 7 days. No questions asked.
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Launch Your{" "}
                <span className="text-gradient">Shopify Store?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's create an e-commerce solution that drives sales and grows your business online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Your Store
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://wa.me/923417359571?text=Hi! I'm interested in Shopify store development services. Let's discuss my project!">
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