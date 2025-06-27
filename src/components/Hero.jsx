import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bikerImage from "../assets/images/bike.png";
import skillspp from "../assets/images/skillspp.svg"
import zairzaLogo from "../assets/images/zairzalogo.png"
import discord from "../assets/images/discord.png"
import chat from "../assets/images/chat.png"
import trophy from "../assets/images/trophy.png"
import heroImg from "../assets/images/heroImg.png"

function Hero() {

  return (
    <div className="hero-wrapper">
      <div className="hero-left-sec-wrapper wrapper">
        <div className="hero-left-top">
          <div className="text-2k25">2K25</div>
          <div className="skillpp"><img src={skillspp} alt="" /></div>
          <div className="reprogram">{'>'} Reprogram Your Limits</div>
          <div className="hero-desc">Boost your skills with guidance in various tech domains. Gain expert knowledge, hands-on experience, personalized mentoring, and earn a certification. Transform your future, <a href="">REGISTER NOW!!</a></div>
          <div className="byZairza">
            <div style={{fontStyle: "italic"}}>-by Zairza&nbsp;</div>
            <img src={zairzaLogo} alt="" />
          </div>
        </div>
        <div className="hero-left-bottom">
          <div className="blue-head">What is Skills++</div>
          <div className="topic-head">The Process</div>
          <div className="steps-wrapper">
            <div className="step">
              <img src={discord} alt="" />
              <div>Get <span>registered</span> and join your respective domain <span>discord</span> channel mentioned after registration.</div>
            </div>
            <div className="step">
              <img src={chat} alt="" />
              <div>Get one on one <span>mentorship</span> from your mentors along with <span>assignments</span> on start of each week.</div>
            </div>
            <div className="step">
              <img src={trophy} alt="" />
              <div>Earn <span>badges</span> on successful submission of assignments of first 3 weeks and a <span>certificate</span> on the 4th week.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right-sec-wrapper">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;