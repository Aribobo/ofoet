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
            Ofoet as a company is more than just a service provider, we are
            innovators, problem solvers and trusted partners in powering,
            protecting, and connecting your world.
            <br></br>
             Specializing in Solar energy
            solutions, CCTV installations, and comprehensive Electrical
            services, we are committed to delivering smart, efficient, and
            sustainable systems that meet the evolving needs of homes, schools,
            businesses, and industries.
          </p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#27ae60] text-xl">Mission</span>
          </p>
          <p className=" text-[#2c3e50] px-4">
            Our mission is simple: to empower individuals, homes, schools, industries and businesses
            with sustainable energy, advanced security, and reliable electrical
            solutions.
            <br></br> 
            We are committed to delivering innovative, efficient, and
            affordable technologies that enhance everyday living while promoting
            safety, sustainability, and long term value.
            <br></br>
           Through integrity,
            quality workmanship, and customer focused service, we aim to be a
            trusted name in solar energy,CCTV security, and electrical services in 
            every community we serve.
          </p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#27ae60] text-xl">What we do</span>
          </p>
          <p className="text-[#2c3e50] px-4">
            At Ofoet, we provide cutting edge solutions that powers, protects, and
            connects. Our services are designed to meet the modern day needs of
            homes, businesses,schools and industrial spaces with a focus on solar energy, CCTV security, and electrical solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
