import Header from "./components/homeComp/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Footer from "./components/homeComp/Footer"
import Skills from "./Pages/Skills"
import { Route ,Routes } from "react-router-dom"
import Projects from "./Pages/Projects"
import Gallery from "./Pages/Gallery"
function App() {
  

  return (
    //Pushes the footer to the bottom when content is short.
    <>
     <Header  />
     <div className="min-h-screen flex flex-col">
     <main className="flex-grow ">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="skills" element={<Skills/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="gallery" element={<Gallery/>}/>
     </Routes>
     </main>
     <Footer/>
     </div>
    </>
  )
}

export default App
