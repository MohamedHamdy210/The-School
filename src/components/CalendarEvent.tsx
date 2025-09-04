"use client";
import Image from "next/image";
import { title } from "process";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
const events = [
  {
    id: 1,
    title: "lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    id: 2,
    title: "lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    id: 3,
    title: "lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    time: "12:00 PM - 2:00 PM",
  },
];
type Value = ValuePiece | [ValuePiece, ValuePiece];
const CalendarEvent = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-md p-4 ">
      <Calendar onChange={onChange} value={value} />
       <div className="flex justify-between items-center ">
              <h1 className="text-lg font-semibold my-4">Events</h1>
              <Image
                src="/moreDark.png"
                height={20}
                width={20}
                alt=""
                className="cursor-pointer"
              />
            </div>
      {events.map((event) => (
      <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>

        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-semibold">{event.title}</h1>
          <span className="text-gray-400 text-xs">{event.time}</span>
        </div>
        <p className="mt-2 text-gray-400 text-sm">{event.desc}</p>
      </div>  
      ))}
    </div>
  );
};

export default CalendarEvent;
