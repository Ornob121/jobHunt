import React, { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../Banner/Banner";
import { useLoaderData, useParams } from "react-router-dom";
import img from "../../assets/hardy.png";

const Home = () => {
  return (
    <div>
      <Banner>
        <div
          style={{
            backgroundColor: "rgba(126,144,254,0.1)",
            padding: "0 200px",
          }}
          className="flex justify-between mb-32"
        >
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
      </Banner>{" "}
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
