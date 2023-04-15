import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../../components/commons/Footer";

export const QuizResult = () => {
  const { state } = useLocation();

  return (
    <>
      <section className="mb-36">
        <div className="flex flex-col items-center gap-6 flex-wrap w-full">
          <header className="flex flex-col items-center gap-4 p-2 mt-7 w-full">
            <h1 className="text-3xl font-semibold">
              {state.userMark === 0 ? "Sorry! Keep trying" : "Congratulations!"}
            </h1>
            <h1 className="text-2xl font-serif text-center mt-4">
              You scored {state.userMark} out of {state.outOfMark} marks
            </h1>
          </header>

          {state.resultArr && (
            <div className="flex flex-col gap-3 items-center p-2 w-full">
              <h1 className="text-xl font-serif text-center">
                Here are some areas for improvement
              </h1>
              <div className="flex justify-center w-3/4 mt-5">
                <div className="flex flex-col items-center">
                  {state.resultArr.map((item, index) => {
                    return (
                      <>
                        <label className="text-blue-300 text-lg">
                          Question {index + 1}
                        </label>
                        <textarea
                          className="textarea textarea-bordered my-4 text-center w-full textarea-lg"
                          value={item.question}
                          disabled
                        />
                        <label className="text-secondary text-lg">
                          Your Answer
                        </label>
                        <input
                          type="text"
                          value={item.wrong}
                          disabled
                          className="text-center my-4 input input-bordered w-full max-w-xs text-xl"
                        />
                        <label className="text-success text-lg">
                          Correct Answer
                        </label>
                        <input
                          type="text"
                          value={item.answer}
                          disabled
                          className=" text-center my-4 input input-bordered w-full max-w-xs text-xl"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <Link to={"/"} className="btn btn-outline btn-sm">
            Move to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
