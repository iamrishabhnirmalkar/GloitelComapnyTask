import React from "react";
import Img from "/images/image.png";

function YourEmergency() {
  return (
    <>
      <div>
        {/* Heading */}
        <div className="flex justify-between  items-center">
          <div className="text-left">
            <div className="p-4">
              <h2 className="text-base font-bold">
                Ensuring peace of mind and <br />
                <span className="text-3xl">timely treatment.</span>
              </h2>
            </div>
          </div>
          <div className="text-end ">
            <div className="p-12">
              <h2 className="text-2xl font-bold">Your Emergency</h2>
              <div className="w-full px-[26rem] border-t border"></div>
              <h2 className="text-2xl font-bold text-blue-500">
                Dental Partner
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center px-20 py-10 space-x-5 ">
          {/* Image */}

          <div className="relative w-1/2 h-1/2">
            <img src={Img} alt="Your Image" className="rounded w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-500">
              <p className=" text-center text-white px-4 py-2">
                Open for Emergency cases
              </p>
            </div>
          </div>
          {/* Image */}

          <div className="relative w-1/2 h-1/2">
            <img src={Img} alt="Your Image" className="rounded w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-500">
              <p className=" text-center text-white px-4 py-2">
                Open for Emergency cases
              </p>
            </div>
          </div>
          {/* Image */}

          <div className="relative w-1/2 h-1/2">
            <img src={Img} alt="Your Image" className="rounded w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-500">
              <p className=" text-center text-white px-4 py-2">
                Open for Emergency cases
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center px-20 py-10 space-x-5 ">
          {/* Image */}

          <div className="relative w-1/2 h-1/2">
            <img src={Img} alt="Your Image" className="rounded w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-500">
              <p className=" text-center text-white px-4 py-2">
                Open for Emergency cases
              </p>
            </div>
          </div>
          {/* Image */}

          <div className="relative w-1/2 h-1/2">
            <img src={Img} alt="Your Image" className="rounded w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-500">
              <p className=" text-center text-white px-4 py-2">
                Open for Emergency cases
              </p>
            </div>
          </div>
          {/* Image */}

          <div className="relative w-1/2 h-1/2">
            <img src={Img} alt="Your Image" className="rounded w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-500">
              <p className=" text-center text-white px-4 py-2">
                Open for Emergency cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourEmergency;
