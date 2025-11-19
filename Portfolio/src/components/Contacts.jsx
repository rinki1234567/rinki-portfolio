import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt,FaGithub } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb"

const Contacts = () => {
  return (
   <motion.div initial={{opacity:0, y:50}}
       whileInView = {{opacity:1, y:0}}
       transition = {{duration: 0.6, ease: 'easeOut'}}
       viewport={{once: true}}
       
       id='contact'
       className='py-20'
       >
        <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get In
            <span className='text-purple'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate ? Lets talk</p>
               
         <div className='grid grid-cols-1 lg:grid-cols-2  gap-12 max-w-5xl mx-auto'>
            {/* contact form */}
            <div>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                        <input
                        className='w-full bg-dark-300/20 border border-dark-400 rounded-lg px-4 py-3 outline-none' 
                         type="text" />
                    </div>

                     <div>
                        <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                        <input
                        className='w-full bg-dark-300/20 border border-dark-400 rounded-lg px-4 py-3 outline-none' 
                         type="text" />
                    </div>

                     <div>
                        <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                        <textarea
                        className='w-full h-40 bg-dark-300/20 border border-dark-400 rounded-lg px-4 py-3 outline-none' 
                         type="text" />
                    </div>
                   
        <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg 
            font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                Send
            </button>
                </form>
            </div>
         {/* contact info */}

        <div className='space-y-8'>
            <div className='flex items-start'>
                <div className='text-purple text-2xl mr-4'>
                  <FaMapMarkerAlt/>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>Location</h3>
                    <p className='text-gray-300'> Morena , Madhya Pradesh ,India</p>
                </div>

            </div>


            <div className='flex items-start'>
                <div className='text-purple text-2xl mr-4'>
                 <IoMdMailUnread />
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>Email</h3>
                    <p className='text-gray-300'> rinkisagar8770@gmail.com</p>
                </div>

            </div>


            <div className='flex items-start'>
                <div className='text-purple text-2xl mr-4'>
                  <FaMapMarkerAlt/>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>Location</h3>
                    <p className='text-gray-300'> Morena Madhya Pradesh ,India</p>
                </div>

            </div>

            <div className='flex items-start'>
                <div className='text-purple text-2xl mr-4'>
                < FaPhone/>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                    <p className='text-gray-400'> +91  8770827883</p>
                </div>
            </div>
            <div className='pt-4'>
                 <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                 <div className='flex space-x-4'>
                  <a href="https://www.linkedin.com/in/rinkisagar/" className='w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                    
                 <TbBrandLinkedinFilled/>
                    </a> 
                <a href="https://github.com/rinki1234567" className='w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                    
                 <FaGithub/>
                    </a> 

                     <a href="" className='w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                    
                 <IoMdMailUnread />
                    </a> 

                 </div>
            </div>
        </div>

         </div>
    </div>
        </motion.div>
  )
}

export default Contacts