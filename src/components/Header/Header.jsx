import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className="header-div"
      style={{
        backgroundColor: "rgba(126,144,254,0.1)",
        padding: "50px 200px 0px",
      }}
    >
      <div className="flex justify-between items-center pb-10">
        <div onClick={handleIsMenuOpen} className="md:hidden">
          <span>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </span>
        </div>

        <div>
          <Link to="/">
            <h2 className="md:text-4xl absolute md:static mx-auto top-2 text-2xl font-bold ">
              JobHunt
            </h2>
          </Link>
        </div>
        <div>
          <ul
            className={`md:flex md:static absolute ${
              isMenuOpen ? "-top-24 left-4" : "top-8 left-4 bg-yellow-300 p-4"
            } duration-500`}
          >
            <li>
              <NavLink
                style={{ fontWeight: 700, marginRight: "42px" }}
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-[#757575]"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ fontWeight: 700, marginRight: "42px" }}
                to="/appliedJobs"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-[#757575]"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ fontWeight: 700 }}
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-[#757575]"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="md:text-xl text-[12px] font-bold text-white md:px-7 md:mt-0 mt-2 md:py-5 px-3 py-2 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">
            Start Applying
          </button>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Header;
