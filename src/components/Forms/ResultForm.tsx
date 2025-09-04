"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  resultId: z.string().min(1, { error: "ID is required!" }),
  subject: z
    .string()
    .min(4, { error: "lesson Name must be 4 characters long!" })
    .max(20, { error: "lesson Name must be 20 characters long!" }),
  teacher: z
    .string()
    .min(2, { error: "Teacher name is required!" })
    .max(50, { error: "Teacher name must be at most 50 characters long!" }),
  student: z
    .string()
    .min(2, { error: "Student name is required!" })
    .max(50, { error: "Student name must be at most 50 characters long!" }),
  type: z
    .string()
    .min(2, { error: "type is required!" })
    .max(50, { error: "type must be at most 50 characters long!" }),
  score: z.number({ error: "Score is required" }),
  className: z
    .string()
    .min(2, { error: "class is required!" })
    .max(2, { error: "class must be at most 2 characters long!" }),
  dueDate: z.string().min(10, { error: "Due date must be in the future" }),
});

const ResultForm = ({
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
      <h1 className="text-xl font-semibold">Create a new Result</h1>
      <span className="text-xs text-gray-400 font-medium">Result Info</span>
      <div className="flex flex-wrap gap-4 justify-between items-center ">
        <InputField
          label="Result ID"
          name="resultId"
          register={register}
          error={errors.resultId}
          defaultValue={data?.id}
        />
        <InputField
          label="Student Name"
          name="student"
          register={register}
          error={errors.student}
          defaultValue={data?.teacher}
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
          name="dueDate"
          register={register}
          error={errors.dueDate}
          defaultValue={data?.dueDate}
          type="date"
        />

        <InputField
          label="Type"
          name="type"
          register={register}
          error={errors.type}
          defaultValue={data?.type}
        />
        <InputField
          label="Score"
          name="score"
          register={register}
          error={errors.score}
          defaultValue={data?.score}
        />

      </div>

      <button className="bg-blue-400 text-white p2 rounded-md">
        {type == "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default ResultForm;
