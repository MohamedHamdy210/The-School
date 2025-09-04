"use client";
import Image from "next/image";
import React, { useState } from "react";
// import TeacherForm from "./Forms/TeacherForm";
import { ta } from "zod/locales";
// import StudentForm from "./Forms/StudentForm";
import dynamic from "next/dynamic";
const TeacherForm = dynamic(() => import("./Forms/TeacherForm"), {
  loading: () => <p>Loading...</p>,
});
const StudentForm = dynamic(() => import("./Forms/StudentForm"), {
  loading: () => <p>Loading...</p>,
});
const ParentForm = dynamic(() => import("./Forms/ParentForm"), {
  loading: () => <p>Loading...</p>,
});
const SubjectForm = dynamic(() => import("./Forms/SubjectForm"), {
  loading: () => <p>Loading...</p>,
});
const ClassForm = dynamic(() => import("./Forms/ClassForm"), {
  loading: () => <p>Loading...</p>,
});
const LessonForm = dynamic(() => import("./Forms/LessonForm"), {
  loading: () => <p>Loading...</p>,
});
const ExamForm = dynamic(() => import("./Forms/ExamForm"), {
  loading: () => <p>Loading...</p>,
});
const AssignmentForm = dynamic(() => import("./Forms/AssignmentForm"), {
  loading: () => <p>Loading...</p>,
});
const ResultForm = dynamic(() => import("./Forms/ResultForm"), {
  loading: () => <p>Loading...</p>,
});
const EventForm = dynamic(() => import("./Forms/EventForm"), {
  loading: () => <p>Loading...</p>,
});
const AnnouncementForm = dynamic(() => import("./Forms/AnnouncementForm"), {
  loading: () => <p>Loading...</p>,
});
const forms: {
  [key: string]: (type: "create" | "update", data: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  parent: (type, data) => <ParentForm type={type} data={data} />,
  subject: (type, data) => <SubjectForm type={type} data={data} />,
  class: (type, data) => <ClassForm type={type} data={data} />,
  lesson: (type, data) => <LessonForm type={type} data={data} />,
  exam: (type, data) => <ExamForm type={type} data={data} />,
  assignment: (type, data) => <AssignmentForm type={type} data={data} />,
  result: (type, data) => <ResultForm type={type} data={data} />,
  event: (type, data) => <EventForm type={type} data={data} />,
  announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
};
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bg =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col gap-4 p-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?{" "}
        </span>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md border-none self-center w-max">
          Delete{" "}
        </button>
      </form>
    ) : type === "update" || type === "create" ? (
      forms[table](type, data)
    ) : (
      "Form not Found"
    );
  };
  return (
    <>
      <button
        className={`${size} ${bg} flex items-center justify-center rounded-full `}
        onClick={() => setOpen(true)}
      >
        <Image alt="" src={`/${type}.png`} width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <div className="cursor-pointer absolute right-4 top-4 ">
              <Image
                alt=""
                src="/close.png"
                width={14}
                height={14}
                onClick={() => setOpen(false)}
              />
            </div>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
