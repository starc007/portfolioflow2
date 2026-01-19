import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaGithub, FaLinkedin, FaTwitter, FaPaperPlane 
} from 'react-icons/fa'

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-indigo-500" />,
      title: "Email",
      value: "your.name@example.com",
      link: "mailto:your.name@example.com"
    },
    {
      icon: <FaPhoneAlt className="text-indigo-500" />,
      title: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890"
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-500" />,
      title: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ]

  // Social links
  const socialLinks = [
    { icon: <FaGithub />, url: "#", label: "GitHub" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" }
  ]

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
    <section id="contact" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Get In Touch
            <span className="block h-1 w-12 bg-indigo-500 mx-auto mt-3"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate, have questions, or just want to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 p-4 rounded-lg flex items-center"
              >
                <FaPaperPlane className="mr-3 text-indigo-400" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-indigo-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-indigo-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-indigo-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-indigo-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    placeholder="Hello! I'd like to discuss a potential project..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 flex justify-center items-center rounded-lg text-white font-semibold 
                    ${loading ? 'bg-indigo-700 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} 
                    transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-900`}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Contact details */}
            <div className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-700 mb-6">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white hover:text-indigo-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Social links */}
              <div className="mt-8">
                <h4 className="text-gray-300 text-sm font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map or availability */}
            <div className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-700 flex-grow">
              <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
              <p className="text-gray-400 mb-6">Currently available for freelance work and full-time opportunities.</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-indigo-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-indigo-400">By appointment</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-indigo-400">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <p className="text-gray-300">Time Zone: <span className="text-white">Pacific Time (PT)</span></p>
                <p className="text-gray-400 mt-2 text-sm">Response time: within 24-48 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact