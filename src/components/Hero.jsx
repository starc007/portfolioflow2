import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 z-0"></div>
      
      {/* Animated gradient accent */}
      <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl filter opacity-30 animate-blob"></div>
      <div className="absolute top-[40%] right-[15%] w-72 h-72 bg-purple-600/20 rounded-full blur-3xl filter opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-blue-600/20 rounded-full blur-3xl filter opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Hello, I'm <span className="text-indigo-500">Your Name</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-gray-300">
              <span className="typing-text relative">
                I'm a{" "}
                <span className="text-indigo-400">Web Developer</span>
              </span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0 text-base md:text-lg">
              Passionate about crafting beautiful, functional websites and applications
              that solve real-world problems. Let's build something amazing together.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white rounded-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              View Projects
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex gap-6 justify-center md:justify-start"
          >
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full md:w-2/5 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center">
              {/* Replace with your profile image */}
              <div className="text-gray-600 text-center">
                <div className="text-6xl mb-2">👤</div>
                <div className="text-sm">Profile Image</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-gray-400 mb-2 text-sm">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown className="text-indigo-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero