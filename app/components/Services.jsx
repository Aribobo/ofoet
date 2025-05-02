"use client";

import React from "react";

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
          <div id="air"
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
              <p className=" text-start text-[#27ae60] text-2xl">Air Freight</p>
              <p className="text-start text-[#2c3e50] ">
              In today’s fast-paced marketplace, time is money.
               Our air freight solutions guarantee rapid delivery, often within 24 to 48 hours, 
              making it ideal for urgent shipments.
             
              </p>
            </div>
          </div>
          <div id="ocean"
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
              <p className=" text-start text-[#27ae60] text-2xl">Ocean Freight</p>
              <p className="text-start text-[#2c3e50] ">
              With access to major shipping routes and ports worldwide,
               we ensure your cargo reaches its destination, no matter where it is.
                
              </p>
            </div>
          </div>
          <div id="road" 
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
              <p className=" text-start text-[#27ae60] text-2xl">Road Freight</p>
              <p className="text-start text-[#2c3e50] ">
              From small parcels to full truckloads, we handle shipments of all sizes,
               adapting to your specific logistics needs.
              </p>
            </div>
          </div>
          <div  id="warehouse"
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
              <p className=" text-start text-[#27ae60] text-2xl">Warehousing</p>
              <p className="text-start text-[#2c3e50] ">
              Whether you need short-term storage for seasonal inventory or long-term warehousing,
               we offer customizable options to fit your business needs.
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
              <p className=" text-start text-[#27ae60] text-2xl">Continental Rail</p>
              <p className="text-start text-[#2c3e50] ">
              Our rail services connect major cities and industrial hubs,
              ensuring your shipments reach their destinations across continents seamlessly.
              </p>
            </div>
          </div>
          <div id="custom"
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
              <p className=" text-start text-[#27ae60] text-2xl">Customs Brokerage</p>
              <p className="text-start text-[#2c3e50] ">
              We streamline the customs process, reducing delays and expediting the 
              clearance of your goods so they can reach their
             destination without unnecessary holdups.
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
