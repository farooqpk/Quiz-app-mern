import { ChangeEmail } from "../../../components/adminside/ChageEmail";
import { ChangePass } from "../../../components/adminside/ChangePass";
import { AdminNav } from "../../../components/adminside/AdminNav";
import { Footer } from "../../../components/commons/Footer";

export const AdminProfile = () => {
  return (
    <>
      <AdminNav />
      <main className="w-full mt-9 overflow-auto flex justify-center flex-col items-center mb-28">
        <section className="w-5/6 md:w-1/2 bg-white flex justify-center flex-col items-center rounded-xl p-3">
          <h1 className="text-black font-semibold text-2xl mt-3">Profile</h1>
          <ChangeEmail />
          <ChangePass />
        </section>
      </main>
      <Footer />
    </>
  );
};
