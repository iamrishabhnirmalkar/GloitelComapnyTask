import React from "react";

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
          <div>Left</div>
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
                    for="email"
                    class="block mb-2 text-xs font-medium text-gray-900 "
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="7509255990"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contectsections;
