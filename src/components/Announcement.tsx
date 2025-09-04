import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold ">Announcements</h1>
        <span className="text-gray-400 text-xs">Show more</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-600 font-medium">Lorem ipsum dolor.</h2>
            <span className="text-gray-400 bg-white rounded-md px-1 py-1 text-xs">
              2024-09-01
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-600 font-medium">Lorem ipsum dolor.</h2>
            <span className="text-gray-400 bg-white rounded-md px-1 py-1 text-xs">
              2024-09-01
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-600 font-medium">Lorem ipsum dolor.</h2>
            <span className="text-gray-400 bg-white rounded-md px-1 py-1 text-xs">
              2024-09-01
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
