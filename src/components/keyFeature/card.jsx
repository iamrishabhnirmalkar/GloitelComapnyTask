import React from "react";
import { TbDental } from "react-icons/tb";

function card() {
  return (
    <>
      <div className="border bg-slate-300 rounded border-gray-200 p-8">
        <div className="flex flex-col justify-center items-center space-y-5 ">
          <TbDental size={30} />
          <h3>Laser Technology</h3>
          <p>
            Worlds most advanced Diode Laser. Your treatment experience will be
            relaxing & smooth.
          </p>
        </div>
      </div>
    </>
  );
}

export default card;
