//import logo from './logo.svg';
import SignUp from "./pages/log/SignUp";
import SignIn from "./pages/log/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import MyProfile from "./pages/contents/MyProfile";
import Profile from "./pages/contents/Profile";

export default function App () {
  return (
    <>
      < GlobalStyle />
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />           
          <Route path='/user/:id' element={< Profile />} />
          <Route path='/user/me' element={< MyProfile />} />          
      </Routes>
      </BrowserRouter>
    </>
  )
}