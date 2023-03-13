import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginPost } from "../../helpers/LoginPost";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [adminData, setAdminData] = useState(null);

  const onclickSubmit = (data) => {
    setAdminData(data);
  };

  const schema = yup.object().shape({
    Email: yup
      .string()
      .required("email is required")
      .email("enter valid email"),
    Password: yup
      .string()
      .required("password is required")
      .min(4, "password must be grater than or equal to 4")
      .max(8, "password should not be exceed 8"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      {adminData && <LoginPost adminData={adminData} />}

      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mx-4">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black">
            Sign in
          </h1>

          <form className="mt-6" onSubmit={handleSubmit(onclickSubmit)}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                {...register("Email")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.Email && (
                <p style={{ color: "red" }}>{errors.Email.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                {...register("Password")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.Password && (
                <p style={{ color: "red" }}>{errors.Password.message}</p>
              )}
            </div>

            <div className="mt-6">
              <input
                type="submit"
                value="login"
                className="w-full px-4 py-2 tracking-wide text-black btn btn-outline"
              />
            </div>
            <div className="mt-4 font-medium text-slate-400 text-center">
              <Link className="hover:text-sm" to={"/"}>
                forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
