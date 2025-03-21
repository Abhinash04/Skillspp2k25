import React from 'react';
import logo from '../assets/images/zairzalogo.png';

function Footer() {
  return (
    <footer className="bg-white py-2 border-t border-gray-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-6 w-6" />
          <span className="text-sm font-medium text-black font-grotesk">
            Zairza Robo-Sof-Des Club's Initiative
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://www.youtube.com/@zairzarobosofdescluboutrb1825" className="text-sm font-medium text-black underline"><b>Youtube</b></a>
          <a href="https://www.instagram.com/zairza.outr/" className="text-sm font-medium text-black underline"><b>Instagram</b></a>
          <a href="https://in.linkedin.com/company/zairza" className="text-sm font-medium text-black underline"><b>LinkedIn</b></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
