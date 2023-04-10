import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import img from "../../assets/hardy.png";

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
            style={{ fontWeight: 700, color: "#757575", marginRight: "42px" }}
            to="/statistics"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            Statistics
          </NavLink>
          <NavLink
            style={{ fontWeight: 700, color: "#757575", marginRight: "42px" }}
            to="appliedJobs"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            style={{ fontWeight: 700, color: "#757575" }}
            to="blog"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
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
      <Banner>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[80px] font-extrabold">
              One Step Closer To Your{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="text-[#757575] text-lg font-medium">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="text-xl font-bold text-white px-7 py-5 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF] mt-8">
              Get Started
            </button>
          </div>
          <img src={img} alt="" />
        </div>
      </Banner>
    </div>
  );
};

export default Header;
