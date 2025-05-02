// pages/about.js
import React from "react";
import Image from "next/image";

const About = () => {
 
  return (
    <div id="about" className="w-full bg-white">
      <div className="text-bold text-2xl text-center justify-center pt-8 lg:text-4xl md:text-4xl">
        <span className=" text-bold text-[#27ae60] ">About Us</span>
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
          Welcome to Ofoet Nig Ltd, where innovation meets excellence! 
          As a leading provider of comprehensive solutions in CCTV installation, solar energy, electrical services, and more,
           we take pride in transforming the way you experience security,
            energy efficiency, and electrical systems.
          </p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#27ae60] text-xl">Our Values</span>
          </p>
          <p className=" text-[#2c3e50] px-4">
          We thrive on innovation and continuously
           embrace the latest technologies in CCTV, solar energy, 
           and electrical services. Our commitment to quality ensures that our solutions are not only cutting-edge but also reliable, durable, and built to deliver lasting value. We also extend our knowledge and experience through our training programs designed to empower interested individuals.


          </p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#27ae60] text-xl">Get in touch</span>
          </p>
          <p className="text-[#2c3e50] px-4">Experience the difference with Ofoet Nig Ltd.
             Whether you are looking to enhance your security,
              go solar, or upgrade your electrical systems, we have the expertise to turn your vision into reality.
          Contact us today, and let's embark on a journey toward a safer, greener, and more connected future together.
<br></br>
<span className="text-[#27ae60]">ofoetnigltd@gmail.com</span>
<br></br>
<span className="text-[#27ae60]">+2348032807393</span>
</p>
        </div>
      </div>
    </div>
  );
};

export default About;
