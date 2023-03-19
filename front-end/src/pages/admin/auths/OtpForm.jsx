import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  otp: yup.string().required("required").length(5)
});

export const OtpForm = () => {
  const onclickSumbit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <section className="flex justify-center h-screen items-center max-w-full flex-wrap">
        <div className="bg-white rounded-lg w-full p-3 mx-4 lg:max-w-xl">
          <form className="mt-8 mx-2" onSubmit={handleSubmit(onclickSumbit)}>
            <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Enter OTP here!"
                {...register("otp")}
                className="block w-3/5 lg:w-1/2 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 my-3 text-center font-bold text-xl lg:text-2xl"
              />
              {errors.otp && (
                <p className="text-red-600 text-center">{errors.otp.message}</p>
              )}
            </div>

            <div className="mt-5 flex justify-center">
              <input
                type="submit"
                value="verify"
                className="w-1/4 btn-sm lg:btn-md lg:w-1/2 px-4 py-2 tracking-wide text-black btn btn-outline mb-3"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
