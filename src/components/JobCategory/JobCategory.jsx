import React, { useEffect, useState } from "react";
import ShowJobCategory from "../ShowJobCategory/ShowJobCategory";
import "./JobCategory.css";

const JobCategory = () => {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  if (!jobs) {
    return;
  }
  return (
    <div
      className="job-category-div"
      style={{
        padding: "0px 200px 0",
      }}
    >
      <h2 className="text-5xl text-center font-extrabold job-category-text">
        Job Category List
      </h2>
      <p className="text-[#757575] text-center font-normal pt-4 pb-8 job-category-p">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-between gap-6 job-category-item">
        {jobs.map((job) => (
          <ShowJobCategory key={job._id} job={job}></ShowJobCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
