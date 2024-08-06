import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div>
        <div className="relative flex justify-between bg-mainblue text-white font-semibold text-xl items-center">
          <div className="z-40 px-12 bg-mainblue w-full py-8 h-full">
            <Link to="framework-start/">
              <h1>START FRAMEWORK</h1>
            </Link>
          </div>
          <div
            className={`absolute top-20 left-0 right-0 bg-mainblue text-white transition-transform duration-300 ${
              isOpen ? "translate-y-0 z-10" : "-translate-y-96 z-10"
            } sm:relative sm:top-0 sm:translate-y-0 sm:z-auto`}
          >
            <ul className="text-sm pt-5 md:pt-0 px-12 font-semibold text-left sm:bg-mainblue sm:flex sm:flex-row">
              <li className="py-3 px-2">
                <Link to="framework-start/About" onClick={closeMenu}>ABOUT</Link>
              </li>
              <li className="py-3 px-2">
                <Link to="framework-start/Portfolio" onClick={closeMenu}>PORTFOLIO</Link>
              </li>
              <li className="py-3 px-2">
                <Link to="framework-start/Contact" onClick={closeMenu}>CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="z-40 sm:hidden cursor-pointer inline-block px-12">
            <IoMenu onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
