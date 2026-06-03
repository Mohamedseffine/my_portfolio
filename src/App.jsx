import About from "./sections/About.jsx"
import Hero from "./sections/Hero.jsx"
import Navbar from "./sections/Navbar.jsx"
import Projects from "./sections/Projects.jsx"
function App() {
  return (
    <main className="mx-auto" >
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App
