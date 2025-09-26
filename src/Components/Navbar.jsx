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
            md:flex-row md:mt-0 md:border-0 md:bg-transparent transition-all items-center"
          >
            <svg
              class="w-4 h-4 me-2 text-amber-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("about");
                  if (element) {
                    const yOffset = -100; // Navbar hündürlüyünə uyğun dəyiş
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                  window.history.replaceState(null, "", "");
                }}
                className="relative block py-2 px-3 text-amber-50 transition-all md:p-0 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-50 after:transition-all hover:after:w-full"
              >
                About Me
              </a>
            </li>

            <svg
              class="w-4 h-4 me-2 text-amber-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>
            <li>
              <a
                href="#"
                className="relative block py-2 px-3 text-amber-50 transition-all md:p-0 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-50 after:transition-all hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <svg
              class="w-4 h-4 me-2 text-amber-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
              <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
            </svg>
            <li>
              <a
                href="#"
                className="relative block py-2 px-3 text-amber-50 transition-all md:p-0 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-50 after:transition-all hover:after:w-full"
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
