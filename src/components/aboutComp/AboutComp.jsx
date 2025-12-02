import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-16 bg-gradient-to-b from-black to-[#0d0d0d] text-white">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-10 space-y-6"
      >
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-black bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Hi, I’m <span className="font-semibold text-cyan-300">Krishna Manocha</span> — 
          a passionate <strong className="text-white">Web Developer</strong> and 
          aspiring <strong className="text-white">AI Engineer</strong> who loves building 
          interactive, visually engaging, and intelligent digital experiences.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I blend <strong>clean UI design</strong>, <strong>smooth animations</strong>, and 
          <strong> modern web development</strong> to build responsive, intuitive interfaces. 
          I'm fascinated by how intelligent systems — AI models, automation, and data-driven tools — 
          can transform user experience and problem-solving.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My technical skillset includes: <span className="font-semibold">
    HTML, CSS, JavaScript, React.js, Tailwind CSS, Framer Motion,MongoDB ,Express.js and UI/UX fundamentals
  </span>.I am also a DSA Enthusisat and loved solving new Problems.
        </p>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 25 ,scale:0.8}}
        animate={{ opacity: 1, y: 0,scale:1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        whileInView={{scale:1}}
        className="w-full max-w-4xl mt-10"
      >
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Education
        </h3>

        <div className="flex flex-col gap-6">
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-xl shadow-lg"
          >
            <FaUniversity size={45} className="text-cyan-400" />
            <div>
              <h4 className="text-cyan-300 text-lg font-semibold">
                B.Tech in Information Technology

              </h4>
              <p className="text-gray-300">
                <strong>Maharaja Surajmal Institute if Technology</strong>, Delhi
              </p>
              <p className="text-gray-400 text-sm">2024 – 2028 (Pursuing)</p>
              <p className="text-gray-400 text-sm">Current GPA: 8.93</p>
            </div>
          </motion.div>

          
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-xl shadow-lg"
          >
            <FaGraduationCap size={40} className="text-cyan-400" />
            <div>
              <h4 className="text-cyan-300 text-lg font-semibold">
                Higher Secondary Education (12th Grade)
              </h4>
              <p className="text-gray-300">
                <strong>Siddharth Public School School</strong>, Delhi
              </p>
              <p className="text-gray-400 text-sm">Percentage: 82%</p>
              <p className="text-gray-400 text-sm">Completed in 2024</p>
            </div>
          </motion.div>

          {/* --- Education Card 3 --- */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-xl shadow-lg"
          >
            <FaSchool size={38} className="text-cyan-400" />
            <div>
              <h4 className="text-cyan-300 text-lg font-semibold">
                Secondary Education (10th Grade)
              </h4>
              <p className="text-gray-300">
                <strong>S.D.Vidya Mandir</strong>, Panipat
              </p>
              <p className="text-gray-400 text-sm">Percentage: 96%</p>
              <p className="text-gray-400 text-sm">Completed in 2022</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
