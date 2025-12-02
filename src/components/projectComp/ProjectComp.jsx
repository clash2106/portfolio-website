import React from 'react'
import {motion} from "framer-motion"
import { Github, ExternalLink } from 'lucide-react'
function ProjectComp() {
const PROJECTS =[
    {
    title: 'SEREIN ,The E-Commerce website ',
    desc: 'SEREIN is a modern, minimal e-commerce website designed for a smooth, elegant shopping experience with responsive design and a clean UI.',
    ss: './serein.png',
    tech: ['React', 'Express.js','MongoDB', 'Tailwind CSS'],
    live: 'https://serein-skincare-yf93-c8gjtb92o-clash2106s-projects.vercel.app/',
    code: 'https://github.com/clash2106/serein-skincare'
    },
    {
  title: 'Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolioai.png',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: 'https://portfolio-website-nine-tau-77.vercel.app/',
  code: 'https://github.com/clash2106/portfolio-website'
  },
  
]

  return (
    <motion.section 
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='mt-10 m-8'>
        <motion.h2
        className="text-4xl font-semibold text-cyan-400  mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}>
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  {PROJECTS.map((p, index) => (
    <motion.div
      key={index}
      className="relative bg-white/10 h-130 md:h-125 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20 hover:shadow-xl 
                 transition-all duration-300 flex flex-col gap-4"
      whileHover={{ scale: 1.03 }}
    >
      {/* Image */}
      <motion.div
        className="overflow-hidden rounded-xl"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={p.ss}
          alt={p.title}
          className="w-full h-48 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-2 ">
        <h3 className="text-2xl font-semibold leading-7   text-cyan-400">{p.title}</h3>
        <p className="text-md  text-gray-300">{p.desc}</p>

        {/* Tech Stack Tags */}
        <div className="absolute bottom-17  flex flex-wrap gap-2 mt-2">
          {p.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full border border-white/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="absolute  flex gap-2 md:left-42 bottom-4">
          <motion.a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-gray-900 px-3 py-2 rounded-lg text-white 
                       hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} /> Code
          </motion.a>

          <motion.a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-blue-600 px-3 py-2 rounded-lg text-white 
                       hover:bg-blue-500 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} /> Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </motion.section>
  )
}

export default ProjectComp