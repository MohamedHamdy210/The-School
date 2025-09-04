"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,

    fill: "#fff",
  },
  {
    name: "Girls",
    count: 45,

    fill: "#fae27c ",
  },
  {
    fill: "#c3ebfa ",
    name: "Boys",
    count: 55,

  },
];

const CountChart = () => {
  return (
    <div className="w-full h-full  bg-white rounded-xl p-4">
      {/* title */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src="/moreDark.png"
          height={20}
          width={20}
          alt=""
          className="cursor-pointer"
        />
      </div>
      {/* chart */}
      <div className=" relative w-full h-[80%]   ">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            barSize={20}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className=" flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,375</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,125</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
