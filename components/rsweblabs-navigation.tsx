"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function MZwebSolutionsNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "WordPress Development", href: "/services/wordpress", description: "Custom themes & plugins" },
    { name: "Shopify Development", href: "/services/shopify", description: "E-commerce solutions" },
    { name: "Frontend Development", href: "/services/frontend", description: "React & Next.js apps" },
    { name: "eBay Templates", href: "/services/ebay-templates", description: "Listing optimization" },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-nav shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <img 
                src="/MZwebsolution.png" 
                alt="MZwebSolutions Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Muzammal Zaheer</div>
                <div className="text-xs text-gray-400 -mt-1">Senior Developer & SEO Specialist</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer hover:cursor-pointer"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer hover:cursor-pointer">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 lg:w-80 glass-card rounded-2xl p-4 lg:p-6 shadow-2xl"
                  >
                    <div className="space-y-4">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={service.href}
                            className="block p-2 lg:p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-white group-hover:text-primary transition-colors text-sm lg:text-base">
                                  {service.name}
                                </div>
                                <div className="text-xs lg:text-sm text-gray-400 mt-1">
                                  {service.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    {/* <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/portfolio" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer hover:cursor-pointer"
            >
              Portfolio
            </Link>
            
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer hover:cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl glass text-white hover:bg-white/10 transition-colors cursor-pointer hover:cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="glass-card rounded-2xl mt-4 p-4 lg:p-6 space-y-3 lg:space-y-4">
                <Link 
                  href="/" 
                  className="block py-2 lg:py-3 text-white hover:text-primary transition-colors font-medium cursor-pointer hover:cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <div className="text-gray-400 text-xs lg:text-sm font-medium uppercase tracking-wider">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-1 lg:py-2 pl-4 text-gray-300 hover:text-white transition-colors cursor-pointer hover:cursor-pointer text-sm lg:text-base"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href="/portfolio" 
                  className="block py-2 lg:py-3 text-white hover:text-primary transition-colors font-medium cursor-pointer hover:cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                
                <Link 
                  href="/contact" 
                  className="block py-2 lg:py-3 text-white hover:text-primary transition-colors font-medium cursor-pointer hover:cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="pt-3 lg:pt-4 border-t border-white/10">
                  <Button 
                    onClick={() => {
                      scrollToContact()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-gradient-blue hover:bg-gradient-purple text-white font-semibold py-2 lg:py-3 rounded-xl text-sm lg:text-base"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}