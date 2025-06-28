import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import alienImage from "../assets/images/alienImg.png";
import { FaRegistered } from "react-icons/fa";
import RegisterNavbar from "../components/RegisterNavbar";
import Footer from "../components/Footer";
function Register() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let start = 0;
  //   const end = 250;
  //   const duration = 4000;
  //   const increment = Math.ceil(end / (duration / 50));

  //   const counter = setInterval(() => {
  //     start += increment;
  //     if (start >= end) {
  //       setCount(end);
  //       clearInterval(counter);
  //     } else {
  //       setCount(start);
  //     }
  //   }, 50);

  //   return () => clearInterval(counter);
  // }, []);

  return (
    <>
    
    <main className="flex-grow relative overflow-hidden grid-bg flex items-center">
      <RegisterNavbar/>
      <div id="top" className="flex mx-auto mt-[100px] justify-end w-full">

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left space-y-4 w-full z-10 md:ml-6 md:w-1/2"
          >
            

            {/* Animated Counter */}
            <h1 className=" font-extrabold font-grotesk inline">
              <span className="text-[#313DA2] md:text-lg text-2xl">Join the sprint</span>
            </h1>

            <p className="text-5xl md:text-5xl font-bold text-black font-grotesk">
              <b>Register</b>
            </p>

            <br></br>
            
            <p className="text-sm flex text-black font-grotesk">
              <p>Already have registered?</p> &nbsp; <a className="text-orange-400 underline" href="/logins">Log in</a>
            </p>
            
            <div className="w-full grid gap-y-4">
              <input placeholder="Full Name" className="w-full focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              
              <div className="grid md:grid-cols-2 gap-4">
                
              <input placeholder="Email" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              <input placeholder="Password" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3 "/>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                
              <input placeholder="Registration Number" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              <input placeholder="Phone Number" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3 "/>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                
              <input placeholder="Branch" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              <input placeholder="Year" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3 "/>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                
              <input placeholder="First Domain" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              <input placeholder="Second Domain" className="focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3 "/>

              </div>
              <p> **At max, you can register for 2 domains. In case you want to enrol for only one domain then fill none in the second domain. And write 'N/A' in the Drive Link( for Second Domain ) mentioned below </p>

              <input placeholder="Drive Link ( for First Domain )" className="w-full focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>
              <input placeholder="Drive Link ( for Second Domain )" className="w-full focus:outline focus:outline-black bg-amber-50 border border-black h-10 pl-3"/>

              <p> **Create a folder in your google drive and share the link here. This is the place where you will submit your solutions for the given task. So keep this drive safely with you</p>
              <br />
              <div className="flex gap-4 justify-end">

              <button className=" border border-black w-fit flex items-center p-4 hover:cursor-pointer"> <IoMdArrowBack /> Back</button>
              <button className="bg-white border border-black w-fit flex items-center p-4 hover:cursor-pointer">  Create Account <IoArrowForward /> </button>
              </div>
              
            </div>


            

            {/* <div className="block md:hidden mt-4">
              <button className="px-4 py-2 text-sm font-semibold bg-[#283593] text-white uppercase tracking-wide">
                TO BE HERE SOON
              </button>
            </div> */}
          </motion.div>
          {/* Image + Glow */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full z-10" style={{background: 'radial-gradient(circle, rgba(255,221,51,0.9) 0%, rgba(255,255,255,0) 95%)'}}></div>
              <img
                src={alienImage}
                alt="Cyberpunk biker on motorcycle"
                className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] object-contain relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}

export default Register;