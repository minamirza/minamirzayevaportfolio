import React from "react";

function Onepage() {
  return (
    <div className="w-full h-[600px] bg-white/5 backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/30 flex flex-col md:flex-row items-center justify-around p-12 mt-12 gap-6">
      <div className="min-w-auto">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-blue-50">
            Mina Mirzayeva
          </h1>
          <h2 className="text-lg text-blue-50">Front-End Developer</h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-blue-50">
            Computer and tech enthusiast with a background in customer service
            and strong communication skills. Currently focused on Front-End
            Development, building modern web apps using React and Javascript / TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Onepage;
