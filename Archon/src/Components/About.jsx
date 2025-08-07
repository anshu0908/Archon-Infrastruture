import React from 'react';
import {
  Landmark,
  Building2,
  Building,
  Home,
} from 'lucide-react';

const AboutUs = () => {
  const icons = [Landmark, Building2, Building, Home];

  return (
    <section className="bg-[#111111] text-white font-medium relative overflow-hidden">
      <div className="container mx-auto px-2 py-32">
        
        <div className="flex justify-start">
          <button className="bg-zinc-800 hover:bg-zinc-700 transition text-white text-sm px-5 py-2 rounded-md">
            About Us
          </button>
        </div>

        
        <div className="mt-12 ">
          <p className="text-3xl font-normal leading-tight whitespace-nowrap mb-10">
            <span className="text-white">
              For years, architecture has been stuck in the past. <br />
            </span>
            <span className="text-gray-400"> It's time to redefine the future.</span>
          </p>

            <div className='flex gap-10 whitespace-nowrap  '>
          <div className="space-y-8 mt-8 text-gray-400 text-3xl  flex flex-col whitespace-nowrap leading-relaxed">
            <p>
              At Archon+, we don't just design buildings— <br />
              we craft experiences. Our innovative,human- <br />
              centered approach blends aesthetics,  <br />
              sustainability, and functionality to shape <br />
              spaces that inspire and endure.
            </p>
             <p>
              Design without limits. Cities without <br />
              compromise. Welcome to the future of <br />
              architecture.
            </p>
          </div>
           <div className='flex justify-between items-center  pt-50'>
            <div className=" text-gray-400  flex flex-col gap-10">
              <p className='text-xl'>  At Archon+, we merge innovation with timeless design to create spaces <br />
                that inspire and endure. Our architecture balances aesthetics, <br />
                functionality, and sustainability for a better future. <br />
             </p>
             <p className='text-xl'>
                With a passion for pushing boundaries, we embrace cutting-edge <br />
                technology and visionary thinking. Every project we design transforms <br />
                 the way people live, work, and connect.
             </p>
             </div>
           </div>
            </div>
        </div>

        
        <div className="flex gap-6 mt-12">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              <Icon className="text-black w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default AboutUs;
