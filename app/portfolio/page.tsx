"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, X, ZoomIn } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
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
    id: 2,
    title: "MeLearni - Educational Platform",
    description: "Comprehensive WordPress educational website with course management, user registration, and interactive learning features.",
    category: "WordPress",
    technologies: ["WordPress", "LMS Integration", "Custom PHP", "User Management"],
    image: "/wordpress/Melearni.png",
    liveUrl: "https://melearni.com/",
    githubUrl: "#",
    featured: true,
    isEbayTemplate: false
  },
  {
    id: 3,
    title: "ATL Best Vending - Business Website",
    description: "Professional WordPress business website for vending machine services with custom design and lead generation features.",
    category: "WordPress",
    technologies: ["WordPress", "Business Theme", "Contact Forms", "SEO Optimization"],
    image: "/wordpress/Atlbestvending.png",
    liveUrl: "http://atlbestvending.com/",
    githubUrl: "#",
    featured: true,
    isEbayTemplate: false
  },
  {
    id: 4,
    title: "Daily Mom Journey - Craft Activities",
    description: "Specialized WordPress section for craft activities and creative projects for families with organized category structure.",
    category: "WordPress",
    technologies: ["WordPress", "Category Management", "Custom Post Types", "Media Gallery"],
    image: "/wordpress/dailymomblog.png",
    liveUrl: "https://dailymomjourney.com/craft-activity-category/",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: false
  },
  {
    id: 5,
    title: "E-Commerce Fashion Store",
    description: "Modern Shopify store with custom theme, advanced filtering, and seamless checkout experience.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    image: "/modern-shopify-ecommerce-store.jpg",
    liveUrl: "https://hzdynamics.co.uk/",
    // githubUrl: "#",
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
    id: 7,
    title: "Allbirds - Sustainable Footwear",
    description: "Premium Shopify store for sustainable footwear brand with eco-friendly design, product customization, and seamless checkout experience.",
    category: "Shopify",
    technologies: ["Shopify Plus", "Liquid", "Custom Checkout", "Sustainability Features"],
    image: "/shopify/shopify landing page.png",
    liveUrl: "https://www.allbirds.com/",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: false
  },
  {
    id: 8,
    title: "Gymshark - Fitness Apparel",
    description: "High-performance Shopify store for fitness apparel with advanced product filtering, size guides, and community features.",
    category: "Shopify",
    technologies: ["Shopify Plus", "Product Reviews", "Size Guide", "Community Integration"],
    image: "/shopify/modern-shopify-ecommerce-store1.png",
    liveUrl: "https://www.gymshark.com/",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: false
  },
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
    id: 10,
    title: "CodeWire Solutions - Portfolio Website",
    description: "Professional React.js portfolio website with modern design, smooth animations, and optimized performance for a software development company.",
    category: "Custom Web",
    technologies: ["React.js", "Next.js", "TypeScript", "Modern CSS"],
    image: "/frontend/Portfolio_website.png",
    liveUrl: "https://www.codewiresolutions.com/",
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
  {
    id: 12,
    title: "Premium eBay Listing Template - Fashion",
    description: "Stylish eBay listing template perfect for fashion and clothing items with modern design elements.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 2.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 13,
    title: "Premium eBay Listing Template - Home & Garden",
    description: "Clean and professional eBay listing template designed for home and garden products.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 3.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 14,
    title: "Premium eBay Listing Template - Automotive",
    description: "Professional eBay listing template tailored for automotive parts and accessories.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 4.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 11,
    title: "Premium eBay Listing Template - Sports & Fitness",
    description: "Dynamic eBay listing template designed for sports and fitness equipment with engaging visuals.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 5.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 12,
    title: "Premium eBay Listing Template - Beauty & Health",
    description: "Elegant eBay listing template perfect for beauty and health products with premium styling.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 6.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 13,
    title: "Premium eBay Listing Template - Toys & Games",
    description: "Colorful and engaging eBay listing template designed for toys and games with playful elements.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 7.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 14,
    title: "Premium eBay Listing Template - Books & Media",
    description: "Clean and organized eBay listing template perfect for books, media, and educational products.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 8.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 15,
    title: "Premium eBay Listing Template - Jewelry & Accessories",
    description: "Luxurious eBay listing template designed for jewelry and accessories with elegant presentation.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 9.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 16,
    title: "Premium eBay Listing Template - Business & Industrial",
    description: "Professional eBay listing template for business and industrial products with corporate design.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 10.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 17,
    title: "Premium eBay Listing Template - Pet Supplies",
    description: "Friendly and appealing eBay listing template designed for pet supplies and accessories.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/templae 11.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 18,
    title: "Premium eBay Listing Template - Collectibles",
    description: "Sophisticated eBay listing template perfect for collectibles and vintage items.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 12.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 19,
    title: "Premium eBay Listing Template - Musical Instruments",
    description: "Creative eBay listing template designed for musical instruments with artistic elements.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 13.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 20,
    title: "Premium eBay Listing Template - Crafts & Hobbies",
    description: "Inspiring eBay listing template perfect for crafts and hobby supplies with creative design.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 14.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 22,
    title: "Premium eBay Listing Template - Office Supplies",
    description: "Professional eBay listing template designed for office supplies and business equipment.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 16.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 23,
    title: "Premium eBay Listing Template - Garden Tools",
    description: "Nature-inspired eBay listing template perfect for garden tools and outdoor equipment.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 17.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 24,
    title: "Premium eBay Listing Template - Kitchen & Dining",
    description: "Appetizing eBay listing template designed for kitchen and dining products.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/Template 18.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 25,
    title: "Premium eBay Listing Template - Baby & Kids",
    description: "Playful and safe eBay listing template designed for baby and kids products.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 20.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  },
  {
    id: 26,
    title: "Premium eBay Listing Template - Mobile & Accessories",
    description: "Tech-focused eBay listing template perfect for mobile phones and accessories.",
    category: "eBay Templates",
    technologies: ["HTML5", "CSS3", "Responsive Design", "eBay Compatible"],
    image: "/ebay/template 21.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isEbayTemplate: true
  }
]

const categories = ["All", "WordPress", "Shopify", "Custom Web", "eBay Templates"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedTemplate, setSelectedTemplate] = useState<typeof projects[0] | null>(null)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  const handleTemplateClick = (project: typeof projects[0]) => {
    // Open preview modal for any project
    setSelectedTemplate(project)
  }

  const closeModal = () => {
    setSelectedTemplate(null)
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedTemplate) {
        closeModal()
      }
    }

    if (selectedTemplate) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedTemplate])

  return (
    <>
      <MZwebSolutionsNavigation />
      <div className="min-h-screen bg-gradient-dark pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full glass border border-white/20 mb-6 lg:mb-8">
              <Filter className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
              <span className="text-xs lg:text-sm font-medium text-white">Our Work</span>
            </div> */}
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-gradient">Portfolio</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore our collection of successful projects. From e-commerce stores to custom web applications, 
              each project showcases our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8 lg:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 lg:gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium transition-all duration-300 text-sm lg:text-base ${
                  activeCategory === category
                    ? 'bg-gradient-blue text-white shadow-lg'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card 
                    className={`glass-card overflow-hidden hover-lift transition-all duration-500 border-white/10 ${
                      project.isEbayTemplate ? 'cursor-pointer hover:border-yellow-500/50 hover:shadow-yellow-500/20 hover:shadow-lg' : ''
                    }`}
                    onClick={() => handleTemplateClick(project)}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center" style={{display: 'none'}}>
                          <div className="text-white/50 text-6xl font-bold">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      {!project.isEbayTemplate && project.category !== "WordPress" && project.category !== "Custom Web" && project.category !== "Shopify" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.liveUrl}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                      )}

                      {/* WordPress Project Overlay - Only Live Site Button */}
                      {project.category === "WordPress" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.liveUrl}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                      )}

                      {/* Custom Web Project Overlay - Only Live Site Button */}
                      {project.category === "Custom Web" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.liveUrl}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                      )}

                      {/* Shopify Project Overlay - Only Live Site Button */}
                      {project.category === "Shopify" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.liveUrl}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                      )}

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-blue text-white border-0">
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* eBay Template Badge */}
                      {project.isEbayTemplate && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500/90 text-black border-0 font-semibold">
                            eBay Template
                          </Badge>
                        </div>
                      )}

                      {/* WordPress Project Badge */}
                      {project.category === "WordPress" && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-500/90 text-white border-0 font-semibold">
                            WordPress
                          </Badge>
                        </div>
                      )}

                      {/* Custom Web Project Badge */}
                      {project.category === "Custom Web" && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500/90 text-white border-0 font-semibold">
                            React.js
                          </Badge>
                        </div>
                      )}

                      {/* Shopify Project Badge */}
                      {project.category === "Shopify" && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-500/90 text-white border-0 font-semibold">
                            Shopify
                          </Badge>
                        </div>
                      )}

                      {/* Preview Indicator for All Projects */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white"
                        >
                          <ZoomIn className="w-8 h-8" />
                        </motion.div>
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                            {project.isEbayTemplate 
                              ? 'Click to preview template' 
                              : project.category === "WordPress"
                              ? 'Click to preview website'
                              : project.category === "Custom Web"
                              ? 'Click to preview application'
                              : project.category === "Shopify"
                              ? 'Click to preview store'
                              : 'Click to preview project'
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                        {project.isEbayTemplate && (
                          <span className="block mt-2 text-yellow-400 text-xs font-medium">
                            Professional eBay listing template - Ready to use design
                          </span>
                        )}
                        {project.category === "WordPress" && (
                          <span className="block mt-2 text-blue-400 text-xs font-medium">
                            🌐 Live WordPress website - Click to preview
                          </span>
                        )}
                        {project.category === "Custom Web" && (
                          <span className="block mt-2 text-green-400 text-xs font-medium">
                            ⚛️ Live React.js application - Click to preview
                          </span>
                        )}
                        {project.category === "Shopify" && (
                          <span className="block mt-2 text-purple-400 text-xs font-medium">
                            🛒 Live Shopify store - Click to preview
                          </span>
                        )}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* WordPress Live Site Button */}
                      {project.category === "WordPress" && (
                        <div className="mt-4">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Live Site
                            </Button>
                          </motion.div>
                        </div>
                      )}

                      {/* Custom Web Live Site Button */}
                      {project.category === "Custom Web" && (
                        <div className="mt-4">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full glass border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Live Site
                            </Button>
                          </motion.div>
                        </div>
                      )}

                      {/* Shopify Live Site Button */}
                      {project.category === "Shopify" && (
                        <div className="mt-4">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full glass border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Live Store
                            </Button>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-lg">
                No projects found in this category.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Get in touch to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-4 rounded-xl">
                    Start Your Project
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services">
                  <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl">
                    View Services
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* eBay Template Preview Modal */}
      <AnimatePresence>
        {selectedTemplate && (
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
              className="relative max-w-4xl max-h-[90vh] w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedTemplate.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {selectedTemplate.description}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="relative">
                  <img
                    src={selectedTemplate.image}
                    alt={selectedTemplate.title}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg bg-white"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  
                  {/* Template Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl p-4 border border-white/20">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {selectedTemplate.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-center">
                        <Badge className={`${
                          selectedTemplate.isEbayTemplate 
                            ? 'bg-yellow-500/90 text-black' 
                            : selectedTemplate.category === "WordPress"
                            ? 'bg-blue-500/90 text-white'
                            : selectedTemplate.category === "Custom Web"
                            ? 'bg-green-500/90 text-white'
                            : selectedTemplate.category === "Shopify"
                            ? 'bg-purple-500/90 text-white'
                            : 'bg-primary/90 text-white'
                        } border-0 font-semibold`}>
                          {selectedTemplate.isEbayTemplate 
                            ? 'Professional eBay Listing Template' 
                            : selectedTemplate.category === "WordPress"
                            ? 'Professional WordPress Website'
                            : selectedTemplate.category === "Custom Web"
                            ? 'Professional React.js Application'
                            : selectedTemplate.category === "Shopify"
                            ? 'Professional Shopify Store'
                            : `${selectedTemplate.category} Project`
                          }
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6 justify-center">
                  {selectedTemplate.isEbayTemplate ? (
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
                  ) : selectedTemplate.category === "WordPress" ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedTemplate.liveUrl, '_blank')}
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
                  ) : selectedTemplate.category === "Custom Web" ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedTemplate.liveUrl, '_blank')}
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
                  ) : selectedTemplate.category === "Shopify" ? (
                    <>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-3 rounded-xl"
                          onClick={() => window.open(selectedTemplate.liveUrl, '_blank')}
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
                          onClick={() => window.open(selectedTemplate.liveUrl, '_blank')}
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

      <MZwebSolutionsFooter />
    </>
  )
}