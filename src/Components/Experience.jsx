import React from "react";

export default function Experience() {
  return (
    <section className="min-h-screen w-full py-12 backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/30 flex flex-col md:flex-row text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="title text-2xl text-amber-50 pb-12">
            Experience & Education
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* --- Work / Experience Column --- */}
          <article className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Work Experience</h2>

            <section className="mb-5">
              <h3 className="text-lg font-medium">Blossom</h3>
              <p className="text-sm text-slate-300">
                Front-End Developer — Remote · May 2025 - Present
              </p>
              <ol className="mt-3 list-decimal ml-5 space-y-1 text-slate-200">
                <li>
                  Built responsive pages with React and component-driven
                  architecture.
                </li>
                <li>
                  Fixed UI bugs and improved accessibility and performance.
                </li>
                <li>
                  Collaborated with backend teams using REST/GraphQL APIs.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-lg font-medium">GPS Solutions MMC</h3>
              <p className="text-sm text-slate-300">
                Operator & Customer Service — Full-time · 2023 - 2025
              </p>
              <ol className="mt-3 list-decimal ml-5 space-y-1 text-slate-200">
                <li>
                  Resolved payment issues for customers via phone and SMS.
                </li>
                <li>Routed requests quickly to the correct departments.</li>
                <li>Prepared reports on customer inquiries and trends.</li>
              </ol>
            </section>
          </article>

          {/* --- Education Column --- */}
          <article className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Education</h2>

            <section className="mb-5">
              <h3 className="text-lg font-medium">Div Academy</h3>
              <p className="text-sm text-slate-300">
                Front-End Developer · 2024 - 2025
              </p>
              <p className="mt-2 text-slate-200 text-sm">
                HTML, CSS, JavaScript, React, TypeScript, Next.js, Tailwind,
                Git, GitHub, Figma, Responsive Design, Deployment
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium">
                Baku State College of Communications and Transport
              </h3>
              <p className="text-sm text-slate-300">
                Computer Systems and Complexes · 2019 - 2022
              </p>
              <p className="mt-2 text-slate-200 text-sm">
                Office software (Word, Excel, PowerPoint), Computer hardware,
                Networking basics, Programming basics
              </p>
            </section>
          </article>

          {/* --- Volunteering Column --- */}
          <article className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Volunteering</h2>

            <section>
              <h3 className="text-lg font-medium">ASAN Service Center No. 4</h3>
              <p className="text-sm text-slate-300">
                Volunteering · 2022 - 2023
              </p>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-slate-200 text-sm">
                <li>Supported daily office tasks and client services.</li>
                <li>Improved teamwork and time-management skills.</li>
                <li>
                  Gained experience in client communication and problem-solving.
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
}
