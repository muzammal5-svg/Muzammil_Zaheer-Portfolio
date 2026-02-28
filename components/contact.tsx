"use client"

import type React from "react"
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle, MessageSquare, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
          message: 'Message sent successfully! I\'ll get back to you within 24 hours. 🚀'
        })
        setFormData({ name: "", email: "", message: "" })
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
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      content: "+92 341 735 9571",
      description: "Quick response guaranteed",
      action: "https://wa.me/923417359571?text=Hi! I found your contact page and I'm interested in MZwebSolutions services. Can we discuss my project requirements?"
    },
    // {
    //   icon: MapPin,
    //   title: "Location",
    //   content: "Pakistan",
    //   description: "Serving clients worldwide",
    //   action: null
    // }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </div> */}
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Let's Start</span>{" "}
              <span className="text-gradient">Your Project</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? I'm here to help bring your vision to life. 
              Get in touch and let's discuss your project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 lg:p-8 border-white/10">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="glass border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project..."
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
                      className="w-full bg-gradient-blue hover:bg-gradient-purple text-white font-semibold py-3 lg:py-4 rounded-xl shadow-lg disabled:opacity-50 text-sm lg:text-base"
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

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    Need more detailed consultation?
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 cursor-pointer hover:cursor-pointer">
                      Visit Full Contact Page
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm here to help bring your digital vision to life. Whether you have a specific project in mind 
                  or just want to explore possibilities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="glass-card p-6 border-white/10 hover-lift">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-blue rounded-xl">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                            {info.action ? (
                              <Link 
                                href={info.action}
                                className="text-primary hover:text-accent transition-colors font-medium cursor-pointer hover:cursor-pointer"
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 border-white/10 bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-white">Quick Response</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, WhatsApp is the fastest way to reach me.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}