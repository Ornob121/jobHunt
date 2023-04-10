import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  console.log(appliedJobs);

  if (appliedJobs.length === 0 || !appliedJobs) {
    return (
      <div>
        <Banner>
          <h2
            style={{ backgroundColor: "rgba(126,144,254,0.1)" }}
            className="text-center pt-[101px] pb-36 text-5xl font-extrabold"
          >
            Applied Jobs
          </h2>
        </Banner>
        <h2 className="text-center mt-16 mb-32">None Applied</h2>
      </div>
    );
  }
  return (
    <div>
      <Banner>
        <h2
          style={{ backgroundColor: "rgba(126,144,254,0.1)" }}
          className="text-center pt-[101px] pb-36 text-5xl font-extrabold"
        >
          Applied Jobs
        </h2>
      </Banner>

      <div>
        {appliedJobs.map((applied) => (
          <ShowAppliedJobs key={applied._id} jobs={applied}></ShowAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
