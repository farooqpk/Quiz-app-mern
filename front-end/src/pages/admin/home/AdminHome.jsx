import { Fragment, useContext, useEffect } from "react";
import { AdminNav } from "../../../components/adminside/AdminNav";
import { Footer } from "../../../components/commons/Footer";
import { QuizCard } from "../../../components/commons/QuizCard";
import { AllQuizDataContext } from "../../../context/common/AllQuizDataContextPovider";
import { GetAllQuizData } from "../../../helpers/quizHelpers/GetAllQuizDatas";
import { CreateQuizFormNextBtnContext } from "../../../context/adminSide/CreateQuizFormNextBtnContextProvider";
import { CreateQuizIsFinishedContext } from "../../../context/adminSide/CreateQuizIsFinishedContextProvider";

export const AdminHome = () => {
  const { AllquizData } = useContext(AllQuizDataContext);
  const { setIsNextClick } = useContext(CreateQuizFormNextBtnContext);
  const { SetisFinished } = useContext(CreateQuizIsFinishedContext);

  useEffect(() => {
    // both quizform(isnextclick and isfinished) state is updates to default
    setIsNextClick(false);
    SetisFinished(false);
  }, []);

  return (
    <>
      <GetAllQuizData />
      <AdminNav />
      <main className="mb-36">
        <div className="flex justify-center flex-wrap">
          <header className="p-4 flex my-6 justify-center">
            <h1 className="text-2xl md:text-3xl text-center font-extrabold font-serif text-white">
              ALL QUIZES
            </h1>
          </header>
          <section className=" w-full flex justify-center my-2 mt-5 flex-wrap">
            {AllquizData.map((item, index) => {
              return (
                <Fragment key={item._id}>
                  <QuizCard quizData={item} adminSide={"adminSide"} />
                </Fragment>
              );
            })}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
