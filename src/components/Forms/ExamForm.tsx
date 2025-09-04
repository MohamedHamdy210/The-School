"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  examId: z.string().min(1, { error: "ID is required!" }),
  subject: z
    .string()
    .min(4, { error: "lesson Name must be 4 characters long!" })
    .max(20, { error: "lesson Name must be 20 characters long!" }),
  teacher: z
    .string()
    .min(2, { error: "Teacher name is required!" })
    .max(50, { error: "Teacher name must be at most 50 characters long!" }),
  className: z
    .string()
    .min(2, { error: "class is required!" })
    .max(2, { error: "class must be at most 2 characters long!" }),
  date: z
    .string()
    .min(10, { error: "Date is required!" })
});

const ExamForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onsubmit = handleSubmit((data) => console.log(data));
  return (
    <form className="flex flex-col gap-8" onSubmit={onsubmit}>
      <h1 className="text-xl font-semibold">Create a new Exam</h1>
      <span className="text-xs text-gray-400 font-medium">Exam Info</span>
      <div className="flex flex-wrap gap-4 justify-between items-center ">
        <InputField
          label="Exam ID"
          name="examId"
          register={register}
          error={errors.examId}
          defaultValue={data?.id}
        />

        <InputField
          label="Subject"
          name="subject"
          register={register}
          error={errors.subject}
          defaultValue={data?.subject}
        />
        <InputField
          label="class"
          name="className"
          register={register}
          error={errors.className}
          defaultValue={data?.class}
        />
        <InputField
          label="Date"
          name="date"
          register={register}
          error={errors.date}
          defaultValue={data?.date}
          type="date"
        />

        <InputField
          label="Teacher Name"
          name="teacher"
          register={register}
          error={errors.teacher}
          defaultValue={data?.teacher}
        />
      </div>

      <button className="bg-blue-400 text-white p2 rounded-md">
        {type == "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default ExamForm;
