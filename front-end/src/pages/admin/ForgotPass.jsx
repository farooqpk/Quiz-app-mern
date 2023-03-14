import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const onclickSumbit = (data) => {
 
};

const schema = yup.object().shape({
  Email: yup.string().required("email is required").email("enter valid email"),
});

export const ForgotPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <section className="flex justify-center h-screen items-center max-w-full flex-wrap">
        <div className="bg-white rounded-lg w-full p-3 mx-4 lg:max-w-xl">
          <h1 className="text-2xl font-semibold text-center text-black mt-4">
            Enter Your Email To Send Otp
          </h1>

          <form className="mt-8 mx-2" onSubmit={handleSubmit(onclickSumbit)}>
            <div>
              <input
                type="email"
                {...register("Email")}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 my-3"
              />
              {errors.Email && (
                <p style={{ color: "red" ,textAlign:"center"}}>{errors.Email.message}</p>
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