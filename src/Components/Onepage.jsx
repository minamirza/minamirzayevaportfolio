import React from "react";

export default function Onepage() {
  return (
    <div className="w-full h-[600px] backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/30 flex flex-col md:flex-row items-center justify-around p-4 gap-6">
      <div className="min-w-auto">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-blue-50">
          Mina Mirzayeva
        </h1>
        <p className="text-lg text-blue-50">Front-End Developer</p>
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg text-blue-50">
          Computer and tech enthusiast with a background in customer service and
          strong communication skills. Currently focused on Front-End
          Development, building modern web apps using React and TypeScript.
        </p>
      </div>
      </div>
    </div>
  );
}
