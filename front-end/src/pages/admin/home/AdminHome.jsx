import { AdminNav } from "../../../components/AdminNav";
import { Footer } from "../../../components/Footer";

export const AdminHome = () => {
  return (
    <>
      <section className="h-screen">
        <div>
          <AdminNav />
        </div>
        <div className="p-3 mt-20 flex justify-center">
            <h1>its content section</h1>
        </div>
        <div>
          <Footer/>
        </div>
      </section>
    </>
  );
};
