// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-black/60">
    <div className="grid grid-cols lg:grid-cols-3">
<div className="pix md:col-span-1 lg:col-span-2 ml-10 mr-10 mt-20 mb-10">
<img className="w-full shadow   rounded-lg"
src="/insta2.jpg"
// width={100}
// height={20}
/>
</div>
<div className=" mr-10 sm:mr-10 ml-10 lg:mt-20 mb-10">
    <h3 className='text-bold text-xl text-[#ff6a00] '>Who are we?</h3>
    <p className='pb-4 text-white'>
Welcome to Ofoet Nig Ltd, where innovation meets excellence! 
As a leading provider of comprehensive solutions in CCTV installation, solar energy, electrical services, and more, we take pride in transforming the way you experience security, 
energy efficiency, and electrical systems.
</p>

<h3 className='text-bold text-xl text-[#ff6a00] '>Our Values</h3>
<p className='pb-4 text-white'>
We thrive on innovation and continuously embrace the latest technologies in CCTV,
 solar energy, and electrical services.
 Our commitment to quality ensures that our solutions are not only cutting-edge but also reliable,
 durable, and built to deliver lasting value.
 We also extend our knowledge and experience
 through our training programs designed to empower interested individuals.

</p>


<h3 className='text-bold text-xl text-[#ff6a00] '>Get in Touch</h3>
<p className='pb-4 text-white'>
Experience the difference with Ofoet Nig Ltd.
 Whether you are looking to enhance your security, go solar, or upgrade your electrical systems, 
 we have the expertise to turn your vision into reality. Contact us today,
and let's embark on a journey toward a safer, greener,
 and more connected future together.
</p>
<p className='text-xl text-bold text-[#ff6a00]'>ofoetnigltd@gmail.com</p>
<p className='text-xl  text-bold text-[#ff6a00] sm:pb-10 '>+2348032807393</p>

</div>
       </div>
    </div>
  );
};

export default About;
