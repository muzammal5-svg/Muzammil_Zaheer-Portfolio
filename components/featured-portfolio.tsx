"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Eye, Sparkles, Star, Award, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"


export function FeaturedPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null)

  const handleProjectClick = (project: typeof featuredProjects[0]) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeModal()
      }
    }

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const featuredProjects = [
    {
      id: 9,
      title: "Nurse AI Hub - Healthcare Platform",
      description: "Modern React.js healthcare platform with AI integration, user dashboard, and responsive design for medical professionals and patients.",
      category: "Custom Web",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "AI Integration"],
      image: "/frontend/Nurse-ai-hub.png",
      liveUrl: "https://nurseaihub.com/",
      githubUrl: "#",
      featured: true,
      isEbayTemplate: false
    },
    {
      id: 6,
      title: "Modern E-Commerce Store",
      description: "Professional Shopify store with advanced product catalog, payment integration, and mobile-optimized design for enhanced user experience.",
      category: "Shopify",
      technologies: ["Shopify Plus", "Liquid", "Custom Apps", "Payment Gateways"],
      image: "/shopify/modern-shopify-ecommerce-store1.png",
      liveUrl: "https://xfte0b-4w.myshopify.com/",
      githubUrl: "#",
      featured: true,
      isEbayTemplate: false
    },
    {
      id: 1,
      title: "Daily Mom Journey - Parenting Blog",
      description: "Professional WordPress blog website for parenting tips, activities, and family lifestyle content with custom theme and SEO optimization.",
      category: "WordPress",
      technologies: ["WordPress", "Custom PHP", "Advanced SEO", "Performance Optimization"],
      image: "/wordpress/dailymomjourney.png",
      liveUrl: "https://dailymomjourney.com/",
      githubUrl: "#",
      featured: true,
      isEbayTemplate: false
    },
    {
      id: 11,
      title: "Premium eBay Listing Template - Electronics",
      description: "Professional eBay listing template designed for electronics products with clean layout and conversion-focused design.",
      category: "eBay Templates",
      technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
      image: "/ebay/template 1.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      isEbayTemplate: true
    },
  ]

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              {/* <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 mb-8">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">Featured Work</span>
              </div> */}
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Recent</span>{" "}
                <span className="text-gradient">Success Stories</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore some of my recent premium projects across different technologies and platforms. 
                Each project showcases exceptional attention to detail and my commitment to delivering results that exceed expectations.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group"
                >
                  <Card className="glass-card border-white/10 hover-lift transition-all duration-500 h-full overflow-hidden">
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.currentTarget;
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            target.style.display = 'none';
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-gray-400 text-sm">Project Preview</div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold ${
                          project.category === "WordPress" 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : project.category === "Custom Web"
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : project.category === "Shopify"
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            : project.category === "eBay Templates"
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-primary/20 text-primary border border-primary/30'
                        }`}>
                          {project.category}
                        </span>
                      </div>

                      {/* Performance Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                          <Star className="w-3 h-3 text-green-400" />
                          <span className="text-xs font-medium text-green-400">Featured</span>
                        </div>
                      </div>
                      
                      {/* Overlay with Actions */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4"
                      >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            size="sm" 
                            className="bg-white text-black hover:bg-gray-100"
                            onClick={() => handleProjectClick(project)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </motion.div>
                        {!project.isEbayTemplate && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-white text-white hover:bg-white hover:text-black"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {project.category === "Shopify" ? "Live Store" : "Live Site"}
                            </Button>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 lg:p-8">
                      {/* Project Title & Description */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 lg:px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button 
                            variant="outline" 
                            className="w-full glass border-white/20 text-white hover:bg-white/10 text-sm lg:text-base py-2 lg:py-3"
                            onClick={() => handleProjectClick(project)}
                          >
                            View Preview
                          </Button>
                        </motion.div>
                        {!project.isEbayTemplate && (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              className="bg-gradient-blue hover:bg-gradient-purple text-white px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                            >
                              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* View All Portfolio Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="glass-card border-white/10 p-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                  {/* <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Explore More Work</span>
                  </div> */}
                  
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                    Want to See More Projects?
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Discover my complete portfolio showcasing 50+ successful projects across various industries and technologies. 
                    Each project tells a unique story of innovation and excellence.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/portfolio">
                        <Button 
                          size="lg"
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          View Complete Portfolio
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300"
                        >
                          Discuss Your Project
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">2+</div>
                      <div className="text-sm text-gray-400">Industries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-gray-400">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 lg:p-6 border-b border-white/10">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg lg:text-2xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    {selectedProject.description}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer hover:cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-4 lg:p-6">
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[50vh] lg:max-h-[60vh] object-contain rounded-lg bg-white"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl p-4 border border-white/20">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-center">
                        <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold ${
                          selectedProject.category === "WordPress" 
                            ? 'bg-blue-500/90 text-white'
                            : selectedProject.category === "Custom Web"
                            ? 'bg-green-500/90 text-white'
                            : selectedProject.category === "Shopify"
                            ? 'bg-purple-500/90 text-white'
                            : selectedProject.category === "eBay Templates"
                            ? 'bg-yellow-500/90 text-black'
                            : 'bg-primary/90 text-white'
                        } border-0`}>
                          {selectedProject.isEbayTemplate 
                            ? 'Professional eBay Listing Template' 
                            : selectedProject.category === "WordPress"
                            ? 'Professional WordPress Website'
                            : selectedProject.category === "Custom Web"
                            ? 'Professional React.js Application'
                            : selectedProject.category === "Shopify"
                            ? 'Professional Shopify Store'
                            : `${selectedProject.category} Project`
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4 lg:mt-6 justify-center">
                  {selectedProject.isEbayTemplate ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact">
                          <Button className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl">
                            Get This Template
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/services/ebay-templates">
                          <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                            View All Templates
                          </Button>
                        </Link>
                      </motion.div>
                    </>
                  ) : selectedProject.category === "WordPress" ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Live Site
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/services/wordpress">
                          <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                            WordPress Services
                          </Button>
                        </Link>
                      </motion.div>
                    </>
                  ) : selectedProject.category === "Custom Web" ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Live Site
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/services/frontend">
                          <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                            Frontend Services
                          </Button>
                        </Link>
                      </motion.div>
                    </>
                  ) : selectedProject.category === "Shopify" ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Live Store
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/services/shopify">
                          <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                            Shopify Services
                          </Button>
                        </Link>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Live Site
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact">
                          <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                            Start Similar Project
                          </Button>
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}