import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ShowAppliedJobs = ({ jobs }) => {
  const navigate = useNavigate();
  const {
    company,
    jobHour,
    jobName,
    jobType,
    littleAddress,
    picture,
    salary,
    _id,
  } = jobs;
  return (
    <div className="px-[200px] mb-8">
      <div className=" p-8 border border-[#E8E8E8] rounded-lg flex items-center">
        <div className="py-24 px-12 mr-8 bg-[#F4F4F4]">
          <img className="w-[145px] h-[50px] mb-8" src={picture} alt="" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-extrabold pb-2">{jobName}</h3>
          <p className="text-xl font-medium text-[#757575] pb-4">{company}</p>
          <div className="flex mb-4">
            <span className="text-[#9873FF] font-extrabold px-5 py-2 rounded mr-4 border border-[#7E90FE]">
              {jobType}
            </span>
            <span className="text-[#9873FF] font-extrabold px-5 py-2 rounded mr-4 border border-[#7E90FE]">
              {jobHour}
            </span>
          </div>
          <div className="flex">
            <div className="flex mr-6">
              <span className="pr-2">
                {" "}
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <p> {littleAddress}</p>
            </div>
            <div className="flex">
              <span className="pr-2">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <p>Salary: {salary}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate(`jobDetails/${_id}`)}
            className="text-xl font-bold text-white px-5 py-3 mt-6 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
