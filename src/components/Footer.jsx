import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      {/* Top section with links */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div className="lg:col-span-1">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-white cursor-pointer"
            >
              <span className="text-indigo-500">Port</span>folio
            </Link>
            <p className="text-gray-400 mt-4">
              A passionate web developer focused on creating beautiful, functional, and user-centered
              digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
          
          {/* Quick links column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Frontend Design', 'UI/UX Design', 'Responsive Design', 'Web Applications'].map((item, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong className="text-indigo-400">Email:</strong>{' '}
                <a href="mailto:your.name@example.com" className="hover:text-indigo-400 transition-colors">
                  your.name@example.com
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-indigo-400">Phone:</strong>{' '}
                <a href="tel:+11234567890" className="hover:text-indigo-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-indigo-400">Location:</strong>{' '}
                San Francisco, CA
              </p>
            </div>
            <div className="mt-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer inline-flex items-center group"
              >
                Get In Touch
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright section */}
      <div className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 sm:mt-0">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-indigo-500 mx-1" /> in React
            </p>
            <div className="ml-6">
              <Link
                to="hero"
                smooth={true}
                duration={800}
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <FaArrowUp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer