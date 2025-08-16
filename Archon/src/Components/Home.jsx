import React from 'react';
import About from './About'
import Values from './Values'
import Design from './Desgin'
import Projects from './Projects'
const Home = () => {
  return (
    <> 
       <div className="w-full h-screen relative bg-cover bg-center bg-no-repeat bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')] text-white">

     
      <div className="absolute inset-0 bg-black opacity-40"></div>

     
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-start md:items-center justify-between max-w-screen-xl mx-auto px-8">
        
        <div className="mt-40">
          <h1 className="text-6xl font-bold leading-tight">
            Archon+<br />Infrastructure
          </h1>
        </div>

        
        <div className="mt-40 max-w-md space-y-6">
          <p className="text-lg">
            At Archon+, we merge innovation with timeless design to create spaces that inspire and endure. Our architecture balances aesthetics, functionality, and sustainability for a better future.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black font-medium px-5 py-2.5 rounded-lg hover:bg-black hover:text-white transition">
              Get Started
            </button>
            <button className="border  text-white font-medium px-5 py-2.5 rounded-lg hover:bg-black hover:border-none hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-10 left-8 right-8 z-10 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      
        <div>
          <p className="font-semibold">Initial Inquiry</p>
          <p className="text-sm text-gray-200">
            Submit your project details, vision, and requirements through our contact form for review.
          </p>
        </div>

        
        <div className="mt-6 md:mt-0 flex gap-2">
          <div className="w-6 h-2 bg-white rounded-full"></div>
          <div className="w-4 h-2 bg-white/40 rounded-full"></div>
          <div className="w-4 h-2 bg-white/40 rounded-full"></div>
          <div className="w-4 h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>

  <About />
      <Values />
      <Design />
      <Projects /> 
    </>
  );
};

export default Home;
