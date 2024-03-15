import React from "react";

function Banner() {
  return (
    <>
      <div className="bg-secondary text-white px-12 py-5">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl pb-10 ">
            Let Us Brighten{" "}
            <span className="font-semibold text-3xl">Your Smile!</span>
          </p>
          <p className="px-32 text-xs pb-5">
            Helping patients achieve good dental health & beautiful smile is a
            privilege & responsibility. For over 12 years, we proudly provided
            the best dental experience in Raipur. Our comfort first approach is
            designed to meet the needs of you & your entire family
          </p>
          <button className="border py-2 px-4 rounded">
            Make An Appointment
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
