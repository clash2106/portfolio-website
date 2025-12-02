import React from "react";
import { motion ,useAnimation } from "framer-motion";
import  "../../index.css"
import { useState ,useEffect } from "react";

export default function HomeComp() {
  
  const controls =useAnimation();
//applying two framer motion in one image with the help of promises
//You use async/await so that the second animation will start only after the first animation finishes.
//Framer Motion’s controls.start() returns a Promise.

  useEffect(() => {
  const startAnimation = async () => {
    await controls.start({
      opacity: [0, 1],
      x: [-50, 0],
      transition: { duration: 1.2, ease: "easeOut" }
    });

    controls.start({
      y: ["0%", "2%","0%","-2%","0%"],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  };

  startAnimation();
}, [controls]);




const professions = [
"Frontend Developer",
"Backend Developer",
"DSA Enthusiast",
"Tech Explorer",
"AI Enthusiast"
];


const infoCards = [
    {
      label: "📍 Location",
      value: "Panipat, Haryana, India",
    },
    {
      label: "💼 Expertise",
      value: "Full Stack Devleopment",
    },
    {
      label: "📧 Contact",
      value: "krishnamanocha2@gmail.com",
    },
  ];

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/clash2106" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/krishna-manocha-12433a317/" },
    { img: "/gmail.png", title: "Email", link: "https://mail.google.com/mail/?view=cm&to=krishnamanocha2@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/+917056649569" },
    { img: "/insta.png", title: "Instagram", link: "https://www.instagram.com/krishnamanocha_/" },
  ]

  return (
    <section className="w-full min-h-screen flex flex-col justify-top items-center px-5 md:px-20 bg-[#02080f] text-white">
      <div className="flex flex-col md:flex-row items-center gap-20 mt-10">
        
        <motion.div
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0,}}
        transition={{         
                      duration:1}}
        className="relative w-64 h-64 md:w-72 md:h-72 rounded-full"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-1rem] rounded-full border-4 border-cyan-400 border-dotted opacity-40 p-6"
          />
          <motion.img
            src="my.png"
            alt="profile"
            className="w-full h-full object-cover rounded-full border-4 border-cyan-500"
            
            animate={controls}
            
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl "
        >
           <h1 className="text-4xl md:text-5xl pb-4 font-bold ">
            Hi, I’m{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              
            >
              Krishna Manocha
            </motion.span>
            </h1>
            <p className="typing-effect text-xl">
            Frontend Developer | Backend Developer | DSA Enthusiast &nbsp;&nbsp;
          </p>

          <div className="flex flex-wrap gap-4 mt-5">
            {professions.map((p) => (
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="px-5 py-2  border border-cyan-400/40 rounded-full
                          text-md text-cyan-300 bg-white/5"
              >
                {p}
              </motion.div>
            ))}
          </div>

          <div className="flex w-fit  gap-3 mt-8">
            {infoCards.map((info)=>(
              <motion.div
              whileHover={{ scale:1.05 ,y:-3}}
              className="bg-white/5 flex flex-col w-fit px-5 space-y-3 py-4 rounded-xl border border-white/10 "

              >
                
                <strong className="text-cyan-300 ">{info.label}</strong>
                <p className="text-gray-300 ">{info.value}</p>

              </motion.div>
            ))}
          </div>



        </motion.div>
        </div>

       
        
            
        <div className="mt-14 text-center">
          <h2 className="text-xl font-semibold">Connect with me</h2>

          <div className="flex justify-center gap-8 mt-6">
            {
              quickLinks.map((item,i)=>(
                <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale:1.2 ,
                  
                  
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3"
                >
                  <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-12 rounded-full h-12 md:w-14 md:h-14"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 ,filter: "none" }}
                  whileHover={{
                  filter: "drop-shadow(0 0 15px #00A8FF)",
                  transition: { duration: 1 }
                  }}
                  
                  transition={{
                    duration:1,
                    /*This sets a separate animation duration ONLY for the filter property. */
                    
                    filter: { duration: 0 }
                    
                  }}
                  >
                    
                  </motion.img>
                </motion.a>
              ))
            }
          </div>
        </div>
        
    </section>
    //target="_blank", the new tab can access your page's window.opener, which can create security risks.
    //noopener -> Prevents the new page from being able to control or access your page.
    //noreferrer -> Also removes the referrer header so the new site doesn't know where the user came from
  );
}

//filter is a CSS property used to apply visual effects to images, icons, and elements.


////inset is a CSS layout shorthand used mostly inside absolute or fixed positioned elements.
//bg-clip-text is a CSS property that makes the background visible only through the text, creating effects like gradient-colored text.