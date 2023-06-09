import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowFeaturedJobs from "./ShowFeaturedJobs/ShowFeaturedJobs";
import "../../assets/FeaturedJobs.css";

const FeaturedJobs = () => {
  let featuredJobs = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  if (!featuredJobs) {
    return window.location.reload();
  }

  if (!showAll) {
    featuredJobs = featuredJobs.slice(0, 4);
  }
  const handleSeeAllJobs = () => {
    setShowAll(!showAll);
  };
  return (
    <div
      style={{
        padding: "0px 200px 0",
      }}
      className="mt-32 featured-job-div"
    >
      <h2 className="text-5xl text-center font-extrabold featured-job-text">
        Featured Jobs
      </h2>
      <p className="text-[#757575] text-center font-normal pt-4 pb-8 featured-job-p">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2  gap-6">
        {featuredJobs.map((job) => (
          <ShowFeaturedJobs key={job._id} job={job}></ShowFeaturedJobs>
        ))}
      </div>
      <div className="text-center">
        {" "}
        <button
          className={`text-xl font-bold text-white px-7 py-5 rounded-lg mt-10 mb-32 ${
            showAll
              ? "bg-gradient-to-l from-[#e35f5f] to-[red]"
              : " bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
          }`}
          onClick={handleSeeAllJobs}
        >
          {showAll ? "See Less" : "See All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
