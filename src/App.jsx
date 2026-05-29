import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Notes from './components/Notes'
import Footer from './components/Footer'
import { useVisitorCount } from './hooks/useVisitorCount'
import './index.css'

export default function App() {
  const visitors = useVisitorCount()
  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
        @keyframes blink  { 0%,100% { opacity:1 } 50% { opacity:0   } }
      `}</style>
      <Navbar />
      <Hero visitors={visitors} />
      <Roadmap />
      <Skills />
      <Projects />
      <Notes />
      <Footer />
    </>
  )
}
