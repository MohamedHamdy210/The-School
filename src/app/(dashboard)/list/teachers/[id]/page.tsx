import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import { Performance } from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row ">
      {/* left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-2">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4 ">
          {/* user Card */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 items-center">
            <Image
              alt=""
              src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={144}
              height={144}
              className="w-36 h-36 rounded-full object-cover "
            />
            <div className="w-2/3 flex flex-col justify-between gap-4 ">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Jhon Doe</h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    firstname: "Jhon",
                    lastname: "Doe",
                    username: "johndoe",
                    password: "password",
                    id: 1,
                    teacherId: "1234567890",
                    name: "John Doe",
                    email: "john@doe.com",
                    photo:
                      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    phone: "1234567890",
                    subjects: ["Math", "Geometry"],
                    classes: ["1B", "2A", "3C"],
                    address: "123 Main St, Anytown, USA",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium px-4">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image alt="" src="/blood.png" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image alt="" src="/date.png" width={14} height={14} />
                  <span>Octobor 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image alt="" src="/mail.png" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image alt="" src="/phone.png" width={14} height={14} />
                  <span>+123456789</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex gap-4 flex-wrap justify-between">
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                alt=""
                src="/singleAttendance.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                alt=""
                src="/singleBranch.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                alt=""
                src="/singleClass.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                alt=""
                src="/singleLesson.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="bg-white p-4 rounded-md h-[800px]">
          <h1 className="font-semibold text-xl">Teacher&apos;s Schedule</h1>
          <div className="p-2 h-full">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="font-semibold text-xl">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-2 rounded-md bg-lamaSkyLight" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-2 rounded-md bg-lamaPurpleLight" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-2 rounded-md bg-lamaYellowLight" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-2 rounded-md bg-pink-50" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-2 rounded-md bg-lamaSkyLight" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
