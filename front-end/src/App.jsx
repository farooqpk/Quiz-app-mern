import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/admin/Login"
import { Home } from "./pages/home/Home"
import {QueryClient,QueryClientProvider} from 'react-query'
import { AdminHome } from "./pages/admin/AdminHome"
import { ForgotPass } from "./pages/admin/ForgotPass"

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
  </Routes>
  </BrowserRouter>
  </QueryClientProvider>

  </>)

}

export default App
