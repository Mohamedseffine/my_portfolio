import About from "./sections/About.jsx"
import Hero from "./sections/Hero.jsx"
import Navbar from "./sections/Navbar.jsx"
import Projects from "./sections/Projects.jsx"
import Recommendations from "./sections/Recommendations.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
function App() {
  return (
    <main className="max-w-10/12 mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Recommendations />
      
      <Contact />
      <Footer />
    </main>
  )
}

export default App
