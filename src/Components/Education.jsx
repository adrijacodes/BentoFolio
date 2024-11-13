import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Add an icon for each education item

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

const Education = () => {
  return (
    <div className="p-8 bg-BrightTeal rounded-lg shadow-lg">
      <h1 className="text-Purple text-center font-boogaloo text-3xl sm:text-4xl md:text-5xl mb-6">Education</h1>
      
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 relative group"
          >
            <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-6">
              <FaGraduationCap className="text-purple-900 text-5xl sm:text-6xl" />
              <div>
                <h2 className="text-xl sm:text-2xl font-boogaloo text-Purple">{item.institution}</h2>
                <h3 className="text-md sm:text-lg text-gray-600 font-boogaloo">{item.degree}</h3>
                <p className="text-sm sm:text-md text-gray-500 font-boogaloo">{item.years}</p>
              </div>
            </div>
            
            {/* Description shown only on hover */}
            <p className="text-gray-600 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
