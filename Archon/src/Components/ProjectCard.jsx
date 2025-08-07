import React from "react";

const ProjectCard = ({ category, date, title, description, image }) => {
  return (
    <div style={{backgroundImage: `url(${image})`
    }}  className="rounded-xl shadow-xl w-full p-6 backdrop-blur-md bg-opacity-80">
     <div className="bg-white p-4 rounded-lg max-w-md">
      <div className="flex justify-between items-center mb-4  text-gray-500 text-sm">
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
          <span className="text-xs">🏛️</span>
          <span>{category}</span>
        </div>
        <span>{date}</span>
      </div>

      <div className="overflow-hidden rounded-md mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>

      <button className="mt-4 px-4 py-2 bg-gray-100 text-sm rounded-lg font-medium hover:bg-gray-200 transition">
        Check Project
      </button>
      </div>
    </div>
  );
};

export default ProjectCard;
