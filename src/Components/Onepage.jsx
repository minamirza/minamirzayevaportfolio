import React from "react";

export default function Onepage() {
  return (
    <div className="w-full h-[600px] backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/30 flex md:flex-row items-center justify-around">
      <div className="w-xl flex flex-col gap-4 md:w-1/2">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-blue-50 w-3 justify-start">
          Mina Mirzayeva
        </h1>
       <p className="w-full md:w-[400px] lg:w-[500px] text-lg text-blue-50">
          Front-End Developer
        </p>
      </div>
      <div>
        <p className="w-[500px] text-lg text-blue-50">
          Computer and tech enthusiast with a background in customer service and
          strong communication skills. Currently focused on Front-End
          Development, building modern web apps using React and TypeScript.
        </p>
      </div>
    </div>
  );
}
