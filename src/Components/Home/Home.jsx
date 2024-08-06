import React from "react";
import avatar from "../../assets/avataaars.svg";
import { FaStar } from "react-icons/fa";

import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={`${style.test} bg-maincyan text-white `}>
      <div className="max-w-80 m-auto py-5">
        <img className="w-100" src={avatar} alt="" />
        <h1 className="text-3xl font-bold mt-3 text-center ">
          START FRAMEWORK
        </h1>
        <div className="mt-5 flex items-center justify-center">
          <div className="w-1/3 h-1 bg-white px-5"></div>

          <div className="px-3">
            <FaStar />
          </div>
          <div className="w-1/3 h-1 bg-white px-5"></div>
        </div>
        <p className="text-center mt-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
