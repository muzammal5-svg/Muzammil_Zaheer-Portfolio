"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function MZwebSolutionsFooter() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "WordPress Development", href: "/services/wordpress" },
    { name: "Shopify Development", href: "/services/shopify" },
    { name: "Frontend Development", href: "/services/frontend" },
    { name: "eBay Templates", href: "/services/ebay-templates" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
  ]

  return (
    <footer className="relative bg-gradient-dark border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-16 lg:py-20">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 lg:space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <img 
                    src="/MZwebsolution.png" 
                    alt="MZwebSolutions Logo" 
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                  />
                  <div>
                    <div className="text-lg lg:text-xl font-bold text-white">Muzammal Zaheer</div>
                    <div className="text-xs lg:text-sm text-gray-400">Senior Developer & SEO Specialist</div>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-md text-sm lg:text-base">
                Transforming businesses through exceptional digital experiences. I craft modern, 
                high-performance websites and applications that drive growth and success.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm group cursor-pointer"
              >
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+92 341 735 9571</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm group cursor-pointer"
              >
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">muzammalzaheer571@gmail.com</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm group cursor-pointer"
              >
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Pakistan • Serving Worldwide</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              // className="flex items-center gap-6 pt-4 border-t border-white/10"
            >
              {/* <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Follow</span> */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/muzammal5-svg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  <Github className="w-5 h-5 relative z-10" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muz-the-coder/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  <Linkedin className="w-5 h-5 relative z-10" />
                </a>
                <a 
                  href="mailto:muzammalzaheer571@gmail.com" 
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  <Mail className="w-5 h-5 relative z-10" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2 group cursor-pointer hover:cursor-pointer"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2 group cursor-pointer hover:cursor-pointer"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            {/* <div className="mt-8 p-6 glass-card rounded-xl border border-white/10">
              <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-xs text-gray-400 mb-4">Get the latest web development tips and project updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 bg-gradient-blue rounded-lg text-xs font-medium text-white hover:bg-gradient-purple transition-all duration-300 cursor-pointer hover:cursor-pointer"
                >
                  Subscribe
                </motion.button>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Muzammal Zaheer. Crafted with ❤️ All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <div className="text-gray-500">•</div>
              <div className="text-gray-400">
                Made with Next.js & Tailwind CSS
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}