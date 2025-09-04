"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    name: 'Sun',
    absent: 10,
    present: 90,
  },
  {
    name: 'Mon',
    absent: 30,
    present: 70,
  },
  {
    name: 'Tue',
    absent: 40,
    present: 60,
  },
  {
    name: 'Wed',
    absent: 20,
    present: 80,
  },
  {
    name: 'Thu',
    absent: 50,
    present: 50,
  },
  
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl p-4">
      {/* title */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image
          src="/moreDark.png"
          height={20}
          width={20}
          alt=""
          className="cursor-pointer"
        />
      </div>
      {/* chart */}
      <div className=" relative w-full h-full p-4  ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              axisLine={false}
              dataKey="name"
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "40px", paddingTop: "20px" }}
            />
            <Bar
              dataKey="present"
              barSize={20}
              legendType="circle"
              radius={[10, 10, 0, 0]}
              fill="#fae27c"
            />
            <Bar
              fill="#c3ebfa"
              dataKey="absent"
              barSize={20}
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* bottom */}
    </div>
  );
};

export default AttendanceChart;
