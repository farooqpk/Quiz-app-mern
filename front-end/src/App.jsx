import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/admin/auths/Login";
import { Home } from "./pages/user/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminHome } from "./pages/admin/home/AdminHome";
import { ForgotPass } from "./pages/admin/auths/ForgotPass";
import { OtpForm } from "./pages/admin/auths/OtpForm";
import { ResetPass } from "./pages/admin/auths/ResetPass";
import {VerifyTokenGet}from './helpers/authHelpers/VerifyTokenGet'
import { EmailContextProvider } from "./context/adminSide/EmailContextProvider";
import { CreateQuiz } from "./pages/admin/quiz/CreateQuiz";
import { CreateQuizFormNextBtnContextProvider} from "./context/adminSide/CreateQuizFormNextBtnContextProvider";



const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CreateQuizFormNextBtnContextProvider>
        <EmailContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminHome" element={<VerifyTokenGet children={<AdminHome/>} />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/otpForm" element={<OtpForm />} />
            <Route path="/resetPass" element={<ResetPass />} />
            <Route path="/createQuiz" element={<CreateQuiz />} />
          </Routes>
        </BrowserRouter>
        </EmailContextProvider>
        </CreateQuizFormNextBtnContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
