"use client"

import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, UserCheck, FileText, Clock } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number)",
        "Project requirements and business information",
        "Communication records and correspondence",
        "Website usage data and analytics",
        "Technical information (IP address, browser type, device info)"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Provide and deliver our web development services",
        "Communicate about your projects and updates",
        "Improve our services and user experience",
        "Send relevant marketing communications (with consent)",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "We do not sell or rent your personal information",
        "Information may be shared with trusted service providers",
        "Data may be disclosed if required by law",
        "Business transfers may include customer information",
        "We obtain consent before sharing for other purposes"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "Industry-standard encryption and security measures",
        "Regular security audits and updates",
        "Secure data transmission and storage",
        "Limited access to authorized personnel only",
        "Incident response procedures in place"
      ]
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections to inaccurate data",
        "Delete your personal information (subject to legal requirements)",
        "Opt-out of marketing communications",
        "Data portability and transfer rights"
      ]
    },
    {
      icon: Clock,
      title: "Data Retention",
      content: [
        "Personal data retained as long as necessary for services",
        "Project files kept for 2 years after completion",
        "Marketing data retained until you opt-out",
        "Legal compliance may require longer retention",
        "Secure deletion when no longer needed"
      ]
    }
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
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 mb-8">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">Privacy Policy</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Your</span>{" "}
                <span className="text-gradient">Privacy Matters</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>

              <div className="text-sm text-gray-400">
                Last updated: January 2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card p-8 border-white/10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-primary/20 rounded-xl">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      </div>
                      
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )
              })}

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-8 border-white/10 bg-gradient-to-r from-primary/10 to-accent/10">
                  <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
                  <p className="text-gray-300 mb-6">
                    If you have any questions about this Privacy Policy or how we handle your data, 
                    please don't hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:muzammalzaheer571@gmail.com"
                      className="text-primary hover:text-accent transition-colors font-medium cursor-pointer hover:cursor-pointer"
                    >
                      muzammalzaheer571@gmail.com
                    </a>
                    <a 
                      href="https://wa.me/923417359571?text=Hi! I have questions about your Privacy Policy."
                      className="text-primary hover:text-accent transition-colors font-medium cursor-pointer hover:cursor-pointer"
                    >
                      WhatsApp: +92 341 735 9571
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <MZwebSolutionsFooter />
    </>
  )
}