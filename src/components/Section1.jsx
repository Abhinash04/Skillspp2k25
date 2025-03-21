import React, { useEffect, useState } from "react";
import bikerImage from "../assets/images/bike.png";

function Section1() {
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
    <main className="flex-grow relative overflow-hidden bg-[#faf5e5] grid-bg flex items-center">
      <div className="container mx-auto px-6 pt-10 relative">
        <div className="grid md:grid-cols-2 items-center">
          <div className="text-center md:text-left space-y-4 relative z-10">
            <h3 className="text-sm md:text-xl font-medium text-black font-grotesk">
              <b>Congrats!</b> Seems like you cracked the code.
            </h3>

            {/* Animated Counter */}
            <h1 className="text-4xl md:text-7xl font-extrabold font-grotesk inline">
              <span className="text-[#313DA2] text-5xl">{count}+</span>
            </h1>

            <p className="text-sm md:text-lg font-bold text-black font-grotesk">
              <b>Peers skilled ++ in 2024</b>
            </p>

            {/* Glow-Enhanced Gradient Heading */}
            <h2 className="text-gradient text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[70px] font-normal leading-[1.1] font-unbounded">
              Reboot <br /> In-Progress
            </h2>

            <p className="text-sm md:text-lg text-black font-grotesk">&gt; Get ready to skill++</p>

            <div className="block md:hidden mt-4">
              <button className="px-4 py-2 text-sm font-semibold bg-[#283593] text-white uppercase tracking-wide">
                TO BE HERE SOON
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect Behind Bike */}
      <div className="absolute bottom-0 right-0 w-full flex justify-center md:justify-end">
        <div className="absolute w-[100vw] h-[100vw] md:w-[800px] md:h-[800px] bg-yellow-400 glow-effect"></div>
        <img
          src={bikerImage}
          alt="Cyberpunk biker on motorcycle"
          className="w-[300px] md:w-auto h-auto md:h-[500px] object-contain relative z-20"
        />
      </div>
    </main>
  );
}

export default Section1;
