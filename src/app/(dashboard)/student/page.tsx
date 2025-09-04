import Announcement from "@/components/Announcement";

import BigCalendar from "@/components/BigCalendar";
import CalendarEvent from "@/components/CalendarEvent";

import React from "react";
const Studentpage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold text-xl">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <CalendarEvent />
        <Announcement />
      </div>
    </div>
  );
};

export default Studentpage;
