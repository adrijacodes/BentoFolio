import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Add an icon for each education item

const educationData = [
  {
    institution: "Calcutta institue Engineering And Management(CIEM)",
    degree: "Bachelor of Science in Information Technology",
    years: "Present , Kolkata",
    
  },
  {
    institution: "Mohiary Ranibala kundu Choudhury Girl's high School",
    years: " 2021 , Howrah",
    
  },
];

const Education = () => {
  return (
    <div className="p-8 bg-BrightTeal rounded-lg shadow-lg ">
      <h1 className="text-Purple text-center font-boogaloo text-3xl mb-6">Education</h1>
      
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 relative group"
          >
            <div className="flex items-center space-x-4">
              <FaGraduationCap className="text-purple-900 text-6xl" />
              <div>
                <h2 className="text-xl font-boogaloo text-Purple">{item.institution}</h2>
                <h3 className="text-md text-gray-600 font-boogaloo">{item.degree}</h3>
                <p className="text-sm text-gray-500 font-boogaloo">{item.years}</p>
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

