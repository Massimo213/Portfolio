import React from 'react';

export default function Skills() {
  const skills = [
    'JavaScript', 'React', 'Angular', 'Node.js',
    'MongoDB', 'SQL', 'RESTful APIs', 'GraphQL',
    'Git', 'Docker', 'Kubernetes', 'AWS',
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0a192f] to-[#1c2541] text-gray-200 py-10 flex items-center justify-center overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute w-32 h-32 bg-pink-500 opacity-30 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-16 h-16 bg-blue-400 opacity-30 rounded-lg bottom-20 right-20 animate-spin"></div>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full">
        
        {/* Crazy Moving Header */}
        <div className="text-left pb-8 flex flex-col items-start">
          <h1 className="text-4xl sm:text-6xl font-extrabold inline-block border-b-4 border-pink-500 relative moving-text">
            {Array.from("Main Skills").map((letter, index) => (
              <span
                key={index}
                className="inline-block transform transition-all duration-300 hover:text-pink-500 hover:scale-125 moving-letter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-300 py-4">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-gray-900 bg-opacity-40 backdrop-blur-md p-4 rounded-lg shadow-lg text-white font-semibold text-xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50 group"
            >
              <span className="relative z-10">{skill}</span>
              <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
