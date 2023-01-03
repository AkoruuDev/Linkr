import styled from "styled-components";
import { Link} from "react-router-dom";
//import { useState } from "react";
//import axios from "axios"

export default function SignUp() {
    return (
        <Container>
            <Title>
                <div>
                    <h1>linkr</h1>
                    <p>save, share and discover
                        the best links on the web</p>
                </div>
            </Title>
            <SignUpInputs>
                <form onSubmit="{dadosUsuarioCadastro}">
                    <input
                        type={'email'}
                        placeholder={"e-mail"}
                    //onChange={(e) => setNome(e.target.value)} disabled={carregando}
                    ></input>
                    <input
                        type={'password'}
                        placeholder={"password"}
                    //onChange={(e) => setEmail(e.target.value)} disabled={carregando}
                    ></input>
                    <input
                        type={'text'}
                        placeholder={"username"}
                    //onChange={(e) => setSenha(e.target.value)} disabled={carregando}
                    ></input>
                    <input
                        type={'url'}
                        placeholder={"picture url"}
                    //onChange={(e) => setSenhaConfirmada(e.target.value)} disabled={carregando}
                    ></input>
                    <button >Sign Up</button>
                    {/* <Link to="/signup"><p>Switch back to log in</p></Link>  */}
                </form>
            </SignUpInputs>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
display:flex;
`
const Title = styled.div`
background-color: #151515;
box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
color: #FFFFFF;
width:905px;
display: flex;
align-items: center;
justify-content: center;
div{
    width: 650px;
}
h1{
    font-size: 106px;
    font-family: Passion One;
    font-size: 106px;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
}
p{
    width: 442px;
    border-radius: nullpx;
    font-family: Oswald;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
}
`
const SignUpInputs = styled.div`
background-color: red;
width:532px;
a{
    text-decoration: none;
}
background-color:#333333;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
font-family: 'Oswald';
form{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
input{
margin-top: 10px;
border: none;
border: 1px solid #D4D4D4;
border-radius: 5px;
width: 429px;
height: 60px;
font-family: 'Oswald';
font-weight: 700;
font-size: 27px;
color:#9F9F9F;
}
input::placeholder{   
font-size: 27px;
color:#9F9F9F;
padding-left: 15px;
line-height: 40px;
}
button{
width: 429px;
height: 65px;
margin-top: 10px;
background-color:#1877F2 ;
color: #FFFFFF;
border: none;
border-radius: 5px;
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 40px;
}
p{
padding-top: 20px;
font-size: 14px;
color: #FFFFFF;
text-decoration-line: underline;
}
`