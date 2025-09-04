"use client";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRole } from "./UserContext";
// Set a default role, or use a union type for type safety
const Navbar = () => {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className=" hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          className="w-[200px] p-2 bg-transparent outline-none"
          placeholder="Search..."
        />
      </div>
      {/* icons an user */}

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 ">
            {role}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
            {role != "Admin" && (
              <Link
                href="/admin"
                className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                onClick={() => {
                  setRole("Admin");
                }}
              >
                Admin
              </Link>
            )}
            {role != "Teacher" && (
              <Link
                href="/teacher"
                className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                onClick={() => setRole("Teacher")}
              >
                Teacher
              </Link>
            )}
            {role != "Student" && (
              <Link
                href="/student"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setRole("Student");
                }}
              >
                Student
              </Link>
            )}
            {role != "Parent" && (
              <Link
                href="/parent"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setRole("Parent");
                }}
              >
                Parent
              </Link>
            )}
          </div>
        </div>
        <div className="bg-white rounded-full cursor-pointer flex justify-center items-center w-7 h-7">
          <Image alt="" src="/message.png" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full cursor-pointer flex justify-center items-center w-7 h-7 relative">
          <Image alt="" src="/announcement.png" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-white text-sm">
            1
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">{role}</span>
        </div>
        <Image
          alt=""
          src="/avatar.png"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
