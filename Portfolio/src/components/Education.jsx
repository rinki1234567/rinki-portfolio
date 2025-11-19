import React from 'react'
import { motion } from 'framer-motion'
import { educations } from '../assets/assets'
const Education = () => {
  return (
   <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="education"
      className="py-20"
      >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
             My <span className='text-purple'>Education</span> 
        </h2>
        <p></p>
      <div className='max-w-3xl mx-auto'>

        <div className='space-y-12'>
            {
               educations.map((data, index)=>(
                <div key={index} className='relative pl-12 
           before:content-[""] before:absolute before:left-0 
           before:top-0 before:w-[2px]  before:h-full 
           before:bg-purple-500 cursor-pointer 
           hover:-translate-y-2 transition-all duration-300'>
                {/* timeline */}

                 <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple'>

                 </div>
               {/*box */}
               <div className='bg-dark-300/30 rounded-2xl p-6 '>
                     <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-xl font-semibold '>{data.degree}</h3>
                        <span className='px-3 py-1 bg-purple/20  text-purple rounded-full text-xs md:text-sm'>{data.duration}</span>

                     </div>
                     <p className='text-gray-300 pt-2'>{data.institution}</p>
                     <p className='text-gray-200 pt-2 '>{data.location}</p>
                     <p>{data.description}</p>
               </div>

                </div>
               )) 
            }

        </div>

      </div>

      </div>

   </motion.div>
  )
}

export default Education