import React from 'react'
import { motion } from "framer-motion";


function FloatingBubble({x,y,logo,name}) {
//because we will assume the center to be 0,0 so -50% and 50%
const dx = (Math.random() - 0.2) * 100;
const dy = (Math.random() - 0.2) * 100;
  return (
  <motion.div
  className="absolute md:w-32 md:h-32 w-18 h-18  rounded-full bg-[#0b1220] border border-cyan-400/20 shadow-lg flex flex-col items-center justify-center"
  style={{left:x,top:y}}
  animate={{
    x:[0,dx ,0,dy,0],
    y:[0,dy,0,dx,0],
  }}
  transition={{
        duration: 12 + Math.random() * 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
    }}
>
    <img src={logo} alt={name} className='md:w-12 md:h-12 w-7 h-7' />
    <p className="text-white text-sm mt-1">{name}</p>
</motion.div>
)
}

export default FloatingBubble

/*

1. This tells Framer Motion:
Start at (0,0)
Move to (dx, dy)
Return to (0,0)

2.  duration: animation lasts 5–8 seconds
    repeat: Infinity → loops forever
    repeatType: "mirror" → plays forward, then backward
    ease: "easeInOut" → slow start/end, smooth middle

3.     
*/