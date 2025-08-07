import React from 'react';

const Design = () => {
  return (
    <div>
    <div className="flex items-center justify-end pt-10 border-t-10 pr-25  px-6 bg-white">
      <div className="max-w-2xl text-left">
        <button className="mb-4 px-4 py-2 rounded-full bg-white shadow text-sm font-medium border border-gray-300 hover:bg-gray-100">
          ▦ Design for you
        </button>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Elevating Spaces, Transforming Experiences
        </h1>

        <p className="text-gray-600 mb-4">
          At Archon+, we craft visionary architecture that seamlessly blends <br />
          form and function. Every project is thoughtfully designed to enrich <br />
           lives, enhance communities, and stand the test of time with lasting  <br />
          impact.
        </p>

        <p className="text-gray-600 mb-8">
          Through thoughtful planning and cutting-edge technology, we shape <br />
          environments that inspire, connect, and evolve with the <br />
          needs of the future.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-800 hover:shadow-2xl transition">
          Start for free
        </button>
      </div>
      <div className=" h-full w-full ">
        <img src="https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f5ec0e5445282e7599f819_image_arsitecture-p-2000.png" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Design;
