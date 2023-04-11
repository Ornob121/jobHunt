import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faCalendarAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { addToLocalDb } from "../../localDb";

const JobDetails = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [jobsDetails, setJobsDetails] = useState([]);
  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setJobsDetails(data));
  }, []);
  const jobDetail = jobsDetails.find((detail) => detail._id === id.jobId);
  if (!jobDetail) {
    return;
  }

  const handleApplyNow = (id) => {
    addToLocalDb(id);
  };

  const {
    jobDescription,
    jobResponsibility,
    education,
    experience,
    address,
    email,
    phone,
    salary,
    jobName,
    _id,
  } = jobDetail;
  return (
    <div>
      <Banner>
        <h2
          style={{ backgroundColor: "rgba(126,144,254,0.1)" }}
          className="text-center pt-[101px] pb-36 text-5xl font-extrabold"
        >
          Job Details
        </h2>
      </Banner>
      <div className="px-[200px] mt-[130px] grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <p className="font-medium text-[#757575] pb-4">
            <span className="font-extrabold text-black">Job Description: </span>
            {jobDescription}
          </p>
          <p className="font-medium text-[#757575] pb-4">
            <span className="font-extrabold text-black">
              Job Responsibility:{" "}
            </span>
            {jobResponsibility}
          </p>
          <span className="font-extrabold text-black">
            Educational Requirements:{" "}
          </span>
          <p className="font-medium text-[#757575] pb-4">{education}</p>
          <span className="font-extrabold text-black">Experiences</span>
          <p className="font-medium text-[#757575] pb-4">{experience}</p>
        </div>
        <div>
          <div
            style={{ backgroundColor: "rgba(126,144,254,0.2)" }}
            className="p-8 rounded-lg"
          >
            <h3 className="text-xl font-extrabold">Job Details</h3>
            <hr className="border border-[#8c9bfa] my-6" />
            <div className="flex pb-4">
              <span className="pr-2">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <p>
                <span className="font-bold">Salary: </span> {salary}
              </p>
            </div>
            <div className="flex pb-8">
              <span className="pr-2">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              <p>
                <span className="font-bold">Job Title:</span> {jobName}
              </p>
            </div>
            <h5>Contact Information</h5>
            <hr className="border border-[#8c9bfa] my-6" />
            <div className="flex pb-4">
              <span className="pr-2">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <p>
                <span className="font-bold">Phone:</span> {phone}
              </p>
            </div>
            <div className="flex pb-3">
              <span className="pr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p>
                <span className="font-bold">Email:</span> {email}
              </p>
            </div>
            <div className="flex">
              <span className="pr-2">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <p>
                <span className="font-bold">Address:</span> {address}
              </p>
            </div>
          </div>
          <div onClick={() => handleApplyNow(_id)} className="text-center mt-6">
            <button className="w-full text-xl font-bold text-white px-5 py-3 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <button
          className="font-bold text-white px-7 py-3 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
