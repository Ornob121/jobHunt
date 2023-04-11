import React from "react";

const ShowJobCategory = ({ job }) => {
  const { image, name, jobs } = job;
  return (
    <div
      className="job-category-item"
      style={{
        backgroundColor: "rgba(126,144,254,0.1)",
        width: "311px",
        height: "243px",
        padding: "40px",
      }}
    >
      <img
        style={{ backgroundColor: "rgba(126,144,254,0.4)" }}
        className="h-[70px] w-[70px] p-4 mb-7 bg-slate-500 shadow-lg rounded-lg"
        src={image}
        alt=""
      />
      <h5 className="text-xl pb-2 font-extrabold">{name}</h5>
      <p className="text-[#A3A3A3] font-medium">{jobs}</p>
    </div>
  );
};

export default ShowJobCategory;
