import React from "react";
import bikerImage from "../assets/images/bike.png";
import logoimage from "../assets/images/skillslogo.png";
// import logo from '../assets/images/zairzalogo.png';
import zairzalogo from "../assets/images/logo.png";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

function MobileView() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f2e8]">
      {/* Top Logo */}
      <div className="p-4">
        <img src={logoimage} alt="skillspp" className="h-10 w-10" />
      </div>
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col px-4 pt-4">
        <div className="text-left space-y-3">
          <h3 className="text-sm font-medium text-black">
            <b>Congrats!</b> Seems like you cracked the code.
          </h3>

          <h1 className="text-4xl font-extrabold text-blue-700">
            250+
          </h1>
          <p className="text-sm font-medium text-black">
            Peers skilled ++ in 2024
          </p>

          <h2 className="text-3xl font-extrabold leading-tight font-[Unbounded]" style={{ 
            background: 'linear-gradient(135deg, #4052b6 0%, #cf4b4b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent' 
          }}>
            Reboot <br /> In-Progress
          </h2>
          <p className="text-sm text-black">&gt;Get ready to skill++</p>
          
          <button className="mt-4 px-4 py-2 text-sm font-semibold bg-[#283593] text-white uppercase tracking-wide">
            TO BE HERE SOON
          </button>
        </div>
        
        {/* Biker Image */}
        <div className="flex-grow flex justify-center items-end mt-4">
          <img
            src={bikerImage}
            alt="Cyberpunk biker on motorcycle"
            className="w-full max-w-xs object-contain"
          />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-3 px-4 mt-auto">
      <div className="flex justify-between items-center">
        {/* Left Section: ZAIRZA Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xs">A</span>
          <img src={zairzalogo} alt="ZAIRZA" className="h-5" />
          <span className="text-xs">Initiative Program</span>
        </div>
        <div className="flex gap-2">
          <a href="#" className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <FaYoutube className="text-black" size={14} />
          </a>
          <a href="#" className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <FaInstagram className="text-black" size={14} />
          </a>
          <a href="#" className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <FaLinkedin className="text-black" size={14} />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default MobileView;