import React from 'react'
import Footer from './Footer';

export default function Skills() {
  // creating an array that showcase my skills 
const skills=[
  'JavaScript',
  'React',
  'Angular',
  'Node.js',
  'MongoDB',
  'SQL',
  'RESTful APIs',
  'GraphQL',
  'Git',
  'Docker',
  'Kubernetes' ,
  'AWS',

];
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-800 py-10'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='text-left pb-8'>
        <h1 className='text-4xl text-gray-200 font-bold inline border-b-4 border-pink-600  '>
          <i style={{color:"pink"}}>Main</i>  Skills
        </h1>
        <p className='text-xl text-gray-200 py-4 '> Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center shadow-lg shadow-[#040c16]'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-gray-200 shadow-md hover:scale-105 transition-transform duration-300 p-4 rounded-md'
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </div>
);
  
}
