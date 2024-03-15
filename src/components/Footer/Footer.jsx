import React from "react";
import logo from "/images/Logo.png";
import Iso from "/images/Iso.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-tertiary py-9 px-2 flex">
        {/* Company Footer */}
        <div className="flex flex-col text-white justify-center ">
          <img src={logo} alt="Logo" className="w-full h-1/2" />
          <p className="py-3">Say hello to us</p>
          <p className="py-2">hello@example.com</p>
          <p className="py-2">+91 9589671006</p>
        </div>
        {/* Verical Line */}
        <div className="w-1 bg-gray-400"></div>
        {/* Time and Address */}
        <div className="flex flex-col text-white justify-center px-4">
          <p className="text-xs">We are welcoming you</p>
          <p className="text-xl font-bold py-10">Want to visit our clinic?</p>
          <div className="">
            <ul className="flex space-x-4">
              <li>MON - SAT</li>
              <li>08 am- 09 pm</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex space-x-8">
              <li>SUNDAY </li>
              <li>08 am- 05 pm</li>
            </ul>
          </div>

          <p className="text-xs py-2">
            Besides Chhattisgarh College, 1st Floor Nimani Building Near Holy
            Hearts School, Civil Lines Raipur (C.G.)
          </p>
        </div>
        {/* Verical Line */}
        <div className="w-1 bg-gray-400"></div>
        {/* Our Service */}
        <div className="flex flex-col text-white justify-center px-4">
          <p className="text-xs py-5">Our Services</p>
          <p className="text-xl font-bold py-10">Want we Provide </p>
          <p className="text-xs py-5">
            Cosmetic Restorative Dentistry Dental Implants Gum Disease Treatment
            Oral Maxillofacial Surgery
          </p>
        </div>
        {/* Iso */}
        <div className="flex flex-col text-white justify-center ">
          <div className="flex justify-end items-center  w-full h-full">
            <img src={Iso} alt="iso certified" className=" w-1/2 h-1/2" />
          </div>
          <p className="text-sm">
            Pediatric Dental Care Prosthetic Rehabilitation Root Canal Treatment
            (RCT) Ceramic Braces
          </p>
        </div>
        {/* Verical Line */}
        <div className="w-1 bg-gray-400"></div>
        {/* Importants Links */}
        <div className="flex flex-col text-white justify-center px-4 pr-12">
          <p className="text-xs py-10">Important link</p>

          <ul className=" space-y-2">
            <li className="text-xs">
              <Link to="/career">Career</Link>
            </li>
            <li className="text-xs">
              <Link to="/community">Community</Link>
            </li>
            <li className="text-xs">
              <Link to="/privacypolicy">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
