export const QuizCard = () => {
  return (
    <>
      <div className="card bg-gray-100 shadow-xl rounded-xl mx-5 flex flex-wrap p-2 my-3">
        <div className="card-body items-center text-center">
          <h2 className=" text-black font-bold text-xl md:text-2xl my-2">Shoes!</h2>
          <p className="text-zinc-700 text-lg md:text-xl font-serif my-2">If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-outline text-zinc-700 my-2">Start</button>
          </div>
        </div>
      </div>
    </>
  );
};
