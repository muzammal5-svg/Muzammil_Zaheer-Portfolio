"use client"

import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileText, Handshake, CreditCard, Shield, AlertTriangle, Scale } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      icon: Handshake,
      title: "Service Agreement",
      content: [
        "These terms govern the use of MZwebSolutions services",
        "By engaging our services, you agree to these terms",
        "Services include web development, design, and digital solutions",
        "Custom agreements may supplement these general terms",
        "We reserve the right to update terms with notice"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "50% deposit required before project commencement",
        "Remaining balance due upon project completion",
        "Payment methods: Bank transfer, PayPal, or agreed alternatives",
        "Late payments may incur additional charges",
        "Refunds subject to project completion status and agreement"
      ]
    },
    {
      icon: FileText,
      title: "Project Scope & Deliverables",
      content: [
        "Project scope defined in written proposal or contract",
        "Changes to scope may affect timeline and cost",
        "Client responsible for providing necessary content and materials",
        "We deliver agreed-upon files and documentation",
        "Source code ownership transferred upon full payment"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "Client owns final delivered work upon full payment",
        "We retain rights to general methodologies and techniques",
        "Third-party assets subject to their respective licenses",
        "Client warrants they own or have rights to provided content",
        "We may showcase completed work in our portfolio"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations & Warranties",
      content: [
        "Services provided 'as is' without express warranties",
        "We strive for bug-free delivery but cannot guarantee perfection",
        "Client responsible for regular backups and security updates",
        "Liability limited to the amount paid for services",
        "Force majeure events may affect service delivery"
      ]
    },
    {
      icon: Scale,
      title: "Termination & Disputes",
      content: [
        "Either party may terminate with written notice",
        "Payment due for work completed up to termination date",
        "Disputes resolved through good faith negotiation first",
        "Governing law: Pakistan (or client's jurisdiction if agreed)",
        "Severability clause applies if any term is unenforceable"
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
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">Terms of Service</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Terms of</span>{" "}
                <span className="text-gradient">Service</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                These terms outline the conditions for using MZwebSolutions services. 
                Please read them carefully before engaging our services.
              </p>

              <div className="text-sm text-gray-400">
                Last updated: January 2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
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
                  <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
                  <p className="text-gray-300 mb-6">
                    If you have any questions about these Terms of Service or need clarification 
                    on any aspect of our agreement, please contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:muzammalzaheer571@gmail.com"
                      className="text-primary hover:text-accent transition-colors font-medium cursor-pointer hover:cursor-pointer"
                    >
                      muzammalzaheer571@gmail.com
                    </a>
                    <a 
                      href="https://wa.me/923417359571?text=Hi! I have questions about your Terms of Service."
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