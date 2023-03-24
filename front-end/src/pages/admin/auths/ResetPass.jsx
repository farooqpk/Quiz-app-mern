import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ResetPassPost } from "../../../helpers/authHelpers/ResetPassPost";


export const ResetPass = () => {

  
  const [password, setPassword] = useState("");
  const [resetPassErr, setResetPassErr] = useState("");

  const onclickSumbit = (data) => {
    setPassword(data.password);
  };

  const handleResetPassErr = (msg) => {
    setResetPassErr(msg);
    setPassword(null);
  };

  const schema = yup.object().shape({
    password: yup.string().required("required").min(5),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      {password && <ResetPassPost password={password} handleResetPassErr={handleResetPassErr} />}

      <section className="flex justify-center h-screen items-center max-w-full flex-wrap">
        <div className="bg-white rounded-lg w-full p-3 mx-4 lg:max-w-xl">
          <h1 className="text-xl font-semibold text-center text-black mt-4">
            Enter New Password
          </h1>

          <form className="mt-8 mx-2" onSubmit={handleSubmit(onclickSumbit)}>
            <div>
              {resetPassErr && <p className="text-red-700 text-center">{resetPassErr}</p>}
              <input
                {...register("password")}
                type="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 my-3 text-center"
              />
              {errors.password && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-5">
              <input
                type="submit"
                value="send"
                className="w-full px-4 py-2 tracking-wide text-black btn btn-outline mb-3"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
