export const QuizFormBasicDetails = () => {
  return (
    <>
      <div className=" bg-white ">
        <form className="flex flex-col items-center">
          <div className="mt-5">
            <h1 className="text-xl font-semibold text-black text-center">
              Basic Details
            </h1>
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Title
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Description
            </label>
            <textarea
              rows="2"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Duration
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-7 w-4/5 flex flex-col items-center">
            <label className="text-lg block font-semibold text-gray-800 mb-2">
              Each Q Mark
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-5 w-4/5 flex flex-col items-center mb-3">
            <button className="btn btn-outline btn-sm">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};
