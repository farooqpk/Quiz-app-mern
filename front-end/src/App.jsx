import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/admin/auths/Login";
import { Home } from "./pages/user/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminHome } from "./pages/admin/home/AdminHome";
import { ForgotPass } from "./pages/admin/auths/ForgotPass";
import { OtpForm } from "./pages/admin/auths/OtpForm";
import { ResetPass } from "./pages/admin/auths/ResetPass";
import { VerifyTokenGet } from "./helpers/authHelpers/VerifyTokenGet";
import { EmailContextProvider } from "./context/adminSide/EmailContextProvider";
import { CreateQuiz } from "./pages/admin/quiz/CreateQuiz";
import { CreateQuizFormNextBtnContextProvider } from "./context/adminSide/CreateQuizFormNextBtnContextProvider";
import { CreateQuizFormDataContextProvider } from "./context/adminSide/CreateQuizFormDataContextProvider";
import { AllQuizDataContextProvider } from "./context/common/AllQuizDataContextPovider";
import { QuizPage } from "./pages/user/quiz/QuizPage";
import { SelectedAnsContextProvider } from "./context/userSide/SelectedAnsContextProvider";
import { QuizResult } from "./pages/user/quiz/QuizResult";
import { CreateQuizIsFinishedContextProvider } from "./context/adminSide/CreateQuizIsFinishedContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SelectedAnsContextProvider>
          <AllQuizDataContextProvider>
            <CreateQuizFormDataContextProvider>
              <CreateQuizIsFinishedContextProvider>
                <CreateQuizFormNextBtnContextProvider>
                  <EmailContextProvider>
                    <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                          path="/adminHome"
                          element={<VerifyTokenGet children={<AdminHome />} />}
                        />
                        <Route path="/forgotPass" element={<ForgotPass />} />
                        <Route path="/otpForm" element={<OtpForm />} />
                        <Route path="/resetPass" element={<ResetPass />} />
                        <Route
                          path="/createQuiz"
                          element={<VerifyTokenGet children={<CreateQuiz />} />}
                        />
                        <Route path="/quizPage" element={<QuizPage />} />
                        <Route path="/quizResult" element={<QuizResult />} />
                      </Routes>
                    </BrowserRouter>
                  </EmailContextProvider>
                </CreateQuizFormNextBtnContextProvider>
              </CreateQuizIsFinishedContextProvider>
            </CreateQuizFormDataContextProvider>
          </AllQuizDataContextProvider>
        </SelectedAnsContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
