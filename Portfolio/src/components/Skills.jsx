import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'
import { softSkills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-blue-950'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple'>Skills</span>
        </h2>
        <p className='text-gray-200 text-center max-w-2xl mx-auto mb-16'>
          Technologies I work with to bring ideas to life
        </p>

        {/* Technical Skills */}
        <h1 className='text-4xl text-center p-2.5 font-bold'>Technical Skills</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-indigo-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer'
            >
              <div className='flex items-center mb-4'>
                <skill.icon className='text-4xl mr-2 text-blue-800' />
                <h3 className='text-xl font-semibold'>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h1 className='text-4xl text-center p-2.5 font-bold mt-12'>Soft Skills</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className='border border-purple  rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer text-white'
            >
              <div className='flex items-center mb-4'>
                <skill.icon className='text-4xl mr-2 text-white' />
                <h3 className='text-xl font-semibold'>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
