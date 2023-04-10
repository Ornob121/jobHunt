import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import img from "./assets/hardy.png";

const App = () => {
  return (
    <div>
      <Header>
        <Banner>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[80px] font-extrabold">
                One Step Closer To Your{" "}
                <span className="text-[#7E90FE]">Dream Job</span>
              </h1>
              <p className="text-[#757575] text-lg font-medium">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="text-xl font-bold text-white px-7 py-5 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF] mt-8">
                Get Started
              </button>
            </div>
            <img src={img} alt="" />
          </div>
        </Banner>
      </Header>

      <Outlet></Outlet>
    </div>
  );
};

export default App;
