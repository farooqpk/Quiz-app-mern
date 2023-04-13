import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { SelectedAnsContext } from "../../../context/userSide/SelectedAnsContextProvider";
import { SpecificQuizDataContext } from "../../../context/userSide/SpecificQuizDataContextProvider";

export const QuizPage = () => {

  const navigate = useNavigate()
  const {SpecificQuizData,setSpecificQuizData} = useContext(SpecificQuizDataContext)
  const [timeLeft, setTimeLeft] = useState(SpecificQuizData.Duration * 60);
  const { selectedAns, setSelectedAns } = useContext(SelectedAnsContext);
  const [isTimeAlmostFinish, setIsTimeAlmostFinish] = useState(false);
  const [totalMark,setTotalMark]=useState(0)


  const autoSumbitWhenTimeEnd = () => {
    // alert("ended");
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
    if (timeLeft === (SpecificQuizData.Duration * 60) / 4) {
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

    // const value = location.state.Questions.map((item, index) => {
    //   return item.options[item.CorrectAns];
    // });
    // if (value.includes(selectedAns)) {
    //   alert("answer correct");
    //   setSelectedAns((prev)=> ({...prev, [questionNo]:true}))

    // } else {
    //   alert("incorrect");
    // }
  };

  const handleSumbit = (event) => {
    event.preventDefault();

    //logic to check wether the ans is correct and calc mark
    const marks = SpecificQuizData.Questions.reduce((acc,item)=>{

      const selected = selectedAns.find((answer)=>answer[item.No]);
      const isCorrect = selected ? selected[item.No] === item.options[item.CorrectAns] : false;
      if (isCorrect) {
        acc += SpecificQuizData.EachQMark;
      }
      return acc;

    },0)
    
    setTotalMark((prevMark)=>prevMark+marks);
    navigate("/quizResult")

  //  OR    location.state.Questions.forEach((item,index)=>{
  //    const selected = selectedAns.find((answer)=>answer[item.No])
  //    console.log(selected);
  //    if(selected){
  //    const isCorrect = selected[item.No]===item.options[item.CorrectAns]
  //     isCorrect && setTotalMark((prev)=>prev+location.state.EachQMark) 
  //    }
  //   })
  };

  return (
    <>
  
      <main className="h-auto w-full flex justify-center items-center">
        <header className="bg-gray-100 fixed top-0 w-full z-10">
          <div className="flex justify-center mt-5">
            <h1 className="text-black font-semibold text-xl">
              {SpecificQuizData.Title}
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
              {SpecificQuizData.EachQMark * SpecificQuizData.Questions.length} marks
            </p>
          </div>
        </header>

        <form className=" my-6 w-5/6 mt-24" onSubmit={handleSumbit}>
          {SpecificQuizData.Questions.map((item, index) => {
            return (
              <section className="mt-3 bg-gray-100 rounded-lg scroll-m-0">
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
