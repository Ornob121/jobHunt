import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(126,144,254,0.1)",
        padding: "50px 200px 0px",
      }}
    >
      <div className="flex justify-between items-center pb-10">
        <div>
          <Link to="/">
            <h2 className="text-4xl font-bold ">JobHunt</h2>
          </Link>
        </div>
        <div>
          <NavLink
            style={{ fontWeight: 700, marginRight: "42px" }}
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-[#757575]"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            style={{ fontWeight: 700, marginRight: "42px" }}
            to="/appliedJobs"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-[#757575]"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            style={{ fontWeight: 700 }}
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-[#757575]"
            }
          >
            Blog
          </NavLink>
        </div>
        <div>
          <button className="text-xl font-bold text-white px-7 py-5 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">
            Start Applying
          </button>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Header;
