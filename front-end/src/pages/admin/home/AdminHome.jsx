import { useContext} from "react";
import { AdminNav } from "../../../components/adminside/AdminNav";
import { Footer } from "../../../components/commons/Footer";
import { QuizCard } from "../../../components/commons/QuizCard";
import { AllQuizDataContext } from "../../../context/common/AllQuizDataContextPovider";
import { GetAllQuizData } from "../../../helpers/quizHelpers/GetAllQuizDatas";

export const AdminHome = () => {
  const { AllquizData, setAllQuizData } = useContext(AllQuizDataContext);

  return (
    <>
      <GetAllQuizData />
      <AdminNav/>
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
                <>
                  <QuizCard
                    key={index}
                    quizData={item}
                    adminSide={"adminSide"}
                  />
                </>
              )
            })}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
