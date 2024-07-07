import React from "react";

import p1 from '../Assets/NetflixProject.png'
import p2 from'../Assets/EcomProject.png'
import p3 from '../Assets/ExpenseTracker.png'
import p4 from'../Assets/AnidoptionProject.png'
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            Here You will be able to take a look at some of my Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div  style={{backgroundImage:`url(${p1})`}}className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
{/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
Netflix Clone Application
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Demo</button>
                </a>
                <a href="https://github.com/Massimo213/Netflix-Clone">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div  style={{backgroundImage:`url(${p2})`}}className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
{/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
E-commerce Art Gallery -Uranus-
              </span>
              <div>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Demo</button>
                </a>
                <a href="https://github.com/Massimo213/Uranus-Art-Gallery-Website">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div  style={{backgroundImage:`url(${p3})`}}className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
{/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
Financial Record Application "Expensify"
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Demo</button>
                </a>
                <a href="https://github.com/Massimo213/Budget_Tracker">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div  style={{backgroundImage:`url(${p4})`}}className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
{/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
Adoption Application "Anidoption"
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Demo</button>
                </a>
                <a href='https://github.com/Massimo213/Anidoption-Full-stack-Project-'>
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white hover:shadow-lg
                       transition duration-300 ease-in-out">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
