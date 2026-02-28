"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Package, Zap, Shield, Search, Smartphone, Gauge, Star, Award, Clock, Users, Sparkles, Heart, MessageCircle, Eye, ShoppingBag, Palette } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function EbayTemplatesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const packages = [
    {
      name: "Basic eBay Template",
      price: "$19",
      originalPrice: "$49",
      description: "Professional template for single product listings",
      deliveryTime: "24 hours",
      revisions: "2 revisions",
      features: [
        "Professional eBay listing template",
        "Mobile responsive design",
        "Product image gallery",
        "Description sections",
        "Shipping & return policy",
        "Cross-browser compatibility",
        "Easy customization guide",
        "1 week support"
      ],
      badge: "Quick Start",
      popular: false
    },
    {
      name: "Premium eBay Template Pack",
      price: "$39",
      originalPrice: "$69",
      description: "Complete template collection for multiple categories",
      deliveryTime: "48 hours",
      revisions: "3 revisions",
      features: [
        "5 premium eBay listing templates",
        "Multiple category designs",
        "Advanced mobile optimization",
        "Product comparison tables",
        "Trust badges & guarantees",
        "Social proof sections",
        "Custom color schemes",
        "Video integration ready",
        "2 weeks premium support"
      ],
      badge: "Most Popular",
      popular: true
    },
    {
      name: "Custom eBay Store Design",
      price: "$49",
      originalPrice: "$99",
      description: "Complete eBay store branding solution",
      deliveryTime: "5 days",
      revisions: "5 revisions",
      features: [
        "Custom eBay store design",
        "Unlimited listing templates",
        "Brand-specific customization",
        "Advanced product showcases",
        "Marketing & promotional sections",
        "Cross-selling templates",
        "Store logo & banner design",
        "Category-specific layouts",
        "1 month premium support",
        "Training & documentation"
      ],
      badge: "Best Value",
      popular: false
    }
  ]

  const features = [
    {
      icon: Package,
      title: "Professional Design",
      description: "Eye-catching templates that make your products stand out"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect display on all devices for maximum reach"
    },
    {
      icon: Palette,
      title: "Easy Customization",
      description: "Simple to customize with your products and branding"
    },
    {
      icon: ShoppingBag,
      title: "Conversion Focused",
      description: "Designed to increase sales and buyer confidence"
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for quick loading and better user experience"
    },
    {
      icon: Shield,
      title: "eBay Compliant",
      description: "Fully compliant with eBay's listing policies and guidelines"
    }
  ]

  const faqs = [
    {
      question: "What's included in eBay template packages?",
      answer: "Professional HTML templates, mobile optimization, customization guide, and premium support. Ready to use on eBay immediately."
    },
    {
      question: "How quickly can I get my templates?",
      answer: "Basic templates in 24 hours, Premium packs in 48 hours, Custom designs in 5 days. Rush delivery available."
    },
    {
      question: "Are the templates mobile-friendly?",
      answer: "Yes! All templates are fully responsive and optimized for mobile devices, tablets, and desktops."
    },
    {
      question: "Can you customize templates for my brand?",
      answer: "Absolutely! I can customize colors, fonts, layouts, and add your branding to match your business identity."
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
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-4 py-2">
                    <Package className="w-4 h-4 mr-2" />
                    eBay Templates
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white">Professional</span>{" "}
                    <span className="text-gradient">eBay Listing</span>{" "}
                    <span className="text-white block">Templates</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Boost your eBay sales with professional, mobile-optimized listing templates. 
                    Stand out from competitors and convert more browsers into buyers with stunning designs.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">70+</div>
                    <div className="text-sm text-gray-400">Templates Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">5★</div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">24h</div>
                    <div className="text-sm text-gray-400">Fast Delivery</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={scrollToPackages}
                      size="lg" 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Templates
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://wa.me/923417359571?text=Hi! I'm interested in eBay listing templates. Let's discuss my requirements!">
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
                    src="/pages/ebaylisting.png" 
                    alt="eBay Listing Templates Service"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6">
                    <Card className="glass-card border-white/20 p-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">4.9/5</span>
                        <span className="text-gray-300 text-sm">(234 reviews)</span>
                      </div>
                    </Card>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <Card className="glass-card border-white/20 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-400" />
                          <span className="text-white text-sm">96% Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-yellow-400" />
                          <span className="text-white text-sm">eBay Expert</span>
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
                <span className="text-gradient">eBay Templates?</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professional eBay listing templates designed to increase sales, build trust, and make your products stand out.
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
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 mb-4">
                        <Icon className="h-6 w-6 text-yellow-400" />
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
                <span className="text-white">eBay Template</span>{" "}
                <span className="text-gradient">Packages</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the perfect template package for your eBay business. All packages include premium support and satisfaction guarantee.
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
                    pkg.popular ? 'ring-2 ring-yellow-500/50 shadow-2xl shadow-yellow-500/25' : ''
                  }`}>
                    {pkg.badge && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className={`px-4 py-2 font-semibold ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' 
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
                            <span className="text-4xl font-bold text-yellow-400">{pkg.price}</span>
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
                            <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                            <div className="text-sm text-gray-400">Delivery</div>
                            <div className="text-sm font-medium text-white">{pkg.deliveryTime}</div>
                          </div>
                          <div className="text-center">
                            <Users className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
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
                                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl' 
                                  : 'glass border-white/20 text-white hover:bg-white/10'
                              }`}
                            >
                              Order Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link href="https://wa.me/923417359571?text=Hi! I want to discuss the eBay template package. Can you provide more details?">
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
                  Not happy with your eBay templates? Get your money back within 7 days. No questions asked.
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
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Boost Your{" "}
                <span className="text-gradient">eBay Sales?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get professional eBay listing templates that convert browsers into buyers and grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Templates Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://wa.me/923417359571?text=Hi! I'm interested in eBay listing templates. Let's discuss my requirements!">
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