import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bikerImage from "../assets/images/mobilebike.png";
import logoimage from "../assets/images/skillslogo.png";
import zairzalogo from "../assets/images/logo.png";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

function MobileView() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 250;
    const duration = 4000;
    const increment = Math.ceil(end / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#f5f2e8] overflow-hidden grid-bg">
      {/* Glow Effect Behind Bike */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[90vw] h-[90vw] md:w-[500px] md:h-[500px] bg-yellow-400 glow-effect"></div>

      {/* Top Logo */}
      <div className="relative p-4 z-10">
        <img src={logoimage} alt="skillspp" className="h-8 w-8" />
      </div>

      <main className="relative flex-grow flex flex-col z-10">
        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left space-y-3 px-4"
        >
          <h3 className="text-sm font-medium text-black font-grotesk">
            <b>Congrats!</b> Seems like you cracked the code.
          </h3>

          {/* Animated Counter */}
          <h1 className="text-4xl font-extrabold text-blue-700 font-grotesk">
            {count}+
          </h1>

          <p className="text-sm font-medium text-black font-grotesk">
            Peers skilled ++ in 2024
          </p>

          {/* Glow-Enhanced Gradient Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gradient font-unbounded"
            style={{ fontFamily: "Unbounded" }}
          >
            Reboot <br /> In-Progress
          </h2>

          <p className="text-sm text-black font-grotesk">
            &gt; Get ready to skill++
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-4 py-2 text-sm font-semibold bg-[#283593] text-white uppercase tracking-wide font-unbounded width-max shadow-[4px_4px_0px_black]"
            style={{ fontFamily: "Unbounded" }}
          >
            TO BE HERE SOON
          </motion.button>
        </motion.div>

        {/* Animated Biker Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex-grow flex justify-center items-end mt-4"
        >
          <div className="absolute w-[100vw] h-[100vw] md:w-[800px] md:h-[800px] bg-yellow-400 glow-effect"></div>
          <img
            src={bikerImage}
            alt="Cyberpunk biker on motorcycle"
            className="w-full max-w-lg object-contain relative z-20 m-0"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative bg-white py-3 px-4 mt-auto z-10 mb-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          {/* Footer Content */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-grotesk">A</span>
            <img src={zairzalogo} alt="ZAIRZA" className="h-5" />
            <span className="text-xs font-grotesk">Initiative Program</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-2">
            <a
              href="https://www.youtube.com/@zairzarobosofdescluboutrb1825"
              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaYoutube className="text-black" size={14} />
            </a>
            <a
              href="https://www.instagram.com/zairza.outr/"
              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaInstagram className="text-black" size={14} />
            </a>
            <a
              href="https://in.linkedin.com/company/zairza"
              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaLinkedin className="text-black" size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MobileView;