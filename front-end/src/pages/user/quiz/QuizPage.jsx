export const QuizPage = () => {
  return (
    <>
      <main className="h-auto w-full flex justify-center items-center">
       
          <header className="bg-gray-200 fixed top-0 w-full z-10">
            <div className="flex justify-center">
              <h1 className="text-black font-semibold text-xl">Title</h1>
            </div>
            <div className="flex justify-evenly mt-5">
              <p className="text-black">timer</p>
              <p className="text-black">total mark</p>
            </div>
          </header>

          <div className=" my-6 w-5/6 mt-20">
          {Array(4)
            .fill()
            .map((_, index) => (
              <section key={index} className="mt-3 bg-gray-100 rounded-lg scroll-m-0">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-black p-3">{`Question #${index + 1}`}</span>
                  <hr className="border border-slate-200 w-full my-1" />
                  <p className="text-black mt-2 break-words p-3">
                    Here is the question?
                  </p>
                  <select className="select text-center text-black select-bordered w-full max-w-xs mt-3 bg-slate-50">
                    <option disabled selected>
                      select
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </section>
            ))}
          
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
