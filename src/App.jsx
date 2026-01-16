import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/all'
import Showcase from './components/Showcase'
import Features from './components/Features'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Features/>
      <Footer/>
    </main>
  )
}

export default App


