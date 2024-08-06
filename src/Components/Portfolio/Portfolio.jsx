import React, { useState } from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import style from "./Portfolio.module.css";
import pic1 from "../../assets/poert1.png";
import pic2 from "../../assets/port2.png";
import pic3 from "../../assets/port3.png";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Prevent click event from bubbling up when clicking on the modal image
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`${style.test} text-mainblue`}>
      <h1 className="text-4xl font-bold pt-5 text-center">PORTFOLIO COMPONENT</h1>
      <div className="mt-5 flex items-center justify-center">
        <div className="w-24 h-1 bg-mainblue px-5"></div>
        <div className="px-3">
          <FaStar />
        </div>
        <div className="w-24 h-1 bg-mainblue px-5"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-24">
        {[pic1, pic2, pic3, pic1, pic2, pic3].map((pic, index) => (
          <div className="p-3" key={index}>
            <div className="relative rounded-lg overflow-hidden">
              <img className="" src={pic} alt={`pic${index}`} />
              <div className="absolute top-0 opacity-0 hover:opacity-95 transition duration-300 bg-maincyan left-0 right-0 bottom-0">
                <div
                  onClick={() => openModal(pic)}
                  className="flex items-center justify-center w-full h-full text-5xl text-white"
                >
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed z-40 flex items-center top-0 left-0 right-0 bottom-0 bg-mainblue400"
        >
          <div
            className="md:w-2/5 w-3/5 m-auto"
            onClick={handleImageClick} // Prevent click event from closing modal
          >
            <img className="w-full opacity-100" src={modalImage} alt="modal" />
          </div>
        </div>
      )}
    </div>
  );
}
