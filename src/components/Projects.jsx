import React from "react";
import p1 from '../Assets/NetflixProject.png'
import p2 from '../Assets/EcomProject.png'
import p3 from '../Assets/ExpenseTracker.png'
import p4 from '../Assets/AnidoptionProject.png'
import p5 from '../Assets/Horizon.png'
import p6 from '../Assets/Zidou.png'
import p7 from '../Assets/Elystralogo.png'
import './Project.css'

export default function Projects() {
  const projects = [
    { image: p7, title: "Elystra AI Email Software", link: "https://github.com/Massimo213/email-app" },
    { image: p5, title: "Horizon SAAS Platform", link: "https://github.com/Massimo213/banking" },
    { image: p6, title: "Rabia : A Next-Gen Ecommerce Experience", link: "https://github.com/Massimo213/Rabia-Ecommerce.git" },
    { image: p1, title: "Netflix Clone Application", link: "https://github.com/Massimo213/Netflix-Clone" },
    { image: p2, title: "E-commerce Art Gallery - Uranus -", link: "https://github.com/Massimo213/Uranus-Art-Gallery-Website" },
    { image: p3, title: 'Financial Record Application "Expensify"', link: "https://github.com/Massimo213/Budget_Tracker" },
    { image: p4, title: 'Adoption Application "Anidoption"', link: "https://github.com/Massimo213/Anidoption-Full-stack-Project-" },
  ];

  return (
    <div className="w-full bg-[#0a192f] text-gray-300 py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-left pb-8 flex flex-col items-start">
          <h1 className="text-4xl sm:text-6xl font-extrabold inline-block border-b-4 border-pink-500 relative moving-text">
            {Array.from("Projects").map((letter, index) => (
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
            Here you will find some of my best projects showcasing my development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-pink-500/50 project-card">
              
              {/* Project Image */}
              <div 
                className="relative w-full h-[280px] bg-cover bg-center rounded-lg transition-all duration-500 hover:rotate-2 hover:shadow-lg"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md">
                  <h2 className="text-2xl font-bold text-white tracking-wide text-center">{project.title}</h2>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="mt-3 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-pink-500/50 transform transition-all duration-300 hover:scale-110">
                      View Code 🚀
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
