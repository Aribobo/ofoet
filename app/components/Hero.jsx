 'use client';
 
 import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import {MdLocationOn } from "react-icons/md"; 
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home" className="w-full text-center lg:h-screen md:h-screen sm:h-screen">
      
      
      <div className="max-w-[2560px] w-full h-96 mx-auto p-2 flex justify-center items-center bg-cover
       lg-center relative sm:h-4/5">
      
      {/* image on automatic slide with wiper js */}
      <img
          src="/hero4.jpg"
          className="absolute object-cover w-full h-full lg:hidden"
          alt=""
          height={750}
          width={1600}
        />
         <img
          src="/hero4.jpg"
          className="absolute object-fit w-full h-full "
          alt=""
          height={750}
          width={1600}
        />
       


        <div className="absolute w-full text-start text-white sm:mb-16">
        <div className="ml-10 lg:ml-20 mb-8 mt-20 sm:pt-20 xl:mt-10 ">
          <p className="text-2xl lg:4xl text bold ">
          Provides Effective
          <br></br> 
           Tech Solutions!
          </p>
          </div>
          <div className="ml-10 lg:ml-20 ">
            <p className="text-md lg:text-xl w-auto">
A leading developer of A-grade commercial, industrial and recidential Technology in Nigeria
  <br></br> 
  where innovation meets reliability in the realm of technology.
   we specialize in cutting-edge services that redefine the way you experience security,
    sustainability, and efficiency.
            </p>

          </div>
    
          <div className="ml-10 lg:ml-20 ">
            <div className="flex gap-4 ">

            <Link href="/#services">  <button className="px-4  py-2 mt-4 bg-[#ff6a00] text-white font-bold ">Our services</button>
            </Link>
              <Link href="/About"> <button className="px-4 py-2 mt-4 bg-white text-black font-bold">About Us!
              </button>
              </Link>
            </div>
          </div>
        
         
      </div>

      </div>

      
   
      <div className="w-full h-64 bg-[#fbf9fa] flex lg:h-40">
        {/* for medium and large devices start here */}
      <div className=" hidden sm:flex gap-4  ml-4 lg:ml-20 w-full">
       
      <p className="py-16 sm:py-12">  <a href="mailto:iphounditonline@gmail.com">
              <AiOutlineMail  size={30} className=" flex text-3xl cursor-pointer text-[#fd7e14] hover:text-[#ff6a00]" />
            </a> </p>
           
        <p className="py-8 text-sm text-start lg:text-xl md:text-2xl"> 
       <span className="text-bold text-[#ff6a00]"> Quick Contact</span>
        <br></br>
        Email:ofoetnigltd@gmail.com
        <br></br>
         Phone:08032807393
        </p>
     
        </div>
         <div className="hidden sm:flex gap-4  ml-10 lg:ml-20 w-full">
         <p className="py-16 sm:py-12">  <a href="mailto:ofoetnigltd@gmail.com">
               <MdLocationOn size={30} className=" flex text-3xl cursor-pointer text-[#fd7e14] hover:text-[#fd7e14]" />
            </a> </p>
           
        <p className="py-8 text-sm text-start text-bold lg:text-xl md:text-2xl"> 
       <span className="text-bold text-[#ff6a00] "> Our Location</span>
        <br></br>
        Onuiyi Junction,
        <br></br>Nsukka,Enugu State
      
        </p>
        {/* end here */}
        </div>
        {/* the div below is for small devices */}
        <div className="grid grid-cols mt-4 md:hidden sm:hidden
         lg:hidden ">
  <div className="ml-4 flex text-start items-start ">
          <p className="py-12 px-2">  <a href="mailto:ofoetnigltd@gmail.com">
              <AiOutlineMail  size={30} className="flex text-3xl cursor-pointer text-[#fd7e14] hover:text-[#ff6a00]" />
            </a> </p>
           
        <p className="py-8 text-md text-start  "> 
       <span className="text-bold text-xl text-[#ff6a00]"> Quick Contact</span>
        <br></br>
        Email:ofoetnigltd@gmail.com
        <br></br>
         Phone:08032807393
        </p>
            </div>
          <div className="ml-4 flex text-end items-end justify-end">
          <p className="py-12 px-2">  
               <MdLocationOn size={30} className=" flex text-3xl cursor-pointer text-[#fd7e14] hover:text-[#fd7e14]" />
             </p>
           
        <p className="py-8 text-md text-start "> 
       <span className="text-bold text-[#ff6a00] text-xl "> Our Location</span>
        <br></br>
        Onuiyi Junction,Nsukka,Enugu State
        <br></br> Nigeria
      
        </p>
          </div>
          </div>
      </div>
      
    </div>
  );
};

export default Hero;
