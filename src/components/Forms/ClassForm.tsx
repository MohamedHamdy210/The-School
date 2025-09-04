"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  classId: z.string().min(1, { error: "ID is required!" }),
  className: z
    .string()
    .min(2, { error: "class Name must be 2 characters long!" })
    .max(2, { error: "class Name must be 2 characters long!" }),
  supervisorName: z
    .string()
    .min(2, { error: "Teacher name is required!" })
    .max(50, { error: "Teacher name must be at most 50 characters long!" }),
    capacity: z
    .number()
    .min(15,{ error: "capacity must be at least 15 students!" })
    .max(30,{ error: "capacity must be at most 30 students!" }),
    grade:z
    .string()
    .min(1,{ error: "grade is required!" })
    .max(2,{ error: "grade must be at most 2 characters long!" }),
});

const ClassForm = ({
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
      <h1 className="text-xl font-semibold">Create a new class</h1>
      <span className="text-xs text-gray-400 font-medium">class Info</span>
      <div className="flex flex-wrap gap-4 justify-between items-center ">
        <InputField
          label="class ID"
          name="classId"
          register={register}
          error={errors.classId}
          defaultValue={data?.id}
        />

        <InputField
          label="class Name"
          name="className"
          register={register}
          error={errors.className}
          defaultValue={data?.name}
        />
        <InputField
          label="Grade"
          name="grade"
          register={register}
          error={errors.grade}
          defaultValue={data?.grade}
        />
        <InputField
          label="Capacity"
          name="capacity"
          register={register}
          error={errors.capacity}
          defaultValue={data?.capacity}
        />
        <InputField
          label="Supervisor Name"
          name="SupervisorName"
          register={register}
          error={errors.supervisorName}
          defaultValue={data?.supervisor}
        />
      </div>

      <button className="bg-blue-400 text-white p2 rounded-md">
        {type == "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default ClassForm;
