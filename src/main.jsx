import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import JobCategory from "./components/JobCategory/JobCategory";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import getAppliedJobsData from "./getAppliedJobsData/getAppliedJobsData";
import Statistics from "./components/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("featuredJobs.json"),
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`featuredJobs.json/jobDetails/${params.jobId}`),
      },
      {
        path: "appliedJobs/jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: getAppliedJobsData,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
