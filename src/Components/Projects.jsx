import React from 'react';

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

const Projects = () => {
  return (
    <div className="p-8 bg-Slateblue shadow-xl rounded-lg">
      <h2 className="text-5xl font-boogaloo text-center text-ceramic mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative group"
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-32 object-cover rounded-t-lg"
            />

            {/* Project Title */}
            <h3 className="text-3xl font-boogaloo text-gray-800 mt-4">{project.title}</h3>
            
            {/* Project Description */}
            <p className="text-gray-600 font-boogaloo text-sm mt-2">{project.description}</p>

            {/* Overlay with Links on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="text-center">
                
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 text-white px-4 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

