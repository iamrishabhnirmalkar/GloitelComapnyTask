import React from "react";
import Img from "/images/image02.png";

function Whoweare() {
  return (
    <>
      <div>
        {/* Heading */}
        <div className="flex justify-between  items-center">
          <div className="text-left">
            <div className="p-1">
              <h2 className="text-semibold text-2xl font-bold">
                WHO &nbsp;
                <span className="text-blue-500">WE ARE</span>
              </h2>
            </div>
          </div>

          <div className="text-end ">
            <div className="p-12">
              <h2 className="text-3xl font-semibold">Our Glorious</h2>
              <div className="w-full px-[30rem] border-t border"></div>
              <h2 className="text-4xl font-bold ">History</h2>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="flex justify-center items-center px-3 space-x-2 ">
          <div className="px-5">
            <img src={Img} alt="" />
          </div>

          <div className=" flex  justify-center items-center">
            <div className="text-center ">
              <h3 className="text-left text-xl py-10">Our history</h3>
              <p className="text-center text-sm pb-10">
                In short, Experteeth Dental Clinic, led by Dr. Manish Agrawal,
                stands out as a premier facility for Oral and Maxillofacial
                Surgery and Implantology in the city. With a dedicated team of
                11 specialists and a focus on patient comfort, it has quickly
                become renowned for its cutting edge technology and inviting
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whoweare;
