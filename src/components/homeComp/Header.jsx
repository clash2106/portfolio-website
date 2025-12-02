import { NavLink  } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { motion, } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'Skills', link: '/skills' },
    { name: 'Gallery', link: '/gallery' },
    
    { name: 'Certificates', link: '/certificates' },
    
    { name: 'Resume', link: '/resume' },
    { name: 'About Me', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="sticky  w-full top-0 z-50 bg-white/2  backdrop-blur-sm border-b border-white/20">
      <div className="  flex  items-center px-8 py-5 relative">
        <div className="flex items-center space-x-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 ,duration:3 }}
            className="text-[#00A8FF] font-bold text-2xl"
          >
            KM
          </motion.div>

        <div className='space-y-1'>
            <h2 className="text-[14px] font-bold text-white leading-none">
            Krishna Manocha
            </h2>
            <p className="text-[11px] text-gray-400 tracking-wide">
            Full Stack Developer
            </p>
        </div>
        </div>



<nav className="hidden md:flex pl-10  justify-center items-center w-[84%]">
  <ul className="flex space-x-10 text-white text-[15px]">
  {menu.map((item) => (
    <li key={item.name} className="relative">
      <NavLink to={item.link}>
        
        {({ isActive }) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px #00A8FF",
            }}
            transition={{ duration: 0.3 }}
            className="inline-block relative pb-1"
          >
            <span
              className={
                isActive
                  ? "text-[#00A8FF] font-semibold"
                  : "text-white drop-shadow-[0_0_1px_white] hover:drop-shadow-[0_0_1px_white]"
              }
            >
              {item.name}
            </span>

            
            {isActive && (
              //the animation from one link to other is all done by the motion keyword in the back
              <motion.div
                layoutId="nav-underline"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:0.4 }}
                className="
                  absolute left-1/2 -translate-x-1/2 bottom-0
                  w-[70%] h-[2px] rounded
                  bg-[#00A8FF] shadow-[0_0_6px_#00A8FF]
                "
              />
              
              
            )}
          
          </motion.div>
          //the above motion.div is a self closing
        )}
      </NavLink>
    </li>
  ))}
  </ul>
</nav>



        <button
          className="text-3xl cursor-pointer absolute right-4 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        
    </div>

    {isOpen && (
        <ul className="md:hidden flex flex-col bg-black/90 text-white text-center">
          {menu.map((item) => (
            <li
              key={item.link}
              className="py-4 "
            >
              <NavLink
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#00A8FF]" : "hover:text-[#9d9fa1]"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
</header>
);
};

export default Header;


//::after is a virtual element created by CSS that is not in your HTML but can appear after an element.

//after:absolute	          Positions the pseudo-element absolutely
//after:left-1/2	          Moves it to the horizontal center (50% from the left)
//after:-translate-x-1/2 	  Corrects positioning by shifting half back, so it’s perfectly centered
//after:bottom-0	          Places it at the bottom of the text
//after:h-[2px]	          Makes the underline 2px thick
//after:w-0	              Width = 0 when not active (hidden)
//after:content-['']	      Required to show the pseudo-element (content cannot be empty)

/* 
this is my old version of the link in the navbar

<section>
  <ul className="flex space-x-10 text-white text-[15px]">
            {menu.map((item, i) => (

            <li key={item.name} className="relative">
                <NavLink
                to={item.link}
                className={({ isActive }) =>
                    //Scaling causes text to overlap or push layout ->Add inline-block
                    `
                inline-block transition-transform duration-300 ease-oudt 
                relative pb-1  
                ${isActive? 'text-[#00A8FF] font-semibold   hover:drop-shadow-[0_0_8px_#00A8FF] '//  md:after:w-[70%] md:after:bg-[#00A8FF]
                    : ' drop-shadow-[0_0_1px_white]  hover:drop-shadow-[0_0_3px_white] '}`
                //md:after:absolute md:after:left-1/2 md:after:-translate-x-1/2 md:after:bottom-0 md:after:h-[2px] md:after:w-0 md:after:content-['']
                }
                
                >
                {item.name}
                </NavLink>
            </li>
            ))}
        </ul>
</section>
*/

/*
in motion.framer 
1. animate 
2. transiton 
these 2 properties work side by side
/use of inline block property in the classname -prevents layout shifting (important)
*/


/*
these two are also used simultaneously
left-1/2 -translate-x-1/2
*/