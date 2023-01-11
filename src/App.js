//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles.js";
import MyProfile from "./pages/contents/MyProfile.js";
import Profile from "./pages/contents/Profile.js";
import Feed from "./pages/contents/Feed.js";
import SignUp from "./pages/log/SignUp.js";
import SignIn from "./pages/log/SignIn.js";

export default function App () {
  return (
    <>
      < GlobalStyle />
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<SignIn />} />
          <Route path="/feed" element={<Feed />} />          
          <Route path="/sign-up" element={<SignUp />} />           
          <Route path='/user/:id' element={< Profile />} />
          <Route path='/user/me' element={< MyProfile />} />          
      </Routes>
      </BrowserRouter>
    </>
  )
}