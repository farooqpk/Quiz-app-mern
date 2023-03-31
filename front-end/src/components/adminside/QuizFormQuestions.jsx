import { useEffect, useState } from "react";

export const QuizFormQuestions = () => {
  const [totalOption, setTotalOption] = useState(0);
  const [options, setOptions] = useState([]);
  const [correctAnsOption, setCorrectAnsOption] = useState([]);

  const handleOptionsAccToNumber = () => {
    const optionArray = Array.from({ length: totalOption }, (_, index) => {
      return (
        <label className="input-group input-group-vertical">
          <span>option {index + 1}</span>
          <input
            type="text"
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
    setTotalOption(parseInt(event.target.value));
  };

  const handleCorrectAnswerOptionSelect = () => {
    const correctAnswerOptionArray = Array.from(
      { length: options.length },
      (item, index) => {
        return <option>option {index + 1}</option>;
      }
    );
    setCorrectAnsOption(correctAnswerOptionArray);
  };

  useEffect(() => {
    handleCorrectAnswerOptionSelect();
  }, [options]);

  return (
    <>
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
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Number of options
            </label>
            <input
              type="number"
              onChange={handleTotalOption}
              max={6}
              min={1}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {options.length>0 && (
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

              <select className=" px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40">
                <option disabled selected>
                  select
                </option>
                {correctAnsOption}
              </select>
            </div>
          )}

          <div className="mt-5 w-4/5 flex flex-col items-center mb-3">
            <button className="btn btn-outline btn-sm">Add question</button>
          </div>
        </form>
      </div>
    </>
  );
};
