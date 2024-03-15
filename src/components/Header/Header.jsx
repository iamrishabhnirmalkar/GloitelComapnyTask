import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const Navlinks = [
    {
      to: "/",
      Text: "Home",
    },
    {
      to: "/about",
      Text: "About Us",
    },
    {
      to: "/ourteam",
      Text: "Our Team",
    },
    {
      to: "/career",
      Text: "Career",
    },
    {
      to: "/community",
      Text: "Community",
    },
    {
      to: "/contact",
      Text: "Contact Us",
    },
  ];
  return (
    <>
      <div className="bg-primary p-5 flex justify-end space-x-4 items-center">
        <ul className="flex justify-end items-center space-x-4">
          {Navlinks.map((link, index) => (
            <li
              key={index}
              className={`font-medium ${
                link.Text === "Home" ? "text-blue-500" : "text-gray-600"
              }`}
            >
              <Link to={link.to}>{link.Text}</Link>
            </li>
          ))}
        </ul>

        <button className="bg-blue-400 text-white py-2 px-4 rounded">
          Appoinment
        </button>
      </div>
    </>
  );
}

export default Header;
