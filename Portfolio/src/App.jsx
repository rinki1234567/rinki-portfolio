import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>

        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    
    </div>
  )
}

export default App