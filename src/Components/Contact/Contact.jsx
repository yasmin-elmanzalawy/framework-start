import React from "react";
import style from './Contact.module.css';
import { FaStar } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={`${style.test} text-mainblue px-5`}>
      <h1 className="text-4xl font-bold pt-5 text-center">
        CONTACT COMPONENT
      </h1>
      <div className="mt-5 flex items-center justify-center">
        <div className="w-24 h-1 bg-mainblue px-5"></div>
        <div className="px-3">
          <FaStar />
        </div>
        <div className="w-24 h-1 bg-mainblue px-5"></div>
      </div>
      <div>
        <form className="max-w-md mx-auto mt-10">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="userName"
              id="userName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-maincyan peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-maincyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userName
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="userAge"
              id="userAge"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-maincyan peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userAge"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-maincyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userAge
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-maincyan peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userEmail"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-maincyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             userEmail
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-maincyan peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-maincyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userPassword
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-maincyan focus:ring-4 focus:outline-none focus:ring-maincyan font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}
