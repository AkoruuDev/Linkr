//import logo from './logo.svg';
// import SignUp from "./pages/log/SignUp";
import SignIn from "./pages/log/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  return (
    <>
      < GlobalStyle />
      <BrowserRouter>
        <Routes>
          { <Route path="/" element={<SignIn />} />
          /*<Route path="/cadastre" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}