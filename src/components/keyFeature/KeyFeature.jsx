import React from "react";
import Card from "./card";

function KeyFeature() {
  return (
    <>
      <div>
        {/* Heading */}
        <div className="flex justify-between  items-center">
          <div className="text-left">
            <div className="p-1">
              <h2 className="text-semibold text-3xl font-bold">
                KEY
                <span className="text-blue-500">FEATURE</span>
              </h2>
            </div>
          </div>

          <div className="text-end ">
            <div className="p-12">
              <h2 className="text-3xl font-semibold">What Makes Us More</h2>
              <div className="w-full px-[30rem] border-t border"></div>
              <h2 className="text-4xl font-bold ">Special</h2>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="p-5">
          <div className="grid grid-cols-3 gap-8 px-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyFeature;
