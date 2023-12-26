'use client';
 
 import React from "react";
 import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full text-center">
        <p  className="pb-2 p-2 text-2xl text-center underline sm:mt-10 text-[#ff6a00] text-bold lg:mt-4 md:mt-20">
    what we do</p>
    
    <h2 className="text-center font-bold mb-8"> Services</h2>
     <div className=" h-full  gap-8 ml-8 mr-8 mb-12 grid grid-cols
     md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ml-8 mr-8 gap-8" >
{/*6  grid for 6 services provided */}

<div className=" rounded-lg 
transition hover:shadow-gray-200 
shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
lg:h-80 md:h-auto sm:h-auto">
<div className="flex justify-center items-center pt-4 ">
<Image
        className=" justify-center"
        src="/cctv.png"
        alt=" "
        width={100}
        height={90}
      />
</div>
<p className="py-2 text-2xl"> CCTV Installations</p>
<p className="px-3 mb-2">welcome to our quality CCTV installation service,
  where we specialize in providing 
  state-of-the art surveillance tailored to your unique needs.
   Our technicians ensures seamless installation,offering peace of mind through vigilant monitoring.</p>
</div>

<div className=" rounded-lg 
transition hover:shadow-gray-200 
shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
lg:h-80 md:h-auto sm:h-auto">
<div className="flex justify-center items-center pt-4">
<Image
        className=" justify-center rounded-full"
        src="/solar.png"
        alt=" "
        width={100}
        height={90}
      />
</div>
<p className="py-2 text-2xl">Solar Energy</p>
<p className="px-3 mb-2">
 At Ofoet Nig Ltd, we harness the sun's limitless
 energy to power your life sustainably. Our expert team customizes solar solutions for homes and businesses,
  seamlessly integrating cutting-edge technology. Join us in the renewable energy revolution. 
 </p>
</div>
<div className=" rounded-lg 
transition hover:shadow-gray-200 
shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
lg:h-80 md:h-auto sm:h-auto">
<div className="flex justify-center items-center pt-4">
<Image
        className=" justify-center"
        src="/Elect.png"
        alt=" "
        width={100}
        height={90}
      />
</div>
<p className="py-2 text-2xl text-bold"> Electrical</p> 
<p className="px-3 mb-2">
With a commitment to excellence and a legacy of reliability,
  we bring comprehensive
 electrical services.
  Our team of skilled electricians is dedicated to providing top-notch solutions for residential, 
commercial, and industrial clients projects.</p>
</div>



<div className=" rounded-lg 
transition hover:shadow-gray-200 
shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
lg:h-80 md:h-auto sm:h-auto">
<div className="flex justify-center items-center pt-4 ">
<Image
        className=" justify-center"
        src="/automate.png"
        alt=" "
        width={100}
        height={90}
      />
</div>
<p className="py-2 text-2xl">Automation</p>
<p className="px-3 mb-2">With a team of skilled engineers and technicians,
 we bring a wealth of expertise to the field of automation. Our proficiency spans industries,
 ensuring that our clients receive solutions tailored to their unique requirements.</p>
</div>


<div className=" rounded-lg 
transition hover:shadow-gray-200 
shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
lg:h-80 md:h-auto sm:h-auto">
<div className="flex justify-center items-center pt-4 ">
<Image
        className=" justify-center rounded-lg"
        src="/training.png"
        alt=" "
        width={100}
        height={90}
      />
</div>
<p className="py-2 text-2xl">Training</p>
<p className="px-3 mb-2">

  As a leading force in the engineering industry, we are proud to extend our knowledge and experience
   through our comprehensive training programs designed to empower individuals and 
   organizations with the skills needed to thrive in a dynamic technological landscape.

</p>
</div>


<div className=" rounded-lg 
transition hover:shadow-gray-200 
shadow-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 
lg:h-80 md:h-auto sm:h-auto">
<div className="flex justify-center items-center pt-4 ">
<Image
        className=" justify-center"
        src="/gadget.png"
        alt=" "
        width={100}
        height={90}
      />
</div>
<p className="py-2 text-2xl">Gadgets </p>
<p className="px-3 mb-2">As a forefront player in the industry,
 we take pride in selling and delivering high-quality, 
 innovative solutions designed to meet the diverse needs of our customers. 
 Explore our product categories, including CCTV, 
 solar panels, batteries, and more, designed to enhance sustainability, and efficiency.</p>
</div>



      </div>
    </div>
  );
};

export default Services;