import React from 'react';
import logoimage from "../assets/images/skillslogo.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f2e8] border-b border-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 md:grid md:grid-cols-7">
          {/* Logo */}
          <div className="flex justify-center items-center pl-4">
            <img src={logoimage} alt="skillspp" className="h-10 w-10" />
          </div>

          {/* Hidden on Mobile */}
          <div className="hidden md:grid md:col-span-5 grid-cols-4 h-full text-black">
            <div className="flex items-center justify-center border-x border-black h-full">
              <span className="text-base font-[Unbounded] font-bold">Loading...</span>
            </div>
            <div className="flex items-center justify-center border-r border-black h-full">
              <span className="text-base font-[Unbounded] font-bold">Processing...</span>
            </div>
            <div className="flex items-center justify-center border-r border-black h-full">
              <span className="text-base font-[Unbounded] font-bold">Rebooting...</span>
            </div>
            <div className="flex items-center justify-center border-r border-black h-full">
              <span className="text-base font-[Unbounded] font-bold">Coming Soon</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center w-full md:w-auto">
            <button className="px-4 py-2 text-xs md:text-sm font-semibold bg-[#283593] text-white w-fit transition-all shadow-[4px_4px_0px_black] 
                   hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-wide font-[Unbounded]">
              TO BE HERE SOON
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
