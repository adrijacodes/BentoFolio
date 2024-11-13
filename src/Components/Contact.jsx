import React from 'react';
import { SiGmail, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"; // Import LinkedIn icon
import { IoMdCall } from "react-icons/io";

function Contact() {
  return (
    <div className="p-8 bg-purple-950 shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-300">
      <h2 className="text-5xl font-boogaloo text-pink-400 mb-4 text-center">Contact Me</h2>
      
      <div className="space-y-4 text-yellow-50 text-2xl text-center">
        <p className="flex items-center justify-center gap-2 font-boogaloo">
          <SiGmail className="text-pink-400" />
          <span>Email: taniagori.001@gmail.com</span>
        </p>
        <p className="flex items-center justify-center gap-2 font-boogaloo">
          <IoMdCall className="text-green-400" />
          <span>Phone: +91 7980410273</span>
        </p>
        
        <div className="mt-6 space-x-6 flex justify-center ">
          <a href="https://github.com/adrijacodes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <SiGithub size={30} />
          </a>
          <a href="https://www.instagram.com/blueytani/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 transition-colors">
            <SiInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/adrija-gowri-654214254" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
            <SiLinkedin size={30} />
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-3xl font-boogaloo text-BrightYellow">
          Let’s connect and create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Contact;


