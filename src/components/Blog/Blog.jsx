import React from "react";
import Banner from "../Banner/Banner";

const Blog = () => {
  return (
    <div>
      <Banner>
        <h5
          style={{
            backgroundColor: "rgba(126,144,254,0.1)",
            padding: "20px 200px 120px",
          }}
          className="text-center text-3xl text-yellow-600 mb-10 font-bold"
        >
          Questions Answers
        </h5>
      </Banner>
      <div className="px-[200px]">
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q1: When should you use context API?
          </p>
          <p className="text-lg">
            Answer: When we send data to a child component we use props but when
            the child component is far and we have to use props multiple times
            to give the child component data than we should use context API
            because of it we do not have to use props drilling and we can access
            the data directly. Besides we can also pass data from child to
            parent component using context API.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">Q1: What is custom hook?</p>
          <p className="text-lg">
            Answer: Custom hook is a react hook which is created by us. We use
            custom hook to avoid duplicating code. It is like a function it
            takes an input and returns an output.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">Q1: What is useRef?</p>
          <p className="text-lg">
            Answer: useRef is a react hook like useState and useEffect. It is
            usually used to store value. It takes the initial value as argument
            and returns an object.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">Q1: What is useMemo?</p>
          <p className="text-lg">
            Answer: useMemo is also a react hook like useState, useEffect and
            useRef. It memorizes the result of a function. It also boost the
            performance of react application by not calculating the function on
            every render.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
