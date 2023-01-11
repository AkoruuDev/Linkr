import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Header = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const [change, setChange] = useState("down");
    const [popUp, setPopUp] = useState("none");
    function changeButton() {
        if (change === "down") {
            setChange("up");
            setPopUp("flex");

        } else {
            setChange("down");
            setPopUp("none");
        }
    }

    function signOut(){
        const promise = axios.delete("http://localhost:5000/signout", {headers: { "Authorization": `Bearer ${token}`}, });
        promise.then((res) => {alert("Logout efetuado com sucesso!"); navigate("/");});
        promise.catch((err) => {console.log(err); alert("Algo deu errado!")});
    }
    
    return (
        <>
        <MainHeader>
            <Logo>linkr</Logo>
            <Container>
                <Button onClick={changeButton}><ion-icon name={`chevron-${change}-outline`} ></ion-icon>
                <Overlay style={{ display: `${popUp}` }}>
        </Overlay>
                </Button>
                <Photo onClick={changeButton} src={""} alt=""></Photo>
            </Container>
            <Box style={{ display: `${popUp}` }} onClick={signOut}>Logout</Box>
        </MainHeader>
        
        </>
    )
}
const MainHeader = styled.div`
width: 100%;
height: 4.5em;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #151515;
padding: 0 .6em 0 2em;
position: relative;
`
const Logo = styled.h1`
font-size: 3em;
font-weight: 700;
color: #fff;
font-family: 'Passion One', cursive;
`
const Container = styled.div`
display: flex;
align-items: center;
`
const Button = styled.div`
font-size: 2em;
color: #fff;
margin-right: .2em;
cursor: pointer;
`
const Photo = styled.img`
width: 3.5em;
height: 3.5em;
background-color: #fff;
border-radius: 3em;
`
const Box = styled.div`
width: 9.3em;
height: 3em;
align-items: center;
justify-content: center;
background-color:#151515;
border-radius: 0 0 1.2em 1.2em;
position: absolute;
top: 4.5em;
right: 0;
color: #fff;
font-family: 'Lato', sans-serif;
font-weight: 700;
font-size: 1em;
cursor: pointer;
z-index: 10;
`
const Overlay = styled.div`
width: 100vw;
height: 100vh;
background-color: #000;
position:fixed;
top: 0;
left:0;
opacity: .2;
`
export default Header