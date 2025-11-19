import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { Link } from 'react-router-dom'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
   <nav className='fixed w-full z-50 bg-black/0 backdrop-blur-sm py-4 px-8 shadow-lg'>
    <div className='container mx-auto flex justify-between items-center'>
        <div>
            <Link to="/" className='text-3xl font-bold text-white'>
                Rinki<span className='text-purple'>Sagar</span>
               
            </Link>
        </div>
        <div className='hidden md:flex space-x-10 '>
            <Link to="/" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Home</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>
            
            </span>
            </Link>

            <Link to="/about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>About</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>
            
            </span>
            </Link>

            <Link to="/skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Skills</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>
            
            </span>
            </Link>

            <Link to="/projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Projects</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>
            
            </span>
            </Link>

            <Link to="/education"  className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Education</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>
            
            </span>
            </Link>

            <Link to="/contact"  className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Contact</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>
            
            </span>
            </Link>
        </div>
{/* 
        navbar button */}
    <div className='md:hidden'>

        { showMenu ? 
         <FaXmark onClick={()=> setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>:
         <FaBars onClick={()=> setShowMenu(!showMenu)}  className='text-2xl cursor-pointer'/>
        }

   
  </div>
    </div>
 {/* mobile menus */}

{
    showMenu && (
       < div className='md:hidden mt-4 bg-blue-900 h-screen rounded-lg p-4  flex flex-col space-y-4  text-center justify-center text-white'>
            <Link onClick={() => setShowMenu(false)} to="/" className='text-white/80 hover:text-purple'>
                Home
            </Link>

            <Link onClick={() => setShowMenu(false)} to="/about" className='text-white/80 hover:text-purple'>
                About
            </Link>

            <Link onClick={() => setShowMenu(false)} to="/skills" className='text-white/80 hover:text-purple'>
                Skills
            </Link>

            <Link onClick={() => setShowMenu(false)} to="/projects" className='text-white/80 hover:text-purple'>
                Projects
            </Link>

            <Link onClick={() => setShowMenu(false)} to="/education" className='text-white/80 hover:text-purple'>
                Education
            </Link>

            <Link onClick={() => setShowMenu(false)} to="/contact" className='text-white/80 hover:text-purple'>
                Contact
            </Link>
       </div>
    )
}
  

   </nav>
  )
}

export default Navbar