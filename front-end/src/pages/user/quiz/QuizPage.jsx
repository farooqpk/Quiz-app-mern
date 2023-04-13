import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SelectedAnsContext } from "../../../context/userSide/SelectedAnsContextProvider";

export const QuizPage = () => {

  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(location.state.Duration * 60);
  const { selectedAns, setSelectedAns } = useContext(SelectedAnsContext);
  const [isTimeAlmostFinish, setIsTimeAlmostFinish] = useState(false);


  const autoSumbitWhenTimeEnd = () => {
    alert("ended");
  };


  useEffect(() => {
    //logic for time decriment
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    //logic for stop timer and autosumbit
    if (timeLeft === 0) {
      clearInterval(intervalId);
      autoSumbitWhenTimeEnd();
    }

    //logic for time ending signal
    if (timeLeft === (location.state.Duration * 60) / 4) {
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
    setSelectedAns((prevAns) => ({ ...prevAns, [questionNo]: selected }));

    // const value = location.state.Questions.map((item, index) => {
    //   return item.options[item.CorrectAns];
    // });
    // if (value.includes(selectedAns)) {
    //   alert("answer correct");
    // } else {
    //   alert("incorrect");
    // }
  };

  return (
    <>
      <main className="h-auto w-full flex justify-center items-center">
        <header className="bg-gray-100 fixed top-0 w-full z-10">
          <div className="flex justify-center mt-5">
            <h1 className="text-black font-semibold text-xl">
              {location.state.Title}
            </h1>
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
              {location.state.EachQMark * location.state.Questions.length} marks
            </p>
          </div>
        </header>

        <div className=" my-6 w-5/6 mt-24">
          {location.state.Questions.map((item, index) => {
            return (
              <section className="mt-3 bg-gray-100 rounded-lg scroll-m-0">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-black p-3">Question #{item.No} </span>
                  <hr className="border border-slate-200 w-full my-1" />
                  <p className="text-black mt-2 break-words p-3">
                    {item.Question}
                  </p>
                  <select
                    onChange={(event) =>
                      handleSelect(item.No, event.target.value)
                    }
                    className="select text-center text-black select-bordered w-full max-w-xs mt-3 bg-slate-50"
                  >
                    <option disabled selected>
                      select
                    </option>
                    {item.options.map((option, index) => {
                      return <option>{option}</option>;
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
        </div>
      </main>
    </>
  );
};
