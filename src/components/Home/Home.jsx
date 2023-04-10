import React, { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../Banner/Banner";
import { useLoaderData, useParams } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "130px 200px 0" }}>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
