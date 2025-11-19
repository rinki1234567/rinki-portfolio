import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Home