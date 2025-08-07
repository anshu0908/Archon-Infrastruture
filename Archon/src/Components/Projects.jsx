import React from "react";
import ProjectCard from "./ProjectCard";
import { LayoutGrid } from "lucide-react";



const Projects = () => {
  const projectData = [
    {
      category: "Architecture",
      date: "April 11, 2025",
      title: "Harmony Pavilion",
      description:
        "A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity.",
      image: "https://images.unsplash.com/photo-1753186566992-4b609276c4db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    
  ];

  return (
    <>
      <div className="w-full px-6 md:px-12 py-16 bg-white">
      <div className="flex justify-between items-start flex-wrap gap-4">
        
        <div className="max-w-3xl">
          
          <button className="flex items-center gap-2 text-gray-700 text-sm px-4 py-2 rounded-md shadow-sm mb-4">
           <LayoutGrid size={16} />   Favourite Project
          </button>

          
          <h2 className="text-4xl font-bold text-black mb-4">
            Some of Our Favourite Projects
          </h2>

          
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover a collection of our favorite projects, showcasing
            innovative design, sustainability, functionality, and architectural
            excellence in every detail.
          </p>
        </div>

       
        <div className="mt-2 md:mt-0">
          <button className="bg-white border border-gray-200 text-black font-medium py-2 px-6 rounded-xl shadow-sm hover:bg-black hover:text-white transition">
            Check Project
          </button>
        </div>
      </div>
    </div>
          
      <div className="h-screen bg-white py-12 px-6 flex flex-wrap justify-center gap-6">
      {projectData.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
</>
);
};

export default Projects;
