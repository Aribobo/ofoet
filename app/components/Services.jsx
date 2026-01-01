"use client";

import React from "react";
import { TbPointFilled } from "react-icons/tb";

const Services = () => {
  return (
    // <div className="w-full bg-[#2C3E50] mt-4">
    <div className="w-full mt-4 ">
      <div id="services" className="w-full h-auto text-center">
        <div className="text-bold text-2xl text-center justify-center lg:text-4xl md:text-4xl">
          <br></br>

          <span className="text-[#27ae60]">What We Do</span>
          <p className="pb-2  mt-2 mb-2 text-2xl  text-bold ">
            {" "}
            <span className="text-[#2c3e50]">Featured Services</span>
          </p>
        </div>
        <div
          className="ml-4 mr-4 mb-12 grid grid-cols md:grid-cols-2gap-4 
        sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div
            id="air"
            className="relative group shadow-gray-600 overflow-hidden ml-2 mr-2 bg-white 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728404268/aircraft_zrolvk.jpg"
              width={100}
              height={20}
              alt="air freight"
            />
            {/* <div className="py-4 px-6 bg-[#1f4xxx25d] "> */}
            <div className="py-4 px-6 bg-white ">
              <p className=" text-start text-[#27ae60] text-2xl">
                Solar Power Solutions
              </p>
              <p className="text-start text-[#2c3e50] ">
                We design and install custom solar systems for irrigation,
                homes, offices, schools, industries, and rural electrification.
                We also upgrade outdated systems to meet modern standards. Our
                services includes:
                <br></br>
                <br></br>
              </p>

              <p className="flex text-start">
                <TbPointFilled size="20" className="text-[#27ae60]" />
                Solar system design & installation
              </p>

              <p className="flex text-start">
                <TbPointFilled size="20" className="text-[#27ae60]" />
                Off-grid and rural electrification solutions
              </p>

              <p className="flex text-start">
                <TbPointFilled size="20" className="text-[#27ae60]" />
                System upgrades & maintenance
              </p>
            </div>
          </div>
          <div
            id="ocean"
            className="relative group shadow-gray-600 overflow-hidden ml-2 mr-2 bg-white 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403934/loaded_ship_mceec6.jpg"
              width={100}
              height={20}
              alt="ocean freight"
            />
            <div className="py-4 px-6 bg-white ">
              <p className=" text-start text-[#27ae60] text-2xl">
                Renewable Energy Products
              </p>
              <p className="text-start text-[#2c3e50] ">
                Premium solar panels, inverters, batteries, and accessories for
                homes and businesses backed by warranties and expert support.
                <br></br>Our products includes:
                <br></br>
                <br></br>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Solar panels & inverters
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Batteries & charge controllers
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Solar lighting systems
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Accessories & spare parts
                </p>
              </p>
            </div>
          </div>
          <div
            id="road"
            className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 bg-white 
           transition hover:shadow
         ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403938/truck_a5hs88.jpg"
              width={100}
              height={20}
              alt="truck"
            />
            <div className="py-4 px-6 bg-white ">
              <p className=" text-start text-[#27ae60] text-2xl">
                Training & Consultancy
              </p>
              <p className="text-start text-[#2c3e50] ">
                Through the Ofoet Academy, we offer expert training in
                Electrical, CCTV, and Solar systems for individuals, businesses,
                and government bodies.
                <br></br>
                Our services include:
                <br></br>
                <br></br>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Technical workshops
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Professional certifications
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Business & project development
                </p>
              </p>
            </div>
          </div>
          <div
            id="warehouse"
            className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 bg-white 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403970/warehouse_zlju12.jpg"
              width={100}
              height={20}
              alt="ware house"
            />
            <div className="py-4 px-6 bg-white ">
              <p className=" text-start text-[#27ae60] text-2xl">
                {" "}
                CCTV Installation
              </p>
              <p className="text-start text-[#2c3e50] ">
                We install smart, scalable CCTV systems specially for homes,
                businesses, and industrial facilities ensuring 24 hours security and surveilance
                with remote access and high-definition monitoring.
                <br></br>
                Services:
                <br></br>
                <br></br>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Site assessment & system design{" "}
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Camera & DVR/NVR installation{" "}
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" /> Remote
                  Viewing setup
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />{" "}
                  Maintenance & support
                </p>
              </p>
            </div>
          </div>
          <div
            className="relative group shadow-gray-600 overflow-hidden ml-2 mr-2 bg-white 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403960/train_gnnynf.jpg"
              width={100}
              height={20}
              alt="continental rail"
            />
            <div className="py-4 px-6 bg-white ">
              <p className=" text-start text-[#27ae60] text-2xl">
                CCTV Products
              </p>
              <p className="text-start text-[#2c3e50] ">
                We have Reliable, high-performance surveillance equipment for
                residential, commercial, and industrial security fully supported
                with warranties and technical guidance.
                <br></br>
                Our CCTV products includes:
                <br></br>
                <br></br>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Indoor & outdoor Cameras{" "}
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Solar Cameras
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" /> DVRs &
                  NVRs
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" /> Smart
                  surveillance systems
                </p>
                <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />
                  Accessories & cables
                </p>
              </p>
            </div>
          </div>
          <div
            id="custom"
            className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
           transition hover:shadow 
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
            hover:text-[#2C3E50]"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728602203/harbor_nyblbq.jpg"
              width={100}
              height={20}
              alt="Drone"
            />
            <div className="py-4 px-6 bg-white ">
              <p className=" text-start text-[#27ae60] text-2xl">
               Electrical Services & Products
              </p>
              <p className="text-start text-[#2c3e50] ">
               We offer reliable electrical solutions and quality products for residential,
                commercial, and industries delivered by certified professionals.
        
                <br></br>
                Services & Products:
                <br></br>
                 <br></br>
                  <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" /> Wiring & installations</p>
                  <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />Lighting & fittings </p>
                  <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" /> Panels & breakers</p>
                  <p className="flex text-start">
                  <TbPointFilled size="20" className="text-[#27ae60]" />Repairs & maintenance </p>
  <br></br>
                     <br></br>   
                     <br></br>    
              </p>
                          
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Services;
