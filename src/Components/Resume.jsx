import React from 'react';

const Resume = () => {
  return (
    <div className="bg-SodaPop p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-blackholeburgundy font-boogaloo text-4xl text-center drop-shadow-lg mb-4">Resume</h1>
      
      {/* Link to Download Resume */}
      <div className="flex justify-center ">
        <a 
          href="/Resume.pdf" // Make sure the resume file is in the public folder and named resume.pdf
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blackholeburgundy text-white rounded-md font-boogaloo text-4xl shadow-md hover:bg-opacity-90 transition-all duration-200"
        >
          View / Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
