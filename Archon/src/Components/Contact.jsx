import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Contact = () => {
  
  return (
    <div className="bg-neutral-900">

    <div className="min-h-screen border-white  text-white p-10 flex flex-col lg:flex-row justify-between gap-10">
      
      {/* Left section */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold mb-4">
          <span className="text-white">Archon</span>
          <span className="text-white ml-2">+</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Soundify speakers deliver exceptional sound quality with sleek, modern designs.
          Engineered for clarity, durability, and effortless connectivity, they provide
          an immersive listening experience for any setting.
        </p>

        <div>
          <h3 className="text-white font-semibold mb-2">Social Media</h3>
          <div className="flex gap-4 text-2xl">
            <Instagram className="hover:text-blue-400 cursor-pointer" />
            <Facebook className="hover:text-blue-400 cursor-pointer" />
            <Linkedin className="hover:text-blue-400 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Youtube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right section (form) */}
      <div className="bg-neutral-800 p-8 rounded-xl w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Get a Free Quote</h2>
        <p className="text-gray-400 mb-6">
          We're excited to connect with you! Fill out the form below, and let's embark
          on the journey of turning your vision into a reality.
        </p>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-1/2 px-4 py-2 rounded bg-neutral-700 text-white placeholder-gray-400"
              />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-1/2 px-4 py-2 rounded bg-neutral-700 text-white placeholder-gray-400"
              />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-1/2 px-4 py-2 rounded bg-neutral-700 text-white placeholder-gray-400"
              />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/2 px-4 py-2 rounded bg-neutral-700 text-white placeholder-gray-400"
              />
          </div>

          <select className="w-full px-4 py-2 rounded bg-neutral-700 text-white">
            <option>Select one...</option>
            <option>Audio Installation</option>
            <option>Smart Home</option>
            <option>Event Setup</option>
          </select>

          <textarea
            placeholder="Enter note"
            className="w-full px-4 py-2 rounded bg-neutral-700 text-white placeholder-gray-400"
            ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg font-medium hover:opacity-60 transition"
            >
            Send
          </button>
        </form>
      </div>
    </div>
    <div className="border-t-1 text-white border-white p-4">
      <h2>Archon+ Ltd © 2024. All Rights Reserved</h2>
    </div>
   </div>
  );
};

export default Contact;
