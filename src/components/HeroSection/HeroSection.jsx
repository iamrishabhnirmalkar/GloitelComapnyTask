import React from "react";
import Img from "/images/heroImage.png";
import { BiPhoneCall } from "react-icons/bi";
import Icon01 from "/images/icon01.png";

function HeroSection() {
  return (
    <>
      <div className="bg-primary">
        <div className="flex justify-center items-center">
          {/* Main Contain */}
          <div className="flex flex-col justify-center items-center">
            {/* Header */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold">
                We Provide High <br />
                Quality <span className="text-secondary ">Dental</span>
                &nbsp;Services
              </h1>
              <p className="text-xs text-gray-400 py-2	">
                Best Dental clinic in Raipur "we make your Smile Healthy"
              </p>
            </div>
            {/* Buttons */}
            <div className="flex justify-center items-center space-x-2 p-10">
              <div className="flex">
                <button className="bg-blue-400 text-white py-2 px-4 rounded">
                  Book Appointment
                </button>
              </div>
              <div className="flex flex-row space-x-2 p-2">
                <button className="bg-primary border border-blue-400 py-2 px-4 rounded">
                  <BiPhoneCall size={25} />
                </button>
                <div className="space-y-2">
                  <p className="text-xs text-secondary font-semibold">
                    Dental 24H Emergency
                  </p>
                  <p className="text-xs font-semibold">+91 9589671006</p>
                </div>
              </div>
            </div>
            {/* Details */}
            <div className="flex w-10 space-x-3 text-center justify-center items-center">
              <div className="flex space-y-1 flex-col justify-center items-center text-center">
                <img src={Icon01} alt="icon" className="w-full" />
                <p>1000+</p>
                <p>
                  Dental <br /> Implants
                </p>
              </div>
              <div className="flex space-y-1 flex-col justify-center items-center text-center">
                <img src={Icon01} alt="icon" className="w-full" />

                <p>2000+</p>
                <p>
                  Surgical <br /> Extractions
                </p>
              </div>
              <div className="flex space-y-1 flex-col justify-center items-center text-center">
                <img src={Icon01} alt="icon" className="w-full" />

                <p>7000+</p>
                <p>
                  Happy <br /> patients
                </p>
              </div>
              <div className="flex space-y-1 flex-col justify-center items-center text-center">
                <img src={Icon01} alt="icon" className="w-full" />

                <p>12+</p>
                <p>
                  Year <br /> Experience
                </p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className=" w-3/5 h-1/2">
            <img src={Img} alt="heroimage" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
