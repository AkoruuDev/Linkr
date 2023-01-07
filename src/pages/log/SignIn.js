import React from 'react';
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { MainContainer, BlackContainer, Logo, Description, GreyContainer, Email, Password, LogIn, SignUp } from '../../styles/signInStyles';


const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);    
   
    function signIn(e) {
        setDesabilitar(true);
        e.preventDefault();
        const promise = axios.post("http://localhost:5000/signin", {email: email, password: password});
        promise.then((res) => { localStorage.setItem("token", res.data.token); console.log(res); navigate("/timeline")});
        promise.catch((err) => {
            if(err.response.status === 409){ alert("Usuário logado.")};
            if(err.response.status === 401){ alert("Usuário não cadastrado.")};
            setDesabilitar(false)
        });
    }

  return (
    <MainContainer>
        <BlackContainer>
            <Logo>linkr</Logo>
            <Description>
                save, share and discover
                the best links on the web
            </Description>
       </BlackContainer>
        <GreyContainer>
            <form onSubmit={signIn}>
                <Email type="email" placeholder='e-mail' value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></Email>
                <Password type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required disabled={desabilitar}></Password> 
                <LogIn type='submit' disabled={desabilitar}>Log In</LogIn> 
                <SignUp onClick={()=> navigate("/signUp")} disabled={desabilitar}>First time? Create an account!</SignUp>          
            </form>
        </GreyContainer>
    </MainContainer>
  )
}

export default SignIn;