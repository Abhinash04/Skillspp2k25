import React from "react";
import bikerImage from "../assets/images/bike.png";

function Section1() {
  return (
    <main className="flex-grow relative overflow-hidden bg-[#faf5e5] grid-bg flex items-center">
      <div className="container mx-auto px-6 pt-10 relative">
        <div className="grid md:grid-cols-2 items-center">
          <div className="text-center md:text-left space-y-4 relative z-10">
            <h3 className="text-sm md:text-xl font-medium text-black">
              <b>Congrats!</b> Seems like you cracked the code.
            </h3>

            <h1 className="text-4xl md:text-7xl font-extrabold">
              <span className="text-[#313DA2]">250+</span>
            </h1>
            <p className="text-sm md:text-lg font-bold text-black">
              <b>Peers skilled ++ in 2024</b>
            </p>

            <h2 className="text-gradient text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[96px] font-normal leading-[1.1]">
              Reboot <br /> In-Progress
            </h2>
            <p className="text-sm md:text-lg text-black">&gt; Get ready to skill++</p>
            <div className="block md:hidden mt-4">
              <button className="px-4 py-2 text-sm font-semibold bg-[#283593] text-white uppercase tracking-wide">
                TO BE HERE SOON
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 right-0 w-full flex justify-center md:justify-end">
        <div className="absolute w-[100vh] h-[100vh] md:w-[800px] md:h-[800px] bg-yellow-400 glow-effect"></div>
        <img
          src={bikerImage}
          alt="Cyberpunk biker on motorcycle"
          className="w-[300px] md:w-auto h-auto md:h-[500px] object-contain relative"
        />
      </div>
    </main>
  );
}

export default Section1;