import React from 'react';

function About() {
  return (
    <div className="p-8 bg-NeonPink shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-5xl font-semibold text-purple-950 mb-4 text-center drop-shadow-lg font-boogaloo">
        Hello There!!!
      </h2>

      <div className="flex flex-col items-center">
       
        <div className="relative mb-4">
          <img 
            className="h-44 w-44 rounded-full border-4 border-red-700 shadow-lg transform hover:rotate-3 transition-transform duration-300" 
            src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" 
            alt="Avatar" 
          />
          
          
        </div>
        
        <p className="text-yellow-50 text-center text-4xl font-boogaloo">
           My name is <span className=" text-BrightYellow">Adrija Gowri</span>. 
          I'm a passionate web developer specializing in modern web technologies. I love building engaging and interactive web applications!
        </p>
      </div>
    </div>
  );
}

export default About;
