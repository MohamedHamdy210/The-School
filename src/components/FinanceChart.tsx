"use client";
import exp from "constants";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 9000,
    expense: 5800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Sep",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Oct",
    income: 8000,
    expense: 1800,
  },
  {
    name: "Nov",
    income: 2780,
    expense: 1908,
  },
  {
    name: "Dec",
    income: 1890,
    expense: 2800,
  },
];

const FinanceChart = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl p-4">
      {/* title */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Finance</h1>
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
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "20px", paddingTop: "10px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#c3ebfa"
              strokeWidth={5}
            />
            <Line
              type="monotone"
              strokeWidth={5}
              dataKey="expense"
              stroke="#cfceff"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
