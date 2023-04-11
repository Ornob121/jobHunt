import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "assignment1",
      mark: 57,
    },
    {
      name: "assignment2",
      mark: 59,
    },
    {
      name: "assignment3",
      mark: 58,
    },
    {
      name: "assignment4",
      mark: 60,
    },
    {
      name: "assignment5",
      mark: 54,
    },
    {
      name: "assignment6",
      mark: 58,
    },
    {
      name: "assignment7",
      mark: 60,
    },
    {
      name: "assignment8",
      mark: 60,
    },
  ];
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: 300,
          marginTop: "120px",
          padding: "0 180px",
        }}
      >
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="mark" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mark"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
