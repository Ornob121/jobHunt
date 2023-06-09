import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();

  const [appliedAllJob, setAppliedAllJob] = useState(appliedJobs);

  const handleRemoteJobs = () => {
    const remoteJobs = appliedJobs.filter((aj) => aj.jobType === "Remote");
    setAppliedAllJob(remoteJobs);
  };
  const handleOnsiteJobs = () => {
    const onsiteJobs = appliedJobs.filter((aj) => aj.jobType === "Onsite");
    setAppliedAllJob(onsiteJobs);
  };
  const handleAllJobs = () => {
    setAppliedAllJob(appliedJobs);
  };

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
      <div className="mt-36 mb-8 text-right px-[200px]">
        <button
          onClick={handleRemoteJobs}
          className="text-xl font-bold text-white mr-8 px-5 py-3 mt-6 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
        >
          Remote
        </button>
        <button
          onClick={handleOnsiteJobs}
          className="text-xl font-bold text-white mr-8 px-5 py-3 mt-6 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
        >
          Onsite
        </button>
        <button
          onClick={handleAllJobs}
          className="text-xl font-bold text-white px-5 py-3 mt-6 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
        >
          Show All
        </button>
      </div>
      <div>
        {appliedAllJob.map((applied) => (
          <ShowAppliedJobs key={applied._id} jobs={applied}></ShowAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
