import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: 'Home', to: 'hero', offset: 0 },
  { name: 'About', to: 'about', offset: -70 },
  { name: 'Skills', to: 'skills', offset: -70 },
  { name: 'Experience', to: 'experience', offset: -70 },
  { name: 'Projects', to: 'projects', offset: -70 },
  { name: 'Contact', to: 'contact', offset: -70 },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-zinc-900/90 backdrop-blur-md shadow-xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            <span className="text-indigo-500">Port</span>folio
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  activeClass="text-indigo-500 font-semibold"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
                className="fixed inset-0 bg-zinc-900/95 backdrop-blur-md z-40 md:hidden flex flex-col justify-center"
              >
                <ul className="flex flex-col items-center gap-6 text-lg">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={item.offset}
                        duration={500}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-200 hover:text-indigo-500 transition-colors text-xl"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar