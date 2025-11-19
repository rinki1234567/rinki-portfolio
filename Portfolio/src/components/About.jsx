import { motion } from 'framer-motion'
import React from 'react'
import { assets } from '../assets/assets'
import { FaGithub } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb"


const About = () => {
  return (
    <motion.div initial={{opacity:0, y:50}}
       whileInView = {{opacity:1, y:0}}
       transition = {{duration: 0.6, ease: 'easeOut'}}
       viewport={{once: true}}
       
       id='about'
       className='py-20'
       >
        <div className='container mx-0 px-6'>
          {/* heading */}
          <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-purple'> Me</span></h2>
          <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>


          {/* image + about */}
       <div className=' flex flex-col md:flex-row items-center gap-12'>

        {/* image */}

        <div className='md:w-1/2 rounded-2xl overflow-hidden'>
        
         <motion.img
         initial={{opacity:0, y:50}}
         whileInView={{opacity:1, y:50}}
         transition={{duration: 0.9, ease:'easeOut'}}
         viewport={{once: false, amount:0.2}}
         className='h-dvh  '
         
         src= {assets.myPhoto}alt="profile" />
        </div>

        {/* text containt */}


        <motion.div   initial={{opacity:0, y:50}}
         whileInView={{opacity:1, y:50}}
         transition={{duration: 0.9, ease:'easeOut'}}
         viewport={{once: false, amount:0.2}}
         className='md:w-1/2'
         >
        <div className='rounded-2xl p-5 '>
            <h3 className='text-3xl font-semibold mb-6'>My Journey</h3>
            <p className='text-gray-200 mb-12'>I’m a passionate Front-End Developer who loves turning ideas into clean, responsive, and user-friendly web experiences. My journey began with simple HTML and CSS pages, and today I build dynamic, feature-rich applications using JavaScript, DOM, and modern tools like React and Tailwind.
            I enjoy creating clean and responsive web pages and understanding how each part of a website works behind the scenes.</p>

            <p>I’m continuously learning, improving my skills, and exploring modern tools to grow as a developer. I believe in consistency, clear thinking, and solving problems with a positive mindset.

               I’m self-motivated, love learning new things, and my goal is to become a strong software developer and work in a top MNC company.</p>


               <div className='flex gap-3.5 items-center mt-4'>

                <div className='flex space-x-4'>
                                 <a href="https://www.linkedin.com/in/rinkisagar/" className=' w-15 h-15 rounded-full bg-dark-100 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                   
                                <TbBrandLinkedinFilled className='text-4xl'/>
                                   </a> 
                               <a href="https://github.com/rinki1234567" className='w-15 h-15 rounded-full bg-dark-100 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                   
                                <FaGithub className='text-4xl'/>
                                   </a> 
               
                                    <a href="" className='w-15 h-15 rounded-full bg-dark-100 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                   
                                <IoMdMailUnread className='text-4xl' />
                                   </a> 
               
                                </div>
               </div>




               
        </div>
        </motion.div>

       </div>
        </div>


    </motion.div>
  )
}

export default About