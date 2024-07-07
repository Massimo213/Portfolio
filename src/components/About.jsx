import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-'>
            <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              About
            </h1>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl '>
              <p>Hello, I'm <i style={{ fontStyle: 'italic', color: 'pink' }}>Yahya Mounadi</i>, a seasoned <i style={{ fontStyle: 'italic', color: 'pink' }}>software developer</i> specializing in crafting robust digital solutions that bridge frontend elegance with backend resilience.</p>
            </div>
            <div> 
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
          <div className='mt-8 text-center text-lg italic py-13 '>
        Take a moment to explore around.
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;