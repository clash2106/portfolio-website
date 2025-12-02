import React, { useEffect ,useRef ,useState } from 'react'
import {motion} from "framer-motion"
import FloatingBubble from './FloatingBubble';
function SkillsComp() {

    const skills = [
  {name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Express", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}
];

const rows =[
     [
    { title: "Programming Languages", items: ["Python", "C", "C++"] },
    { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React","Express.js","Next.js"] },
    { title: "Databases & Tools", items: [ "MongoDB", "Git","GitHub"] },
    { title: "Frameworks & Libraries", items: ["Tailwind","Framer.motion","Appwrite"] },
  ],
   [
    {
      title: "Core Concepts",
      items: [
        "Data Structures & Algorithms",
        "Web Development"
      ],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Creativity",, "Communication"],
    },
  ],
]

const stageRef = useRef(null);
const [positions, setPositions] = useState([]);

useEffect(()=>{
    const stage=stageRef.current;
    if(!stage) return ;

    const rect = stage.getBoundingClientRect();
    const placed =[]
    
    //x and y are the random cordinates
    //.some() tests whether at least one element in an array passes a given condition.
    const isOverlap = (x, y, size) =>
    placed.some((p) => {
    const dx = p.x - x;
    const dy = p.y - y;
    //this will give us the area of the rectangle
    return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40
  });

  //We loop over skills to calculate newPositions because skills is the "Source of Truth" for how many items exist.
  const newPositions =skills.map(()=>{
    const size = 140;
    let x, y, tries = 0;

    do {
        //we multiply we the total width and height of the bif rectangle
    x = Math.random() * (rect.width - size - 20);
    y = Math.random() * (rect.height - size - 20);
    tries++;
  } while (isOverlap(x, y, size) && tries < 120);
  placed.push({x,y,size});
  return {x,y};
  });

  setPositions(newPositions);
  
  //Instead, it attempts to retry finding a new position up to 120 times. If it still overlaps after 120 tries, it gives up and places the item anyway, resulting in a visual overlap.

},[])




//ref={stageRef}: This connects this specific HTML div to your useEffect logic
  return (
    <section className=' h-full mx-13 justify-center  my-2 bg-black flex flex-col  '>
        <motion.div 
        className='pl-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <h2 className="text-3xl text-cyan-400 font-semibold mb-3">My Skills</h2>
        <div className="w-28 h-[2px] bg-cyan-400  mb-2"></div>
        <p className="text-gray-400 text-lg mb-2 max-w-xl ">
            Blending precision with imagination — take a look at my core abilities below.
        </p>
        </motion.div>
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    ref={stageRef}
    className='relative w-[975] h-[520px] bg-gray-900 rounded-2xl overflow-hidden'>
        {positions.length > 0 &&
        positions.map((pos, i) => (
          <FloatingBubble
            key={i}
            x={pos.x}
            y={pos.y}
            logo={skills[i].logo}
            name={skills[i].name}
          />
        ))}
        
    </motion.div>




<motion.div
whileInView={{opacity:1,scale:1}}
transition={{ duration: 1.5 }}
className="w-full py-10"
initial={{ opacity: 0, scale:0.9,y:50 }}
>
    
    {rows.map((row, rowIndex) => (
    <div 
    key={rowIndex} 
    className="flex justify-center gap-15  mb-15 flex-wrap"
    >
    {row.map((col, colIndex) => (
        <motion.div
          key={colIndex}
          className="bg-[#0b1220] border border-cyan-400/20 
                     rounded-2xl p-8 w-70 h-70 shadow-lg hover:shadow-cyan-400/20
                     transition-all duration-300"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-cyan-400/20 pb-2">
            {col.title}
          </h3>

          <ul className="space-y-2">
            {col.items.map((item, i) => (
              <motion.li
                key={i}
                className="text-gray-300 text-md cursor-pointer"
                whileHover={{ x: 6, color: "#00ffc8" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  ))}
</motion.div>

    </section>
    //.map(...): This loops through your positions array (the one you filled with {x, y} coordinates).
    //pos: The current coordinate object (e.g., {x: 50, y: 120}).
    //i: The index (0, 1, 2...). This is vital because you use it to look up the matching skill info in the skills array.
  )
}

export default SkillsComp


/*this comp js only check the overlaping and postion the bubble

1. use if useref
useRef in React is a hook that lets you create a mutable reference to something that and persists across renders
does NOT re-render the component when changed
can store DOM elements or any JavaScript value

///////iMportant///////
stageRef becomes a reference to the actual DOM element of that <div>.
So after the component renders, you can do:
stageRef.current
And that gives you the real <div> element in the page.


2.  stageRef will attach to the container <div> so we can read its size/position.
    positions is an array of { x, y } objects (pixel coordinates) used to position each bubble.

3.   In your code, the stageRef (referred to as stage) does NOT know anything about the bubbles themselves. It only refers to the container <div> that holds all the bubbles.
    useEffect runs once (empty dependency array []), and its job is to compute newPositions

4.getBoundingClientRect() returns the container’s width/height in pixels (and x/y relative to viewport). The code uses rect.width and rect.height to know the available space.
const placed = [];placed is an array that keeps track of all bubbles that have already been assigned a position.

5. isoverlap function check
This tests if a candidate (x, y) overlaps any already placed bubble.
It computes Euclidean distance between (p.x, p.y) and (x, y) and compares it to the sum of radii plus an extra 40 pixel buffer.

6.Position generation loop:-
chooses size = 110 (matches w-28 h-28 in FloatingBubble — 112px nominal, close enough).
randomly picks x and y so the bubble stays within rect.width/rect.height with a 20px margin.
repeats until it finds a non-overlapping spot or tries reaches 120 (failsafe).
stores { x, y, size } in placed and returns { x, y } for setPositions.


7. **************imp***************** 
We loop over skills to calculate newPositions because skills is the "Source of Truth" for how many items exist.
We aren't using the skill names (like "React" or "Git") inside the math calculation, but we are using the length of the array to dictate how many coordinate
 pairs we need to generate.
*/