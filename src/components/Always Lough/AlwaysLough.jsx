import React from "react";
import Img from "/images/image03.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function AlwaysLough() {
  const Listdata = [
    "Check ups",
    "Cosmetic Restorative Dentistry",
    "Dental Implants",
    " Gum Disease Treatment",
  ];
  const Listdata02 = [
    "  Oral Maxillofacial Surgery",
    "Pediatric Dental Care",
    "Prosthetic Rehabilitation",
    " Root Canal Treatment (RCT)",
  ];

  return (
    <>
      <div>
        {/* Headeing */}
        <div className="p-10 flex justify-between">
          <h3 className="text-3xl font-semibold px-10">
            Always <span className="text-blue-500 font-bold">Lough</span> <br />{" "}
            Whenever Its Possible
          </h3>
          <h3 className="text-start text-sm">
            We also offer treatments that improve the appearance of <br /> your
            smile giving you the confidence boost you deserve. <br /> The
            process or our treatment below
          </h3>
        </div>
        {/* conatinet */}
        <div className="flex justify-between items-center">
          <div className="w-1/2 h-1/2 ">
            <img src={Img} alt="heading image" className="w-full h-full" />
          </div>
          <div className="flex-1">
            <h4 className="uppercase font-semibold pb-6">What We Provide</h4>
            <ul className=" space-y-2">
              {Listdata.map((item, index) => (
                <li key={index} className="flex items-center">
                  <IoShieldCheckmarkOutline size={20} className="mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <ul className=" space-y-2">
              {Listdata02.map((item, index) => (
                <li key={index} className="flex items-center">
                  <IoShieldCheckmarkOutline size={20} className="mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlwaysLough;
