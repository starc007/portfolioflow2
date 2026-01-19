import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, FaGit, FaFigma,
  FaMobile, FaServer 
} from 'react-icons/fa'

const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaHtml5 className="text-3xl text-indigo-500" />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SASS", level: 85 },
        { name: "JavaScript/ES6+", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Redux", level: 75 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-3xl text-indigo-500" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "GraphQL", level: 65 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaGit className="text-3xl text-indigo-500" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Jest/Testing", level: 75 },
        { name: "UI/UX Design", level: 65 },
        { name: "Responsive Design", level: 90 },
        { name: "PWA", level: 60 },
      ]
    }
  ]

  // Animation variants for staggered children
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
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            My Skills
            <span className="block h-1 w-12 bg-indigo-500 mx-auto mt-3"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are my technical skills and areas of expertise.
          </p>
        </motion.div>

        {/* Tech icons grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-8 mb-16"
        >
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-4xl text-[#e34c26] mb-2" />
            <span className="text-gray-400 text-sm">HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-[#264de4] mb-2" />
            <span className="text-gray-400 text-sm">CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="text-4xl text-[#f7df1e] mb-2" />
            <span className="text-gray-400 text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-[#61dafb] mb-2" />
            <span className="text-gray-400 text-sm">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl text-[#43853d] mb-2" />
            <span className="text-gray-400 text-sm">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-4xl text-[#336791] mb-2" />
            <span className="text-gray-400 text-sm">SQL</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-4xl text-[#4DB33D] mb-2" />
            <span className="text-gray-400 text-sm">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGit className="text-4xl text-[#f34f29] mb-2" />
            <span className="text-gray-400 text-sm">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <FaFigma className="text-4xl text-[#f24e1e] mb-2" />
            <span className="text-gray-400 text-sm">Figma</span>
          </div>
          <div className="flex flex-col items-center">
            <FaMobile className="text-4xl text-[#a259ff] mb-2" />
            <span className="text-gray-400 text-sm">Responsive</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-zinc-800 rounded-xl p-6 border border-zinc-700"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-zinc-800/50 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all">
            <h4 className="text-white font-semibold mb-2">Problem Solver</h4>
            <p className="text-gray-400 text-sm">Analytical thinker who loves tackling complex challenges.</p>
          </div>
          <div className="bg-zinc-800/50 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all">
            <h4 className="text-white font-semibold mb-2">Clean Code</h4>
            <p className="text-gray-400 text-sm">Focused on writing maintainable, efficient, and well-documented code.</p>
          </div>
          <div className="bg-zinc-800/50 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all">
            <h4 className="text-white font-semibold mb-2">User-Centered</h4>
            <p className="text-gray-400 text-sm">Creating intuitive and accessible user experiences is my priority.</p>
          </div>
          <div className="bg-zinc-800/50 backdrop-blur-sm p-5 rounded-lg border border-zinc-700 hover:border-indigo-500 transition-all">
            <h4 className="text-white font-semibold mb-2">Continuous Learner</h4>
            <p className="text-gray-400 text-sm">Always exploring new technologies and staying up-to-date with trends.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills