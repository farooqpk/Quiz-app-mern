import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectedAnsContext } from "../../../context/userSide/SelectedAnsContextProvider";

export const QuizPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(state.Duration * 60);
  const { selectedAns, setSelectedAns } = useContext(SelectedAnsContext);
  const [isTimeAlmostFinish, setIsTimeAlmostFinish] = useState(false);

  useEffect(() => {
    //logic for time decriment
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    //logic for stop timer and autosumbit
    if (timeLeft === 0) {
      clearInterval(intervalId);
      handleSumbit();
    }

    //logic for time ending signal
    if (timeLeft === (state.Duration * 60) / 4) {
      setIsTimeAlmostFinish(true);
      if (!navigator.vibrate(200)) {
        return;
      } else {
        navigator.vibrate(200);
      }
    }
    //cleanup function when component unmounts
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleSelect = (questionNo, selected) => {
    //find index to check same object exist
    let index = selectedAns.findIndex((obj) => obj[questionNo]);

    if (index === -1) {
      setSelectedAns((prevAns) => [...prevAns, { [questionNo]: selected }]);
    } else {
      const updatedSelectedAns = [...selectedAns];
      updatedSelectedAns[index][questionNo] = selected; // in this accessing value inside the array of object and replace value with user selected. eg: updatedSelectAns is array and access index like updatedSelectAns[index] means 0th object then access quesitonNo of that object then replace value.
      setSelectedAns(updatedSelectedAns);
    }
  };

  const handleSumbit = (event) => {
    event && event.preventDefault();

    const result = state.Questions.reduce((acc, item) => {

        const selected = selectedAns.find((obj) => obj[item.No]);
console.log(selected);
        const isCorrect = selected
          ? selected[item.No] === item.options[item.CorrectAns]
          : false;
          
        const isUnanswered = selected ? false : true; //if user not selected any options

        console.log(isUnanswered);

        if (isCorrect) {
          acc.userMark += state.EachQMark;
        } else if (isUnanswered) {
          acc.resultArray.push({
            question: item.Question,
            answer: item.options[item.CorrectAns],
            wrong: "Unanswered",
          });
        } else {
          // if user answer is incorrect we create array to show that question,correct answer and wrong answer he did
          acc.resultArray.push({
            question: item.Question,
            answer: item.options[item.CorrectAns],
            wrong: selected[item.No],
          });
        }

        return acc;
      },
      { userMark: 0, resultArray: [] }
    );

    navigate("/quizResult", {
      state: {
        outOfMark: state.Questions.length * state.EachQMark,
        userMark: result.userMark,
        resultArr: result.resultArray.length > 0 && result.resultArray,
      },
    });
  };

  return (
    <>
      <main className="h-auto w-full flex justify-center items-center">
        <header className="bg-gray-100 fixed top-0 w-full z-10">
          <div className="flex justify-center mt-5">
            <h1 className="text-black font-semibold text-xl">{state.Title}</h1>
          </div>
          <div className="flex justify-evenly mt-5">
            <p
              className={
                isTimeAlmostFinish
                  ? "text-red-600 font-bold"
                  : "text-black font-bold"
              }
            >
              {Math.floor(timeLeft / 60)}:{timeLeft % 60}
            </p>
            <p className="text-black">
              {state.EachQMark * state.Questions.length} marks
            </p>
          </div>
        </header>

        <form className=" my-6 w-5/6 mt-24" onSubmit={handleSumbit}>
          {state.Questions.map((item, index) => {
            return (
              <section
                key={index}
                className="mt-3 bg-gray-100 rounded-lg scroll-m-0"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-black p-3">Question #{item.No} </span>
                  <hr className="border border-slate-200 w-full my-1" />
                  <p className="text-black mt-2 break-words p-3">
                    {item.Question}
                  </p>
                  <select
                    required
                    onChange={(event) =>
                      handleSelect(item.No, event.target.value)
                    }
                    className="select text-center text-black select-bordered w-full max-w-xs mt-3 bg-slate-50"
                  >
                    <option disabled selected hidden value={""}>
                      select
                    </option>
                    {item.options.map((option, index) => {
                      return (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </section>
            );
          })}

          <footer className="mt-1 bg-gray-100 rounded-lg flex justify-center p-3">
            <button className="btn btn-outline btn-sm text-black">
              sumbit
            </button>
          </footer>
        </form>
      </main>
    </>
  );
};
