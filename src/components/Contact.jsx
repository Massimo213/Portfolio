import React from 'react'
import "./Contact.css"



const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form 
        method="POST" 
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" 
        className="flex flex-col max-w-[600px] w-full bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-xl border border-gray-700"
      >
        {/* Header */}
        <div className="pb-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold inline-block border-b-4 border-pink-500 relative moving-text">
            {Array.from("Contact").map((letter, index) => (
              <span
                key={index}
                className="inline-block transform transition-all duration-300 hover:text-pink-500 hover:scale-125 moving-letter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-gray-300 py-4 text-lg">
          Thank you for your interest in getting in touch!

            <a href="mailto:yahyastartwell@gmail.com" className="text-pink-500 hover:underline"> yahyastartwell@gmail.com</a>
          </p>
        </div>

        {/* Input Fields */}
        <input 
          className="bg-transparent border border-gray-500 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          type="text" 
          placeholder="Name" 
          name="name" 
          required
        />
        
        <input 
          className="my-4 p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          type="email" 
          placeholder="Email" 
          name="email" 
          required
        />
        
        <textarea 
          className="bg-transparent border border-gray-500 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          name="message" 
          rows="6" 
          placeholder="Message"
          required
        ></textarea>

        {/* Submit Button */}
        <button className="mt-6 text-white bg-pink-600 border border-transparent px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-110 hover:shadow-pink-500/50 duration-300">
          🚀 Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
