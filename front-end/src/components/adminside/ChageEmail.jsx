export const ChangeEmail = () => {
  return (
    <>
      <form className="w-5/6 my-3 mt-4 border border-dashed border-gray-400">
        <h1 className="text-center text-xl font-serif mt-3">Change Email?</h1>
        <div className="flex flex-col items-center justify-center gap-7 my-4">
          <input
            type="email"
            placeholder="enter current email"
            className="w-5/6 input input-md input-bordered input-ghost"
          />
          <input
            type="email"
            placeholder="enter new email"
            className="w-5/6 input input-md input-bordered input-ghost"
          />
          <button className="btn btn-outline  btn-sm">save</button>
        </div>
      </form>
    </>
  );
};
