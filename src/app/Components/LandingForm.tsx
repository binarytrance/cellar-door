"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function LandingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(watch("location"));
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="form-group flex flex-col mb-5">
        <label>where do you want to go?</label>
        <input
          className="text-black p-2"
          defaultValue="test"
          {...register("location", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.location && <span>This field is required</span>}
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="form-group flex flex-col mb-5">
        <label>What is your budget?</label>
        <input
          type="number"
          className="text-black p-2"
          {...register("exampleRequired", { required: true })}
        />
      </div>

      <input type="submit" />
    </form>
  );
}
