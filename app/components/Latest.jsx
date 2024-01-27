"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
const Latest = () => {
  return (
    <div className="w-full h-full">
      <div id="projects" className="w-full h-auto text-center bg-[#fbf9fa]">
      
        <h2 className="text-center font-bold mb-4 mt-10 lg:mt-4 md:mt-20 sm:mt-10"> Our Recent Works</h2>
        <p className="pb-2  mt-2 mb-2 text-2xl  text-[#ff6a00] text-bold ">
          {" "}
           Featured projects
        </p>
        <div className="ml-4 mr-4 mb-12 grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative group shadow-gray-600 rounded-lg overflow-hidden shadow-md ml-2 mr-2">
            <img className="w-full  rounded-lg shadow-md "
              src="/insta1.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6 roundes-sm bg-[#fbf9fa]">
              <p className=" items-center text-black text-2xl">
                1Km street light system.
              </p>
            </div>
          </div>
          <div className="relative group shadow-gray-600 rounded-lg overflow-hidden shadow-md ml-2 mr-2">
            <img
              className="w-full shadow-md   rounded-lg"
              src="/insta2.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6 roundes-sm bg-[#fbf9fa]">
              <p className=" items-center text-black text-2xl">
                5Kva solar powered system
              </p>
            </div>
          </div>
          <div className="relative group shadow-gray-600 rounded-lg overflow-hidden shadow-md ml-2 mr-2">
            <img
              className="w-full shadow-md  rounded-lg"
              src="/insta3.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6 roundes-sm bg-[#fbf9fa]">
              <p className=" items-center text-black text-2xl">
                10 Chanell HD CCTV camera systems
              </p>
            </div>
          </div>
          <div className="relative group shadow-gray-600 rounded-lg overflow-hidden shadow-md ml-2 mr-2 lg:hidden">
            <img
              className="w-full shadow-md  rounded-lg"
              src="/insta4.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6 roundes-sm bg-[#fbf9fa]">
              <p className=" items-center text-black text-2xl">
                60A 220v automatic change over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
