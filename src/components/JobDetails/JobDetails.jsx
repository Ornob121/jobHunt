import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const id = useParams();
  const jobs = useLoaderData();
  const [jobsDetails, setJobsDetails] = useState([]);
  useEffect(() => {
    fetch("/public/featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setJobsDetails(data));
  }, []);
  const jobDetail = jobsDetails.find((detail) => detail._id === id.jobId);
  if (!jobDetail) {
    return;
  }
  const {
    jobDescription,
    jobResponsibility,
    education,
    experience,
    address,
    email,
    phone,
    salary,
  } = jobDetail;
  return (
    <div className="px-[200px]">
      <h2 className="text-center my-10 text-5xl font-bold">Job Details</h2>
      <div>
        <div>
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
        <div> </div>
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
