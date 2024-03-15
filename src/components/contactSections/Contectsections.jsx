import React from "react";
import Img from "/images/image04.png";

function Contectsections() {
  return (
    <>
      <div>
        {/* Heading */}
        <div className="flex justify-between  items-center">
          <div className="text-left">
            <div className="p-10">
              <h2 className="text-bold text-2xl font-bold">
                MAKE AN &nbsp;
                <span className="text-blue-500 ">APPOINMENT</span>
              </h2>
            </div>
          </div>

          <div className="text-end ">
            <div className="p-12">
              <h2 className="text-3xl font-semibold">Consult with our</h2>
              <div className="w-full px-[30rem] border-t border"></div>
              <h2 className="text-4xl font-bold ">Doctor</h2>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="flex justify-between px-20">
          <div className="w-1/2 h-1/2">
            <img src={Img} alt="" />
          </div>
          <div>
            <form action="">
              <div className="grid grid-cols-2 gap-3">
                {/* Name  */}
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-xs font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="Full Name"
                    required
                  />
                </div>
                {/* Phone */}
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-xs font-medium text-gray-900 "
                  >
                    Phone
                  </label>
                  <div className="flex">
                    <select
                      id="countryCode"
                      name="countryCode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-l-lg  block  p-2.5 "
                    >
                      <option value="+91">+91</option>
                      <option value="+92">+92</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg  block w-full p-2.5  "
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>
                {/* DOA */}
                <div>
                  <label
                    for="DOA"
                    class="block mb-2 text-xs font-medium text-gray-900 "
                  >
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    required
                  />
                </div>
                {/* Doctor */}
                <div>
                  <label
                    for="doctor"
                    class="block mb-2 text-xs font-medium text-gray-900 "
                  >
                    Doctor
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  >
                    <option value="DrKL">Dr. Kuhu Lunawat </option>
                    <option value="DrRL">Dr. Rishu Lunawat </option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label
                    for="messgae"
                    class="block mb-2 text-xs font-medium text-gray-900 "
                  >
                    Explain Your Disease
                  </label>
                  <textarea
                    id="Message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-10  "
                    placeholder="Include a m essage..."
                    required
                  />
                </div>
              </div>
              {/* Privacy Policy */}
              <div className="py-2 flex space-x-1 items-center">
                <input type="checkbox" id="privacy_policy_agreement" />
                <label for="privacy_policy_agreement" className="text-xs">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <div className="flex justify-center items-center py-5">
                <button className="bg-blue-400 text-white py-2 px-40 rounded">
                  Appoinment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contectsections;
