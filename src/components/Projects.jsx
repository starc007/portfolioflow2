import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTags } from 'react-icons/fa'

const Projects = () => {
  // Project category filter
  const [activeFilter, setActiveFilter] = useState('All')
  
  // Project data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product catalog, cart functionality, user authentication, and payment integration.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=E-Commerce+App",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      category: "Full Stack",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application with drag-and-drop tasks, calendar integration, and real-time collaboration features.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Task+Management+App",
      technologies: ["React", "TypeScript", "Firebase", "Redux"],
      category: "Frontend",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard to track social media performance across multiple platforms with data visualization.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Social+Dashboard",
      technologies: ["React", "D3.js", "CSS Modules", "REST API"],
      category: "Frontend",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Weather Forecast API",
      description: "A RESTful API that provides accurate weather forecasts with location-based services and historical data.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Weather+API",
      technologies: ["Node.js", "Express", "MongoDB", "API Integration"],
      category: "Backend",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing skills and projects with smooth animations and modern design.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Portfolio+Site",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      category: "Frontend",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Blog CMS",
      description: "A content management system for blogs with user authentication, markdown support, and SEO features.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Blog+CMS",
      technologies: ["MERN Stack", "GraphQL", "AWS S3"],
      category: "Full Stack",
      githubLink: "#",
      liveLink: "#"
    }
  ]

  // Project categories
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

  // Filtered projects based on category selection
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Projects
            <span className="block h-1 w-12 bg-indigo-500 mx-auto mt-3"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Take a look at what I've been working on.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              } transition-all duration-300 text-sm md:text-base`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-indigo-500 transition-all group"
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                  
                  {/* Project links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-900/80 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-900/80 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-md bg-zinc-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="#" 
            className="px-8 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <span>View All Projects</span>
            <FaExternalLinkAlt size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects