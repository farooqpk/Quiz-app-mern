import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/admin/auths/Login"
import { Home } from "./pages/user/home/Home"
import {QueryClient,QueryClientProvider} from 'react-query'
import { AdminHome } from "./pages/admin/home/AdminHome"
import { ForgotPass } from "./pages/admin/auths/ForgotPass"
import { OtpForm } from "./pages/admin/auths/OtpForm"

const queryClient = new QueryClient()

function App() {
  
  return(<>
  
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/adminHome" element={<AdminHome/>} />
    <Route path="/forgotPass" element={<ForgotPass/>} />
    <Route path="/otpForm" element={<OtpForm/>} />
  </Routes>
  </BrowserRouter>
  </QueryClientProvider>

  </>)

}

export default App
