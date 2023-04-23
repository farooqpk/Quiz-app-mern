import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ChangeEmailPut } from "../../helpers/authHelpers/ChangeEmailPut";

export const ChangeEmail = () => {
  const [changeEmailData, setChangeEmailData] = useState(null);
  const [emailNotExistError, setEmailnotExistErr] = useState("");

  const handleEmailExistErr = (msg) => {
    setEmailnotExistErr(msg);
    setChangeEmailData(null);
  };

  const schema = yup.object().shape({
    currentEmail: yup
      .string()
      .email("must be a valid email")
      .required("*required")
      .lowercase(),
    newEmail: yup
      .string()
      .email("must be a valid email")
      .required("*required")
      .lowercase(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sumbitData = (data) => {
    setChangeEmailData(data);
    reset();
  };

  return (
    <>
      {changeEmailData && (
        <ChangeEmailPut
          emailData={changeEmailData}
          handleEmailExistErr={handleEmailExistErr}
        />
      )}

      <form
        onSubmit={handleSubmit(sumbitData)}
        className="w-5/6 my-3 mt-4 border border-dashed border-gray-400"
      >
        <h1 className="text-center text-md font-serif mt-3 font-bold">
          Change Email?
        </h1>
        <div className="flex flex-col items-center justify-center gap-7 my-4">
          
          {emailNotExistError && (
            <p className="text-red-600 text-center break-words">{emailNotExistError}</p>
          )}

          <input
            {...register("currentEmail")}
            type="email"
            placeholder="enter current email"
            className="w-5/6 input input-md input-bordered input-ghost bg-slate-100 text-md text-black"
          />
          {errors.currentEmail && (
            <p className="text-red-600">{errors.currentEmail.message}</p>
          )}

          <input
            {...register("newEmail")}
            type="email"
            placeholder="enter new email"
            className="w-5/6 input input-md input-bordered input-ghost bg-slate-100 text-md text-black"
          />
          {errors.newEmail && (
            <p className="text-red-600">{errors.newEmail.message}</p>
          )}

          <button type="submit" className="btn btn-outline  btn-sm">
            save
          </button>
        </div>
      </form>
    </>
  );
};
