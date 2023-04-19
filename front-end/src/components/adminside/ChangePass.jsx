export const ChangePass = () => {
  return (
    <>
      <form className="w-5/6 my-3 border border-dashed border-gray-400">
        <h1 className="text-center text-xl font-serif mt-3">
          Change Password?
        </h1>
        <div className="flex flex-col items-center justify-center gap-7 my-4">
          <input
            type="password"
            placeholder="enter current password"
            className="w-5/6 input input-md input-bordered input-ghost"
          />
          <input
            type="password"
            placeholder="enter new password"
            className="w-5/6 input input-md input-bordered input-ghost"
          />
          <button className="btn btn-outline  btn-sm">save</button>
        </div>
      </form>
    </>
  );
};
