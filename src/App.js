//import logo from './logo.svg';
import { Reset } from "./assets/Reset";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}