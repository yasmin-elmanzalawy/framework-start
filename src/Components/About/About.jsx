import React from "react";
import { FaStar } from "react-icons/fa";
import style from "./About.module.css"

export default function About() {
  return (
    <div className={`py-24 ${style.test} bg-maincyan`}>
      <div className="text-white">
        <h1 className="text-4xl font-bold pt-3 text-center ">
        ABOUT COMPONENT
        </h1>
        <div className="mt-5 flex items-center justify-center">
          <div className="w-24 h-1 bg-white px-5"></div>

          <div className="px-3">
            <FaStar />
          </div>
          <div className="w-24 h-1 bg-white px-5"></div>
        </div>
        <div className="flex flex-col sm:flex-row px-20 pt-5">
          <div className="pt-5">
            <p className="p-5 text-xl">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div>
           <p className="p-5 text-xl">
           Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
}
