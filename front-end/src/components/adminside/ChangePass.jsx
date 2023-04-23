import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ChangePassPut } from "../../helpers/authHelpers/ChangePassPut";


export const ChangePass = () => {

  const [changePassData,setChangePassData] = useState(null)
  const [passNotExistError, setPassnotExistErr] = useState("");

  const handlePassExistErr = (msg) => {
    setPassnotExistErr(msg);
    setChangePassData(null);
  };

  const schema = yup.object().shape({
    currentPass: yup
      .string()
      .required("*required")
      .min(4, "password must be grater than or equal to 4")
      .max(8, "password should not be exceed 8"),
    newPass: yup
      .string()
      .required("*required")
      .min(4, "password must be grater than or equal to 4")
      .max(8, "password should not be exceed 8"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sumbitData = (data) => {
    setChangePassData(data)
    reset();
  };

  return (
    <>
    {changePassData &&  <ChangePassPut passData={changePassData} handlePassExistErr={handlePassExistErr} />}


      <form onSubmit={handleSubmit(sumbitData)} className="w-5/6 my-3 border border-dashed border-gray-400">
        <h1 className="text-center text-md font-serif mt-3 font-bold">
          Change Password?
        </h1>
        <div className="flex flex-col items-center justify-center gap-7 my-4">

        {passNotExistError && (
            <p className="text-red-600 text-center break-words">{passNotExistError}</p>
          )}

          <input
          {...register("currentPass")}
            type="password"
            placeholder="enter current password"
            className="w-5/6 input input-md text-black input-bordered input-ghost bg-slate-100 text-md"
          />
           {errors.currentPass && (
            <p className="text-red-600">{errors.currentPass.message}</p>
          )}
          <input
          {...register("newPass")}
            type="password"
            placeholder="enter new password"
            className="w-5/6 input input-md input-bordered input-ghost bg-slate-100 text-md text-black"
          />
           {errors.newPass && (
            <p className="text-red-600">{errors.newPass.message}</p>
          )}
          <button type="submit" className="btn btn-outline  btn-sm">save</button>
        </div>
      </form>
    </>
  );
};
