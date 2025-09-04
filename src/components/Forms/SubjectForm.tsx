"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  subjectId: z.string().min(1, { error: "ID is required!" }),
  subjectName: z
    .string()
    .min(5, { error: "Subject name must be at least 5 characters long!" })
    .max(25, { error: "Subject name must be at most 25 characters long!" }),
  teacherName: z
    .string()
    .min(2, { error: "Teacher name is required!" })
    .max(50, { error: "Teacher name must be at most 50 characters long!" }),
});

const SubjectForm = ({
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
      <h1 className="text-xl font-semibold">Create a new Subject</h1>
      <span className="text-xs text-gray-400 font-medium">Subject Info</span>
      <div className="flex flex-wrap justify-between items-center ">
        <InputField
          label="Subject ID"
          name="subject id"
          register={register}
          error={errors.subjectId}
          defaultValue={data?.id}
        />

        <InputField
          label="Subject Name"
          name="subjectName"
          register={register}
          error={errors.subjectName}
          defaultValue={data?.name}
        />
        <InputField
          label="Teacher Name"
          name="teacherName"
          register={register}
          error={errors.teacherName}
          defaultValue={data?.teachers}
        />
      </div>

      <button className="bg-blue-400 text-white p2 rounded-md">
        {type == "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default SubjectForm;
