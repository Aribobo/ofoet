import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      {" "}
      <div
        className="bg-[#272727]  shadow-xl
        shadow-gray-400 rounded-xl"
      >
        <div
          id="footer"
          className=" w-full grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 
          justify-center items-center p-20  "
        >
          <div className="p-2 text-white">
            <ul>
              <Link href="/#home">
                <p className=" flex  font-bold text-3xl pb-6 justify-center items-center text-white">
                  Ofo<span className="text-[#fd7e14]">et</span>
                </p>
              </Link>
              <div className="flex gap-6 pb-5 justify-center items-center">
              <a href="https://www.facebook.com/profile.php?id=100063884890800">               
                <FaFacebook className=" flex text-3xl cursor-pointer hover:text-blue-700" />
                </a>
                <a href="mailto:ofoetnigltd@gmail.com">
                  <AiOutlineMail className=" flex text-3xl cursor-pointer hover:text-[#ff6a00] " />
                </a>
                <a href=" https://wa.me/+2348032807393">
                  <FaWhatsapp className=" flex text-3xl cursor-pointer hover:text-green-700" />
                </a>
                <a href="tel:+2348032807393">
                  <FiPhoneCall className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
                </a>
              </div>
            </ul>
          </div>
          <div className="p-2 flex justify-center items-center text-white">
            <ul>
              <p className=" flex justify-center items-center font-bold text-2xl pb-4 text-[#ff6a00]">
                SERVICES
              </p>
              <Link href="#">
                <li
                  className="flex justify-center items-center text-xl pb-2 font-semibold
						 hover:text-[#ff6a00] cursor-pointer"
                >
                  CCTV Installation
                </li>
              </Link>
              <Link href="#">
                <li className=" flex justify-center items-center text-xl pb-2 font-semibold 
                hover:text-[#ff6a00] cursor-pointer">
                  Solar Energy
                </li>
              </Link>

              <Link href="#">
                <li className="  flex justify-center items-center text-xl pb-2 font-semibold 
                hover:text-[#ff6a00] cursor-pointer">
                  Electrical
                </li>
              </Link>

              <Link href="#">
                <li className=" flex justify-center items-center text-xl pb-2 font-semibold 
                hover:text-[#ff6a00] cursor-pointer">
                  Automation
                </li>
              </Link>
              <Link href="#">
                <li className=" flex justify-center items-center text-xl pb-2 font-semibold
                 hover:text-[#ff6a00] cursor-pointer">
                  Training
                </li>
              </Link>
            </ul>
          </div>
          <div className="p-2 flex justify-center items-center text-white">
            <ul>
              <p className=" flex justify-center items-center font-bold text-2xl pb-4 text-[#ff6a00]">
                COMPANY
              </p>
              <Link href="/About">
                <li
                  className="flex justify-center items-center
						  hover:text-[#ff6a00] cursor-pointer text-xl  font-semibold py-2  pt-2"
                >
                  About
                </li>
              </Link>

              <Link href="#">
                <li className="flex justify-center items-center hover:text-[#ff6a00]
                 cursor-pointer text-xl  font-semibold py-2  pt-2">
                  Help
                </li>
              </Link>
            </ul>
          </div>
          
          <div className="p-2 flex justify-center items-center text-white">
            <ul>
              <p className=" flex justify-center items-center font-bold text-2xl pb-6 text-[#ff6a00]">
                CONTACT
              </p>
              <li className=" flex justify-center items-center  text-xl  font-semibold py-2 flex ">
                +2348032807393
              </li>
              <li className=" flex justify-center items-center text-center  text-xl  font-semibold py-2 flex ">
              Onuiyi Junction,Nsukka
              </li>
              <li className="flex justify-center items-center  text-xl  font-semibold py-2 ">
              ofoetnigltd@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center text-white p-5 bg-[#272727]">
          <h5 className="  font-semibold">
            © 2023 Ofo<span className="text-[#ff6a00]">et</span> || All
            rights reserved
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;