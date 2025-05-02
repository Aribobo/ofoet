"use client";

import React from "react";
import Image from "next/image";
const Latest = () => {
  return (
    <div className="w-full h-full">
      <div id="projects" className="w-full h-auto text-center bg-[#fbf9fa]">
      
        <h2 className="text-center font-bold mb-4 mt-10 lg:mt-4 md:mt-20 sm:mt-10 text-[#27ae60]"> Our Recent Works</h2>
        <p className="pb-2  mt-2 mb-2 text-2xl  text-[#2c3e50] text-bold ">
          {" "}
           Featured projects
        </p>
        <div className="ml-4 mr-4 mb-12 grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative group shadow-gray-500  overflow-hidden  ml-2 mr-2 bg-white">
            <img className="w-full "
              src="/insta1.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6  bg-white">
              <p className=" items-center text-[#2c3e50] text-2xl">
                1Km street light system.
              </p>
            </div>
          </div>
          <div className="relative group shadow-gray-500  overflow-hidden  ml-2 mr-2 bg-white">
            <img
              className="w-full"
              src="/insta2.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6  bg-white">
              <p className=" items-center text-[#2c3e50] text-2xl">
                5Kva solar powered system
              </p>
            </div>
          </div>
          <div className="relative group  overflow-hidden  ml-2 mr-2">
            <img
              className="w-full "
              src="/insta3.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6  bg-white">
              <p className=" items-center text-[#2c3e50] text-2xl">
                10 Chanell HD CCTV camera systems
              </p>
            </div>
          </div>
          <div className="relative group shadow-gray-500  overflow-hidden  ml-2 mr-2 lg:hidden bg-white">
            <img
              className="w-full "
              src="/insta4.jpg"
              // width={100}
              // height={20}
            />
            <div className="p-6  bg-white">
              <p className="items-center text-[#2c3e50] text-2xl">
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
