import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const QuizPage = () => {

  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(location.state.Duration * 60);


  useEffect(() => {
    //logic for time decriment
    const intervelId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      if(prevTimeLeft===0){
        return
      }
    }, 1000);
    return () => clearInterval(intervelId);
  }, []);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  



 

  return (
    <>
      <main className="h-auto w-full flex justify-center items-center">
        <header className="bg-gray-100 fixed top-0 w-full z-10">
          <div className="flex justify-center">
            <h1 className="text-black font-semibold text-xl">
              {location.state.Title}
            </h1>
          </div>
          <div className="flex justify-evenly mt-5">
            <p className="text-red-600 font-bold">
              {minutes}:{seconds} remaining
            </p>
            <p className="text-black">
              {location.state.EachQMark * location.state.Questions.length} marks
            </p>
          </div>
        </header>

        <div className=" my-6 w-5/6 mt-20">
          {location.state.Questions.map((item, index) => {
            return (
              <section className="mt-3 bg-gray-100 rounded-lg scroll-m-0">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-black p-3">Question #{item.No} </span>
                  <hr className="border border-slate-200 w-full my-1" />
                  <p className="text-black mt-2 break-words p-3">
                    {item.Question}
                  </p>
                  <select className="select text-center text-black select-bordered w-full max-w-xs mt-3 bg-slate-50">
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
