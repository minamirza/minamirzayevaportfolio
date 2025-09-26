import React from "react";

function AboutMe() {
  return (
    <div>
      <div id="about" className="w-full h-[600px] flex flex-col md:flex-row items-start justify-center mt-32 p-4 gap-6">
        <div className="flex items-center flex-col">
          <h2 className="title text-2xl text-blue-50 pb-12">About Me</h2>
          <p className="max-w-3xl text-amber-50 text-center">
            I’m Mina Mirzayeva, a Front-End Developer passionate about building
            modern, responsive web applications. I work mainly with React,
            TypeScript, Next.js, and Tailwind, combining clean code with
            thoughtful UI/UX design. My background in customer service taught me
            strong communication, problem-solving, and teamwork skills, which I
            bring to every project. I enjoy learning new technologies,
            collaborating with others, and turning ideas into functional,
            user-friendly web experiences.
          </p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default AboutMe;
  