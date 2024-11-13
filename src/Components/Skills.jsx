import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiUipath } from 'react-icons/si';

function Skills() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-800 to-pink-700 shadow-xl rounded-lg hover:scale-105 transform transition-transform duration-300">
      <h2 className="text-6xl font-boogaloo text-yellow-300 mb-6 text-center drop-shadow-lg ">
        Skills
      </h2>
      <ul className="space-y-4 text-lg text-white text-center ">

      <li className="flex items-center justify-center gap-2">
          <FaJava className="text-blue-300  text-2xl animate-bounce" />
          <span>Java</span>
        </li>

        <li className="flex items-center justify-center gap-2">
          <FaPython className="text-blue-950 animate-bounce" />
          <span>Python</span>
        </li>
        
        
        
        <li className="flex items-center justify-center gap-2">
          <FaJsSquare className="text-yellow-400 animate-bounce" />
          <span>JavaScript</span>
        </li>
        
        
        <li className="flex items-center justify-center gap-2">
          <FaReact className="text-blue-400 animate-spin-slow" />
          <span>React</span>
        </li>
        
        
        <li className="flex items-center justify-center gap-2">
          <FaNodeJs className="text-green-400 animate-pulse" />
          <span>Node.js</span>
        </li>
        
        <li className="flex items-center justify-center gap-2">
          <FaHtml5 className="text-orange-400 animate-pulse" />
          <span>HTML</span>
        </li>
        
        <li className="flex items-center justify-center gap-2">
          <SiTailwindcss className="text-blue-300 animate-bounce" />
          <span>Tailwind CSS</span>
        </li>
        
    
        
        <li className="flex items-center justify-center gap-2">
          <SiUipath className="text-blue-400 text-4xl animate-bounce" />
          <span>UiPath</span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;

