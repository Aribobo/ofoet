"use client";
import React from "react";
import Image from "next/image";

const Overview = () => {
 
  return (
    <div id="about" className="w-full bg-white">
      <div className="text-bold text-2xl text-center justify-center pt-8 lg:text-4xl md:text-4xl">
        <span className=" text-bold text-[#1a6e3d] ">Company Overview</span>
      </div>
      <div className="grid grid-cols lg:grid-cols-3">
        <div className="pix md:col-span-1 lg:col-span-2 ml-8 mr-8 mt-10 mb-10">
          <img
            className="w-full h-full shadow rounded-lg"
          src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403938/truck_a5hs88.jpg"
            // width={100}
            // height={20}
          />
        </div>
        <div className="bg-[#fbf9fa] mr-4 sm:mr-4 ml-4 lg:mt-10 mb-10 rounded-lg ">
          <h3 className="text-bold text-2xl text-[#27ae60] px-4  py-4 text-center">
          Who are we?
          </h3>
          <p className=" text-[#2c3e50] px-4">
          At Fox Continental, we don’t just deliver goods; we deliver promises.
           Founded on the principles of reliability, innovation, and exceptional service, we are a premier freight and logistics company 
          dedicated to connecting businesses and communities around the globe.
          </p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#27ae60] text-xl">Mission</span>
          </p>
          <p className=" text-[#2c3e50] px-4">
          Our mission is simple: to make shipping effortless.
           We understand that in today’s fast-paced world,
            businesses need a logistics partner they can trust to deliver on time, every time. Whether you’re shipping small packages or large freight, our goal is to streamline the process, ensuring that your products reach their destination safely and efficiently.


          </p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#27ae60] text-xl">What we do</span>
          </p>
          <p className="text-[#2c3e50] px-4">From air freight to ocean shipping,
             and everything in between, 
             we offer a comprehensive suite of services tailored to meet the diverse needs of our clients.
              Our expert team navigates the complexities of international trade, providing end-to-end logistics solutions that include: 
            Freight Forwarding,Customs Brokerage,Warehousing and Distribution and Last-Mile Delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
