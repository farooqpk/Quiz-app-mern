import {Link} from 'react-router-dom'

export const QuizCard = ({quizData}) => {
  

  return (
    <>
      <div className="md:w-2/4 sm:w-2/4 lg:w-1/4 w-3/4 card bg-gray-200 shadow-xl rounded-xl mx-5 flex flex-wrap my-2">
        <div className="card-body items-center text-center w-full">
          <h2 className=" text-black font-bold text-xl md:text-2xl my-2 w-full break-words ">
        {quizData.Title}
          </h2>
          <p className="text-zinc-700 text-lg md:text-xl font-serif mt-2 break-words">
           {quizData.Description}
          </p>
          <p className="text-zinc-700 text-lg md:text-xl font-serif mt-2 break-words">
           {quizData.Duration} minutes
          </p>
          <p className="text-zinc-700 text-lg md:text-xl font-serif mt-2 break-words">
           {quizData.Questions.length} questions
          </p>
          <p className="text-zinc-700 text-lg md:text-xl font-serif mt-2 break-words">
           total {quizData.EachQMark * quizData.Questions.length } mark
          </p>
          <div className="card-actions mt-3">
            <Link to={"/quizPage"} state={quizData} className="btn btn-outline text-zinc-700">
              Start
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
