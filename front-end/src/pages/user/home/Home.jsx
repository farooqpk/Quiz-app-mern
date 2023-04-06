import { QuizCard } from "../../../components/userside/QuizCard";

export const Home = () => {
  return (
    <main className="h-screen">
      <div className="flex justify-center flex-wrap">
        <header className="p-4 flex my-6 justify-center">
          <h1 className="text-2xl md:text-3xl text-center font-extrabold font-serif text-white">
            Attend quizes and gain your knowledge!
          </h1>
        </header>
        <section className="w-full flex justify-center my-2 flex-wrap">
          <QuizCard />
          <QuizCard />
        </section>
      </div>
    </main>
  );
};
