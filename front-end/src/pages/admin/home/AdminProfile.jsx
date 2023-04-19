import { ChangeEmail } from "../../../components/adminside/ChageEmail";
import { ChangePass } from "../../../components/adminside/ChangePass";

export const AdminProfile = () => {
  return (
    <>
      <main className="w-full  h-[calc(100vh-74px)] overflow-auto flex justify-center flex-col items-center">
        <section className="w-5/6 md:w-1/2 bg-white flex justify-center flex-col items-center rounded-xl p-3">
          <h1 className="text-black font-semibold text-2xl mt-3">Profile</h1>
          <ChangeEmail />
          <ChangePass />
        </section>
      </main>
    </>
  );
};
