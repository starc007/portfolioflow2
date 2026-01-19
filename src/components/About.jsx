import React from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

const About = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Career highlights data
  const highlights = [
    {
      icon: <FaUserGraduate className="text-indigo-500 text-2xl" />,
      title: "Education",
      description: "Graduated with honors in Computer Science from a prestigious university."
    },
    {
      icon: <FaCode className="text-indigo-500 text-2xl" />,
      title: "Development",
      description: "Passionate about clean code, accessibility, and modern development practices."
    },
    {
      icon: <FaLaptopCode className="text-indigo-500 text-2xl" />,
      title: "Tech Stack",
      description: "Specialized in front-end technologies with experience in full-stack development."
    },
    {
      icon: <FaRocket className="text-indigo-500 text-2xl" />,
      title: "Innovation",
      description: "Constantly learning and implementing cutting-edge technologies."
    }
  ]

  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            About Me
            <span className="block h-1 w-12 bg-indigo-500 mx-auto mt-3"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              I'm <span className="text-indigo-500">Your Name</span>, a passionate Web Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a detail-oriented web developer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With a background in computer science and several 
              years of experience in the field, I am constantly looking for new and innovative ways to 
              bring my clients' visions to life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe that design is about more than just making things look pretty – it's about solving 
              problems and creating intuitive, enjoyable experiences for users. Whether I'm working on a website, 
              mobile app, or other digital product, I bring my commitment to design excellence and user-centered 
              thinking to every project.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or pushing pixels, you'll find me exploring new technologies, contributing to 
              open-source projects, or enjoying the outdoors. I'm a lifelong learner and love to stay updated with 
              the latest trends and advancements in the tech world.
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all hover:shadow-indigo-500/10 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About