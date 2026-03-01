"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Award, Briefcase, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function MZwebSolutionsHero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10 py-20 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400 border border-emerald-500/20 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg shadow-emerald-500/5">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                <span className="text-sm font-semibold tracking-wide">Available for Projects</span>
              </div>
            </motion.div> */}

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h2 className="text-base text-gray-400 font-medium tracking-wider uppercase">Portfolio</h2>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Muzammal Zaheer
                  </span>
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xl lg:text-2xl text-gray-300 font-medium">
                  <span>Senior Web Developer</span>
                  <span className="text-gray-600">•</span>
                  <span>SEO Specialist</span>
                </div>
              </div>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
                Crafting high-performance web solutions with <span className="text-white font-semibold">2+ years</span> of expertise in WordPress, Shopify, and cutting-edge web technologies.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs text-gray-400 font-medium">Projects</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-xs text-gray-400 font-medium">Years</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-400 font-medium">Satisfaction</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 group shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  View Portfolio
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 pt-4 border-t border-white/10"
            >
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Follow</span>
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

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:order-last order-first"
          >
            <div className="relative aspect-[3/4] max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-3xl blur-3xl"></div>
              
              {/* Image */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/Untitled design.png"
                  alt="Muzammal Zaheer"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Specialized in</div>
                  <div className="text-white font-semibold">WordPress • Shopify • React</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
