import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/admin/auths/Login";
import { Home } from "./pages/user/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminHome } from "./pages/admin/home/AdminHome";
import { ForgotPass } from "./pages/admin/auths/ForgotPass";
import { OtpForm } from "./pages/admin/auths/OtpForm";
import { ResetPass } from "./pages/admin/auths/ResetPass";
import { VerifyToken } from "./helpers/authHelpers/VerifyToken";
import { EmailContextProvider } from "./context/EmailContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <EmailContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminHome" element={<VerifyToken children={<AdminHome/>} />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/otpForm" element={<OtpForm />} />
            <Route path="/resetPass" element={<ResetPass />} />
          </Routes>
        </BrowserRouter>
        </EmailContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
