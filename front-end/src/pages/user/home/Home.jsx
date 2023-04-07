import { useContext } from "react";
import { QuizCard } from "../../../components/userside/QuizCard";
import { AllQuizDataContext } from "../../../context/userSide/AllQuizDataContextPovider";
import { GetAllQuizData } from "../../../helpers/quizHelpers/GetAllQuizDatas";

export const Home = () => {
  const { AllquizData, setAllQuizData } = useContext(AllQuizDataContext);

  return (
    <>
      <GetAllQuizData />
      <main className="h-screen">
        <div className="flex justify-center flex-wrap">
          <header className="p-4 flex my-6 justify-center">
            <h1 className="text-2xl md:text-3xl text-center font-extrabold font-serif text-white">
              Attend quizes and gain your knowledge!
            </h1>
          </header>
          <section className=" w-full flex justify-center my-2 mt-5 flex-wrap">
            {AllquizData.map((item, index) => {
             return <QuizCard key={index} quizData={item} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};
