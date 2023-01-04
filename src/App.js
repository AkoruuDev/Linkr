//import logo from './logo.svg';
// import SignUp from "./pages/log/SignUp";
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
          {/* <Route path="/" element={<SignIn />} />
          <Route path="/cadastre" element={<SignUp />} /> */}
          <Route path='/user/:id' element={< Profile />} />
          <Route path='/user/me' element={< MyProfile />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}