import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur-lg shadow-sm px-8">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Right side (Burger Menu) */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Burger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
            text-amber-50 rounded-lg md:hidden hover:bg-white/30 focus:outline-none 
            focus:ring-2 focus:ring-blue-300  transition-all"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all`}
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-amber-50
            rounded-lg backdrop-blur-md md:space-x-8 rtl:space-x-reverse 
            md:flex-row md:mt-0 md:border-0 md:bg-transparent transition-all"
          >
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault(); 
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  window.history.replaceState(null, "", "");
                }}
                className="relative block py-2 px-3 text-amber-50 transition-all md:p-0
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
    after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative block py-2 px-3 text-amber-50 transition-all md:p-0
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
    after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative block py-2 px-3 text-amber-50 transition-all md:p-0
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
    after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
