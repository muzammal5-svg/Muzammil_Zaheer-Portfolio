"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Send, MessageSquare } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you within 24 hours. 🚀'
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || "Something went wrong. Please try again."
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: "Network error. Please check your connection and try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "muzammalzaheer571@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:muzammalzaheer571@gmail.com"
    },
    // {
    //   icon: Phone,
    //   title: "Call Us",
    //   content: "+92 341 735 9571",
    //   description: "Mon-Fri from 9am to 6pm",
    //   action: "tel:+923417359571"
    // },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      content: "+92 341 735 9571",
      description: "Quick response guaranteed",
      action: "https://wa.me/923417359571?text=Hi! I'm visiting your contact page and interested in MZwebSolutions services. Let's discuss my project!"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Pakistan",
      description: "Serving clients worldwide",
      action: null
    }
  ]

  const services = [
    "WordPress Development",
    "Shopify Development", 
    "Webflow Design",
    "Frontend Development",
    "eBay Templates",
    "Custom Web Application",
    "Other"
  ]

  const budgets = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ]

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3+ months"
  ]

  return (
    <>
      <MZwebSolutionsNavigation />
      <div className="min-h-screen bg-gradient-dark pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 mb-8">
              <Send className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </div> */}
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Let's Build</span>{" "}
              <span className="text-gradient">Something Great</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your digital presence? We're here to help bring your vision to life. 
              Get in touch and let's discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card p-8 border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="glass border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass border-white/20 text-white placeholder:text-gray-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass border-white/20 text-white placeholder:text-gray-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="glass border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="glass border-white/20 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-white/20">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-white hover:bg-white/10">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="glass border-white/20 text-white">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          {budgets.map((budget) => (
                            <SelectItem key={budget} value={budget} className="text-white hover:bg-white/10">
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="glass border-white/20 text-white">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline} className="text-white hover:bg-white/10">
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="glass border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-3 p-4 rounded-xl ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm">{submitStatus.message}</span>
                    </motion.div>
                  )}

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-blue hover:bg-gradient-purple text-white font-semibold py-4 rounded-xl shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-300 leading-relaxed">
                  We're here to help bring your digital vision to life. Whether you have a specific project in mind 
                  or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="glass-card p-6 border-white/10 hover-lift">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-blue rounded-xl">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            {info.action ? (
                              <Link 
                                href={info.action}
                                className="text-primary hover:text-accent transition-colors font-medium"
                              >
                                {info.content}
                              </Link>
                            ) : (
                              <div className="text-primary font-medium">{info.content}</div>
                            )}
                            <p className="text-sm text-gray-400 mt-1">{info.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Card className="glass-card p-6 border-white/10 bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-white">Quick Response</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, WhatsApp is the fastest way to reach us.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
      <MZwebSolutionsFooter />
    </>
  )
}