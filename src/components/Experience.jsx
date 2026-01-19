import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  // Work experience data
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led the development of the company's flagship web application using React, TypeScript, and Redux",
        "Implemented responsive design principles resulting in a 40% improvement in mobile user engagement",
        "Collaborated with UX designers to create intuitive user interfaces and seamless user experiences",
        "Mentored junior developers and conducted code reviews to ensure code quality and best practices"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      duration: "Jun 2019 - Dec 2021",
      location: "New York, NY",
      description: [
        "Developed and maintained client websites using React, JavaScript, and CSS/SASS",
        "Built custom components and integrated them with APIs and backend services",
        "Optimized application performance, achieving a 30% reduction in load time",
        "Participated in agile development processes, including daily stand-ups and sprint planning"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "CreativeWeb Studios",
      duration: "Jan 2019 - May 2019",
      location: "Boston, MA",
      description: [
        "Assisted in the development of responsive websites using HTML5, CSS3, and JavaScript",
        "Collaborated with the design team to implement UI/UX improvements",
        "Participated in client meetings to gather requirements and present project progress",
        "Gained hands-on experience with version control systems and project management tools"
      ]
    }
  ]

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2015 - 2019",
      location: "Boston, MA",
      description: "Graduated with honors. Specialized in web technologies and software engineering."
    }
  ]

  // Animation variants
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

  return (
    <section id="experience" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Experience
            <span className="block h-1 w-12 bg-indigo-500 mx-auto mt-3"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center mb-8"
            >
              <FaBriefcase className="text-indigo-500 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative border-l-2 border-indigo-500/30 pl-8 ml-3 space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[40px] mt-1.5 w-5 h-5 rounded-full border-4 border-indigo-500 bg-zinc-900"></div>
                  
                  <div className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all">
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <h5 className="text-indigo-400 font-medium mt-1">{exp.company}</h5>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education and Certifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center mb-8"
              >
                <FaUserGraduate className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <h5 className="text-indigo-400 font-medium mt-1">{edu.institution}</h5>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center mb-6"
              >
                <FaCertificate className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-4"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-zinc-900/80 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all"
                >
                  <h4 className="text-white font-semibold">Front-End Web Developer</h4>
                  <p className="text-indigo-400 text-sm mt-1">Udacity</p>
                  <p className="text-gray-400 text-sm mt-2">2020</p>
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="bg-zinc-900/80 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all"
                >
                  <h4 className="text-white font-semibold">React Fundamentals</h4>
                  <p className="text-indigo-400 text-sm mt-1">Meta</p>
                  <p className="text-gray-400 text-sm mt-2">2021</p>
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="bg-zinc-900/80 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all"
                >
                  <h4 className="text-white font-semibold">UI/UX Design</h4>
                  <p className="text-indigo-400 text-sm mt-1">Google</p>
                  <p className="text-gray-400 text-sm mt-2">2022</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { FaUserGraduate, FaCertificate } from 'react-icons/fa'
export default Experience