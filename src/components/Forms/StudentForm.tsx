"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(5, { error: "Username must be at least 5 characters long!" })
    .max(25, { error: "Username must be at most 25 characters long!" }),
  email: z.email({ error: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters long!" })
    .max(100, { error: "Password must be at most 100 characters long!" }),
  firstname: z
    .string()
    .min(2, { error: "First name is required!" })
    .max(50, { error: "First name must be at most 50 characters long!" }),
  lastname: z
    .string()
    .min(2, { error: "last name is required!" })
    .max(50, { error: "last name must be at most 50 characters long!" }),
  phone: z
    .string()
    .min(2, { error: "phone is required!" })
    .max(14, { error: "phone must be at most 14 number long!" }),
  address: z
    .string()
    .min(2, { error: "adress is required!" })
    .max(100, { error: "adress must be at most 100 characters long!" }),
  bloodType: z
    .string()
    .min(2, { error: "Blood type is required!" })
    .max(100, { error: "Blood type must be at most 100 characters long!" }),
  birthdate: z.date({ error: "birthdate is required!" }),
  sex: z.enum(["male", "female"], { error: "sex is required!" }),
  img: z.file({ error: "Image is required!" }),
});

const StudentForm = ({
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
      <h1 className="text-xl font-semibold">Create a new student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Info
      </span>
      <div className="flex flex-wrap justify-between items-center ">
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors.username}
          defaultValue={data?.username}
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          defaultValue={data?.email}
          type="email"
        />
        <InputField
          label="Password"
          name="password"
          register={register}
          error={errors.password}
          defaultValue={data?.password}
          type="password"
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">Personal Info</span>
      <div
        className="flex flex-wrap justify-between items-center 
      gap-4"
      >
        <InputField
          label="First Name"
          name="firstname"
          register={register}
          error={errors.firstname}
          defaultValue={data?.firstname}
        />
        <InputField
          label="Last Name"
          name="lastname"
          register={register}
          error={errors.lastname}
          defaultValue={data?.lastname}
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
          defaultValue={data?.phone}
        />
        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors.address}
          defaultValue={data?.address}
        />

        <InputField
          label="Blood Type"
          name="bloodType"
          register={register}
          error={errors.bloodType}
          defaultValue={data?.bloodType}
        />
        <InputField
          label="Date Of Birth"
          name="birthdate"
          register={register}
          error={errors.birthdate}
          defaultValue={data?.birthdate}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label htmlFor="" className="text-xs text-gray-500">
            Sex
          </label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-xs w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <span className="text-red-400 text-xs">{errors.sex.message}</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 w-full md:w-1/4 justify-center items-center ">
          <label
            htmlFor="img"
            className="text-xs text-gray-500 flex  items-center gap-2 cursor-pointer"
          >
            <Image alt="" src="/upload.png" width={40} height={40} />
            <span>Upload a Photo</span>
          </label>
          <input type="file" {...register("img")} hidden id="img" />
          {errors.img?.message && (
            <span className="text-red-400 text-xs">{errors.img.message}</span>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p2 rounded-md">
        {type == "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default StudentForm;
