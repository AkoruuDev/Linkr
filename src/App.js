//import logo from './logo.svg';
import { Reset } from "./assets/Reset";
import SignUp from "./pages/SignUp.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles.js";
import MyProfile from "./pages/contents/MyProfile.js";
import Profile from "./pages/contents/Profile.js";
import Hashtag from "./pages/contents/Hashtag.js";
import Feed from "./pages/contents/Feed.js";



export default function App () {
  return (
  <>
    <BrowserRouter>
      <Reset />
      < GlobalStyle />
        <Routes>
          {/* <Route path="/" element={<SignIn />} />
          <Route path="/cadastre" element={<SignUp />} /> */}
          <Route path="/" element={<SignUp />} />
          <Route path="feed" element={<Feed />} />
          <Route path='/user/:id' element={< Profile />} />
          <Route path='/user/me' element={< MyProfile />} />
          <Route path='/hashtag/:hashtag' element={<Hashtag />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}