import React from 'react';
import { SiGmail, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"; 
import { IoMdCall } from "react-icons/io";
import { FaGraduationCap } from 'react-icons/fa';
import { FaJsSquare, FaReact, FaHtml5, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import profileImage from '../src/Assets/profilepic.jpg';
const projectData = [
  {
    title: "Let's Chat",
    description: "A real-time chat application using MERN stack and Socket.io.",
    codeLink: "https://github.com/adrijacodes/Let-s-chat",
    image: "https://img.freepik.com/free-vector/flat-world-emoji-day-background-with-emoticons_23-2149427424.jpg?semt=ais_hybrid"
  },
  {
    title: "HandmadeHaven",
    description: "A full-featured e-commerce platform with payment integration.",
    codeLink: "https://github.com/aindrilacodes/HandmadeHaven-Artisan-Marketplace-Website",
    image: "https://img.freepik.com/premium-photo/handcrafted-global-artisan-products-featured-ecommerce-showcase_38013-108343.jpg"
  }
];
const educationData = [
  {
    institution: "Calcutta Institute of Engineering And Management (CIEM)",
    degree: "Bachelor of Science in Information Technology",
    years: "Present, Kolkata",
  },
  {
    institution: "Mohiary Ranibala Kundu Choudhury Girl's High School",
    years: "2021, Howrah",
  },
];

const App = () => {
  return (
    <div className="bg-ceramic grid gap-4 p-10 md:p-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto h-auto min-h-screen">
      
      <div className="bg-red-500 col-span-1 row-span-3 rounded-lg p-4 md:p-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-purple-950 mb-4 text-center drop-shadow-lg font-boogaloo">
          Hello There!!!
        </h2>
        <div className="relative mb-4">
          <img 
            className="h-32 w-32 md:h-44 md:w-44 rounded-full border-4 border-red-700 shadow-lg transform hover:rotate-3 transition-transform duration-300" 
            src={profileImage} 
            alt="Avatar" 
          />
        </div>
        <p className="text-yellow-50 text-center text-2xl md:text-4xl font-boogaloo">
          My name is <span className="text-BrightYellow">Adrija Gowri</span>. I'm a passionate web developer specializing in modern web technologies. I love building engaging and interactive web applications!
        </p>
      </div>

      <div className="bg-yellow-400 col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-lg p-4 md:p-6 space-y-6">
        {educationData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-4">
            <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-6">
              <FaGraduationCap className="text-purple-900 text-4xl sm:text-5xl" />
              <div>
                <h2 className="text-lg sm:text-xl font-boogaloo text-Purple">{item.institution}</h2>
                <h3 className="text-md sm:text-lg text-gray-600 font-boogaloo">{item.degree}</h3>
                <p className="text-sm sm:text-md text-gray-500 font-boogaloo">{item.years}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-pink-400 col-span-1 row-span-1 rounded-full flex flex-col items-center p-14">
        <h1 className="text-BrightYellow font-boogaloo text-4xl md:text-4xl text-center drop-shadow-lg mb-4">Resume</h1>
        <a 
          href="/Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-SodaPop text-white rounded-full font-boogaloo text-xl md:text-2xl shadow-md hover:bg-opacity-90 transition-all duration-200"
        >
          View / Download Resume
        </a>
      </div>

      
      <div className="bg-teal-400 col-span-1 row-span-1 rounded-lg p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-white text-center">
        <div className="flex flex-col items-center p-2 hover:scale-105 transform transition-transform">
          <FaJava className="text-blue-500 text-3xl animate-bounce" />
          <span className="mt-2">Java</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:scale-105 transform transition-transform">
          <FaPython className="text-blue-950 text-3xl animate-bounce" />
          <span className="mt-2">Python</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:scale-105 transform transition-transform">
          <FaJsSquare className="text-yellow-400 text-3xl animate-bounce" />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:scale-105 transform transition-transform">
          <FaReact className="text-blue-400 text-3xl animate-spin-slow" />
          <span className="mt-2">React</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:scale-105 transform transition-transform">
          <SiTailwindcss className="text-blue-300 text-3xl animate-bounce" />
          <span className="mt-2">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:scale-105 transform transition-transform">
          <FaHtml5 className="text-orange-400 text-3xl animate-pulse" />
          <span className="mt-2">HTML</span>
        </div>
      </div>

      
      <div className="bg-blue-500 col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 rounded-lg p-4">
        <h2 className="text-3xl md:text-5xl font-boogaloo text-center text-ceramic mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative group"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl md:text-3xl font-boogaloo text-gray-800 mt-4">{project.title}</h3>
              <p className="text-gray-600 font-boogaloo text-sm mt-2">{project.description}</p>
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-950 transition-colors duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-SodaPop col-span-1 row-span-1 rounded-lg p-4">
        <h2 className="text-2xl md:text-3xl font-boogaloo text-DarkNavy text-center mb-4">Connect With Me</h2>
        <div className="flex justify-around text-white text-2xl md:text-3xl">
          <a href="mailto:adrijacodes@gmail.com"><SiGmail className="hover:scale-110 transition-transform" /></a>
          <a href="https://github.com/adrijacodes"><SiGithub className="hover:scale-110 transition-transform" /></a>
          <a href="https://www.linkedin.com/in/adrija-gowri-654214254"><SiLinkedin className="hover:scale-110 transition-transform" /></a>
          <a href="tel:+919593207512"><IoMdCall className="hover:scale-110 transition-transform" /></a>
          <a href="https://www.instagram.com/adrijacodes"><SiInstagram className="hover:scale-110 transition-transform" /></a>
        </div>
      </div>
    </div>
  );
};

export default App;
