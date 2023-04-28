import { useContext, useEffect } from "react";
import { QuizFormBasicDetails } from "../../../components/adminside/QuizFormBasicDetails";
import { QuizFormQuestions } from "../../../components/adminside/QuizFormQuestions";
import { CreateQuizFormNextBtnContext } from "../../../context/adminSide/CreateQuizFormNextBtnContextProvider";
import { CreateQuizIsFinishedContext } from "../../../context/adminSide/CreateQuizIsFinishedContextProvider";
import { useNavigate } from "react-router-dom";

export const CreateQuiz = () => {

  const navigate = useNavigate();
  const { isNextClick } = useContext(CreateQuizFormNextBtnContext);
  const { isFinished } = useContext(CreateQuizIsFinishedContext);

  useEffect(() => {
    if (isFinished === true) {
      navigate("/adminHome");
    }
  }, [isFinished]);

  return (
    <>
      <section className="h-screen w-full flex justify-center flex-wrap">
        <div className="w-4/5 h-auto py-3  my-16 flex flex-col">
          <h1 className="text-center text-3xl mb-5  text-white font-bold">
            Make Quiz
          </h1>
          {!isNextClick ? <QuizFormBasicDetails /> : <QuizFormQuestions />}
        </div>
      </section>
    </>
  );
};
