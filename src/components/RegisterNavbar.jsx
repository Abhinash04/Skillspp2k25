import React, { useEffect, useState } from 'react';
import logoimage from "../assets/images/skillslogo.png";
import { useNavigate } from "react-router-dom";

function RegisterNavbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        `fixed left-1/2 top-0 z-50 transition-all duration-300 ` +
        (scrolled
          ? 'transform -translate-x-1/2 mt-4 w-[90vw] max-w-4xl rounded-sm shadow-lg border border-black backdrop-blur-md bg-white/60'
          : 'transform -translate-x-1/2 w-full border-b border-black bg-transparent')
      }
      style={{
        ...(scrolled
          ? { WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }
          : {}),
      }}
    >
      <div className="container mx-auto bg-transparent">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16 px-4' : 'h-16 md:px-4'}` + ' bg-transparent'}>
          {/* Logo */}
          <div className="flex justify-center items-center md:mr-4">
            <img src={logoimage} alt="skillspp" className="h-8 w-8" />
          </div>

          {/* Hidden on Mobile */}
          <div className="hidden sm:flex md:col-span-5 w-fit h-full text-black flex-row">
            <div className="flex items-center justify-center w-fit px-4 py-3 border-l border-black h-full">
              <span className="text-base font-[Unbounded] font-medium ">The Process</span>
            </div>
            <div className="flex items-center justify-center w-fit px-4 py-3 border-l border-black h-full">
              <span className="text-base font-[Unbounded] font-medium">Timeline</span>
            </div>
            <div className="flex items-center justify-center w-fit px-4 py-3 border-l border-black h-full">
              <span className="text-base font-[Unbounded] font-medium">The Perks</span>
            </div>
            <div className="flex items-center justify-center w-fit px-4 py-3 border-l border-r border-black h-full">
              <span className="text-base font-[Unbounded] font-medium">Explore Domains</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center w-max">
            <button
              className="ml-4 px-4 py-2 text-xs md:text-sm font-semibold bg-[#283593] text-white w-fit transition-all shadow-[4px_4px_0px_black] 
                   hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-wide font-[Unbounded]"
              onClick={() => navigate("/logins")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RegisterNavbar;
