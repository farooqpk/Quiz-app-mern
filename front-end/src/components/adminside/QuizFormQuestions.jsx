import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateQuizFormDataContext } from "../../context/adminSide/CreateQuizFormDataContextProvider";
import { CreateQuizPost } from "../../helpers/quizHelpers/CreateQuizPost";

export const QuizFormQuestions = () => {
  const [totalOption, setTotalOption] = useState(0);
  const [options, setOptions] = useState([]);
  const [correctAnsOption, setCorrectAnsOption] = useState([]);
  const [QuestionNO, setQuestionNo] = useState(1);
  const [isFinished, SetisFinished] = useState(false);
  const { CreateQuizFormData, setCreateQuizFormData } = useContext(
    CreateQuizFormDataContext
  );

  const schema = yup.object().shape({
    Question: yup.string().required("required"),
    NoOfOptions: yup.number().required().typeError("required"),
    CorrectAns: yup.string().required("required"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const createNewQuestion = (data, questionNo) => {
    let option = [];
    for (let i = 1; i <= data.NoOfOptions; i++) {
      option.push({ [`option ${i}`]: data[`option ${i}`] });
    }
    const newQuestions = {
      No: questionNo,
      Question: data.Question,
      NoOfOptions: data.NoOfOptions,
      CorrectAns: data.CorrectAns,
      options: option,
    };
    return newQuestions;
  };

  const handleAddbutton = (data) => {
    setQuestionNo((prev) => prev + 1);
    const newQuestions = createNewQuestion(data, QuestionNO);
    let Questions = [];
    if (Array.isArray(CreateQuizFormData.Questions)) {
      Questions = [...CreateQuizFormData.Questions, newQuestions];
    } else {
      Questions = [newQuestions];
    }

    const formData = {
      ...CreateQuizFormData,
      Questions,
    };
    setCreateQuizFormData(formData);
    setTotalOption(0);
    reset();
  };

  const handleFinishbutton = (data) => {
    setQuestionNo((prev) => prev + 1);
    const newQuestions = createNewQuestion(data, QuestionNO);
    let Questions = [];
    // check if Questions is an array
    if (Array.isArray(CreateQuizFormData.Questions)) {
      Questions = [...CreateQuizFormData.Questions, newQuestions];
    } else {
      Questions = [newQuestions];
    }

    const formData = {
      ...CreateQuizFormData,
      Questions,
    };
    setCreateQuizFormData(formData);
    setTotalOption(null);
    SetisFinished(true);
  };

  const handleOptionsAccToNumber = () => {
    const optionArray = Array.from({ length: totalOption }, (_, index) => {
      return (
        <label
          className="input-group input-group-vertical"
          key={`option ${index + 1}`}
        >
          <span>option {index + 1}</span>
          <input
            type="text"
            required
            {...register(`option ${index + 1}`)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </label>
      );
    });
    setOptions(optionArray);
  };

  useEffect(() => {
    handleOptionsAccToNumber();
  }, [totalOption]);

  const handleTotalOption = (event) => {
    // here we trigger event with onInput instead of onChange because onchange doest to trigger same value if i input again , but onInput allow us to input even same value which we entered before
    console.log(parseInt(event.target.value));
    setTotalOption(parseInt(event.target.value));
  };

  const handleCorrectAnswerOptionSelect = () => {
    const correctAnswerOptionArray = Array.from(
      { length: options.length },
      (item, index) => {
        return <option key={index + 1}>option {index + 1}</option>;
      }
    );
    setCorrectAnsOption(correctAnswerOptionArray);
  };

  useEffect(() => {
    handleCorrectAnswerOptionSelect();
  }, [options]);

  return (
    <>
      {isFinished && <CreateQuizPost/>}

      <div className=" bg-white ">
        <form className="flex flex-col items-center">
          <div className="mt-5">
            <h1 className="text-xl font-semibold text-black text-center">
              Make Questions
            </h1>
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Question
            </label>
            <textarea
              rows="2"
              {...register("Question")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
            {errors.Question && (
              <p className="text-red-600 text-center">
                {errors.Question.message}
              </p>
            )}
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Number of options
            </label>
            <input
              type="number"
              max={6}
              min={1}
              {...register("NoOfOptions")}
              onInput={handleTotalOption}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.NoOfOptions && (
              <p className="text-red-600 text-center">
                {errors.NoOfOptions.message}
              </p>
            )}
          </div>

          {options.length > 0 && (
            <div className="mt-7 w-4/5 flex flex-col items-center">
              <label className="text-lg block font-semibold text-gray-800 mb-2">
                Options
              </label>
              <div className="form-control">{options}</div>
            </div>
          )}

          {correctAnsOption.length > 0 && (
            <div className="mt-7 w-4/5 flex flex-col items-center">
              <label className="text-lg block font-semibold text-gray-800 mb-2">
                Correct answer
              </label>

              <select
                {...register("CorrectAns")}
                className=" px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option disabled>select</option>
                {correctAnsOption}
              </select>
            </div>
          )}

          <div className="flex my-8 gap-2 w-auto justify-center">
            <button
              onClick={handleSubmit(handleFinishbutton)}
              className="btn btn-outline btn-sm rounded-3xl"
            >
              Finish
            </button>
            <button
              onClick={handleSubmit(handleAddbutton)}
              className="btn btn-outline btn-sm rounded-3xl"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
