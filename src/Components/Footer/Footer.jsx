import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="relative bottom-0 left-0 right-0 text-white">
      <div className="bg-mainblue flex flex-col sm:flex-row sm:justify-between">
        <div className="flex-1 py-12 text-center">
          <h1 className="font-semibold text-xl">LOCATION</h1>
          <p className="text-sm">2215 John Daniel Drive</p>
          <p className="text-sm">Clark, MO 65243</p>
        </div>
        <div className="text-center py-12 flex-1">
          <h1 className="font-semibold text-xl">AROUND THE WEB</h1>
          <div className="flex justify-center pt-5">
            <span className="m-3 p-1 text-sm border rounded-full" > <FaFacebook/></span>
            <span className="m-3 p-1 text-sm border rounded-full" > <FaTwitter/></span>
            <span className="m-3 p-1 text-sm border rounded-full" > <FaLinkedinIn/></span>
            <span className="m-3 p-1 text-sm border rounded-full" > <AiOutlineGlobal/></span>
           
            
          </div>
        </div>
        <div className="text-center py-12 flex-1">
          <h1 className="font-semibold text-xl">ABOUT FREELANCER</h1>
          <p className="text-sm">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="bg-darkblue text-center py-3">
        <p className="text-sm">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
