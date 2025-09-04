"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  id: z.string().min(1, { error: "ID is required!" }),
  title: z
    .string()
    .min(4, { error: "Title must be at least 4 characters long!" })
    .max(20, { error: "Title Name must be at most 20 characters long!" }),

  className: z
    .string()
    .min(2, { error: "class is required!" })
    .max(2, { error: "class must be at most 2 characters long!" }),
  date: z.string().min(10, { error: "Date must be in the future" }),
});

const AnnouncementForm = ({
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
      <h1 className="text-xl font-semibold">Create a new Announcement</h1>
      <span className="text-xs text-gray-400 font-medium">Announcement Info</span>
      <div className="flex flex-wrap gap-4 justify-between items-center ">
        <InputField
          label="Announcement ID"
          name="id"
          register={register}
          error={errors.id}
          defaultValue={data?.id}
        />
        <InputField
          label="Title"
          name="title"
          register={register}
          error={errors.title}
          defaultValue={data?.title}
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
      </div>

      <button className="bg-blue-400 text-white p2 rounded-md">
        {type == "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;
