import React from 'react'

import {motion } from 'framer-motion'
import {assets} from '../assets/assets'
import { TbBrandLinkedinFilled } from "react-icons/tb"
import {FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
   <motion.div initial={{opacity:0, y:50}}
       whileInView = {{opacity:1, y:0}}
       transition = {{duration: 0.6, ease: 'easeOut'}}
       viewport={{once: true}}
       id='home'
       className='min-h-screen flex items-center pt-20 pb-16 bg-gradien-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
       >
       <div className='container mx-autuo px-12 flex flex-col md:flex-row items-center justify-between'>
        {/* left side */}
        <div className=' mb-10 md:mb-0'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-purple'>Rinki Sagar</span>
        </h1>
        <h2 className='text-2xl md:text-4xl font-semibold mb-6
          typewriter'>Front-End Developer</h2>
        <p className='text-lg text-gray-50 mb-8'> I create stunning web experiences with morden technologiess and innovative design </p>

        <div className='flex space-x-4'>
           <a href="https://www.linkedin.com/in/rinkisagar/" className='w-15 h-15 rounded-full bg-dark-400 text-white flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                              
                           <TbBrandLinkedinFilled className='text-4xl'/>
                              </a> 
            <a href="https://github.com/rinki1234567" className='w-15 h-15 rounded-full  bg-dark-400  text-white flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                               
                            <FaGithub className='text-4xl'/>
                               </a> 

        </div>




       
        </div>

         {/* right side */}
        <div className='md:w-1/2 flex justify-center'>
        <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='abolute inset-0  rounded-full bg-gradient-to-r from-purple to bg-yellow-200 opacity-70 '>
                <motion.img 

                animate={{y:[0, -20, 0]}}
                transition={{
                    duration:4,
                    repeat:Infinity,
                    repeatType: 'loop',
                    ease: "easeInOut"
                }}
                className='relative rounded-full w-70 h-70 md:w-80 md:h-80  '
                src={assets.portfolio } alt='profile'/>
            </div>
        </div>

        </div>
       </div>
          
   </motion.div>
  )
}

export default Hero