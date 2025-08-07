import React from "react";

const Values = () => {
  return (
    <div className="relative bg-white py-16 px-12">
      <button className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-md shadow-sm mb-6">
        <span className="text-xl">☰</span> Our Values
      </button>

      <div className="w-full flex justify-between items-center flex-wrap gap-6">
        <p className="text-gray-600 text-lg leading-relaxed w-3xl">
          <span className="text-4xl font-bold text-black">
            Our Values, Our Foundation
          </span>
          <br />
          Our values shape every design—integrity, innovation, excellence,
          <br />
          and sustainability—creating spaces that inspire, endure, and enhance
          <br />
          lives.
        </p>

        <button className="bg-white border whitespace-nowrap border-gray-200 shadow-md text-black font-medium py-2 px-6 rounded-xl hover:bg-black hover:text-white">
          Learn More
        </button>
      </div>

      <div className="h-[35vw] w-full mt-10 overflow-hidden bg-no-repeat bg-center bg-[url('https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f5f70d97e3d4070a6c5b32_Vector.svg')]"></div>

      <div className="flex flex-wrap justify-center gap-6 py-10">
        {["Innovative", "Functionality", "Modern"].map((label) => (
          <div
            key={label}
            className="flex items-center border border-black rounded-full px-8 py-5 gap-4 w-[320px]"
          >
            <div className="border border-black rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
