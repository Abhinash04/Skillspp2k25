import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gothBaddie from "../assets/images/Baddie.png";
import RegisterNavbar from "../components/RegisterNavbar";
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";

function Profile() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = 250;
//     const duration = 4000;
//     const increment = Math.ceil(end / (duration / 50));

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(counter);
//       } else {
//         setCount(start);
//       }
//     }, 50);

//     return () => clearInterval(counter);
//   }, []);

  return (
    <main className="grid-bg h-full">
    <div className="flex-grow h-full relative overflow-hidden grid-bg flex items-center">
        <LoginNavbar/>
      <div className="flex flex-col-reverse h-full md:flex-row mx-auto mt-[100px] justify-end w-full">
    
      
      <div className="container mx-auto px-6 pt-10 relative">
        <div className="items-center">
          {/* Left Content (Slides in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left space-y-4 relative z-10 ml-6"
          >
            

            {/* Animated Counter */}
            <h1 className="text-2xl md:text-lg font-extrabold font-grotesk inline">
              <span className="text-[#313DA2] text-2xl">Welcome back soldier</span>
            </h1>

            <p className="text-5xl md:text-7xl font-bold text-black font-grotesk">
              <b>Login</b>
            </p>

            {/* Glow-Enhanced Gradient Heading */}
            <br/>

            <p className="text-sm flex text-black font-grotesk">
              <p>Haven't registered yet?</p> &nbsp; <a className="text-orange-400 underline" href="/register">Register</a>
            </p>
            <div className="w-full grid gap-y-4">
              <input placeholder="Registered email id" className="w-full focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              <input placeholder="Enter password" className="w-full focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
             </div>

             <p className="text-sm flex text-black font-grotesk">
              <p>Forgot password?</p> &nbsp; <a className="text-orange-400 underline" href="/somewhere">Click here</a>
            </p> 

            
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="bottom-0 right-0 w-full flex justify-center md:justify-end relative"
      >
        <img
          src={gothBaddie}
          alt="Cyberpunk biker on motorcycle"
          className="w-[300px] md:w-auto h-auto md:h-[500px] object-contain relative z-20 drop-shadow-[0_0_120px_rgba(255,221,51,0.99)]"
        />
      </motion.div>
      </div>
    </div>
    <div className="mt-16"></div>
    <Footer/>
    </main>
  );
}

export default Profile;