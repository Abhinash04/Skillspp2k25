import React from "react";
import bikerImage from "../assets/images/mobilebike.png";
import logoimage from "../assets/images/skillslogo.png";
import zairzalogo from "../assets/images/logo.png";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

function MobileView() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#f5f2e8] overflow-hidden grid-bg">
      {/* Glow Effect Behind Bike */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[90vw] h-[90vw] md:w-[500px] md:h-[500px] bg-yellow-400 glow-effect"></div>

      {/* Top Logo */}
      <div className="relative p-4 z-10">
        <img src={logoimage} alt="skillspp" className="h-10 w-10" />
      </div>

      <main className="relative flex-grow flex flex-col px-4 pt-4 z-10">
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

          {/* Glow-Enhanced Gradient Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-[Unbounded] text-gradient">
            Reboot <br /> In-Progress
          </h2>

          <p className="text-sm text-black">&gt; Get ready to skill++</p>

          <button className="mt-4 px-4 py-2 text-sm font-semibold bg-[#283593] text-white uppercase tracking-wide">
            TO BE HERE SOON
          </button>
        </div>

        {/* Biker Image with Glow */}
        <div className="relative flex-grow flex justify-center items-end mt-4">
          <img
            src={bikerImage}
            alt="Cyberpunk biker on motorcycle"
            className="w-full max-w-lg object-contain relative z-20"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-white py-3 px-4 mt-auto z-10">
        <div className="flex justify-between items-center">
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
