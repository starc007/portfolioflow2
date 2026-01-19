import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating loading time
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div 
          key="loader"
          className="flex items-center justify-center h-screen bg-zinc-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2
            }}
            className="w-16 h-16 border-t-4 border-indigo-500 rounded-full animate-spin"
          ></motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 min-h-screen"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App