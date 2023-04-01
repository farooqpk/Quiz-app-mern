import { useContext } from "react";
import { CreateQuizFormNextBtnContext } from "../../context/adminSide/CreateQuizFormNextBtnContextProvider";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";


export const QuizFormBasicDetails = () => {

const {isNextClick, setIsNextClick}=useContext(CreateQuizFormNextBtnContext)

const handleNextBtn=(data)=>{
  console.log(data);
  setIsNextClick(!isNextClick)
}

const schema= yup.object().shape({
Title:yup.string().required('required'),
Description:yup.string().required('required'),
Duration:yup.string().required('required'),
EachQMark:yup.string().required('required')
})

const {register,handleSubmit,formState:{errors}} =  useForm({ resolver: yupResolver(schema)})


  return (
    <>
      <div className=" bg-white ">
        <form className="flex flex-col items-center" onSubmit={handleSubmit(handleNextBtn)}>
          <div className="mt-5">
            <h1 className="text-xl font-semibold text-black text-center">
              Basic Details
            </h1>
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Title
            </label>
            <input
              type="text"
              {...register("Title")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.Title && (
                <p className="text-red-600 text-center">{errors.Title.message}</p>
              )}
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Description
            </label>
            <textarea
              rows="2"
              {...register("Description")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
             {errors.Description && (
                <p className="text-red-600 text-center">{errors.Description.message}</p>
              )}
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Duration
            </label>
            <input
              type="number"
              {...register("Duration")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.Duration && (
                <p className="text-red-600 text-center">{errors.Duration.message}</p>
              )}
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Each Q Mark
            </label>
            <input
              type="number"
              {...register("EachQMark")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.EachQMark && (
                <p className="text-red-600 text-center">{errors.EachQMark.message}</p>
              )}
          </div>
          <div className="mt-5 w-4/5 flex flex-col items-center mb-3">
            <input type="submit"  value="Next" className="btn btn-outline btn-sm" />
          </div>
        </form>
      </div>
    </>
  );
};
