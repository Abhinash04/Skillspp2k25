import React from 'react';
import logo from '../assets/images/zairzalogo.png';

function Footer() {
  return (
    <footer className="bg-white py-7 border-t border-gray-300">
      <div className="contacts-wrapper container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="contacts-head">
          For Queries Reach Out To:
        </div>
        <div className="contacts">
          <div className="senior">Shashank: <span>90786 33785</span></div>
          <div className="senior">Arbin: <span>82988 65794</span></div>
          <div className="senior">Bivraj: <span>77518 73289</span></div>
        </div>
      </div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-sm font-medium text-white font-grotesk ">
            A event organised by Zairza for the welfare of budding talented software engineers, hardware engineers and designers
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://www.youtube.com/@zairzarobosofdescluboutrb1825" className="text-lg font-inter font-bold text-white underline"><b>Youtube</b></a>
          <a href="https://www.instagram.com/zairza.outr/" className="text-lg font-inter font-bold text-white underline"><b>Instagram</b></a>
          <a href="https://in.linkedin.com/company/zairza" className="text-lg font-inter font-bold text-white underline"><b>LinkedIn</b></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
