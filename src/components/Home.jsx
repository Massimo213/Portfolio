import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[#0a192f]">
        
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className=" text-pink-600 text-3xl">Hi,my name is </p>
          <h1 className="text-4xl sm:text-7xl font-extrabold text-[#ccd6f6] animated-text">
            {Array.from("Yahya Mounadi").map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#7f87a4]">
            I'm a Full-Stack Developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700]">
            I am a full-stack developer dedicated to creating outstanding
            digital experiences. With a keen eye for design and a focus on
            responsiveness, I specialize in building robust and scalable
            full-stack web applications. My passion lies in crafting intuitive
            and engaging front-end interfaces that provide exceptional user
            experiences.(and occasionally drawing ~_^).
          </p>
          <div className="mt-5">
            <button className="relative px-6 py-3 text-white text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-transparent rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-pink-400 shadow-lg hover:shadow-pink-500/50">
              <Link to="/projects">🚀 View Projects</Link>
            </button>
          </div>
          <div className="image-container hidden-on-mobile">
            <img src="./picture.jpg" alt="profile" />
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
