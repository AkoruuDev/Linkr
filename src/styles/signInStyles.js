import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;

    @media(max-width: 57em){
        width: 100%;
        display: block;
    }
`
export const BlackContainer = styled.div`
    width: 63%;
    background-color: #151515;
    padding: 10em 0 0 9em;
    @media(max-width: 57em){
        width: 100%;
        padding: .7em;     
    }
`
export const Logo = styled.h1`
    font-size: 6.6em;
    font-weight: 700;
    color: #fff;
    font-family: 'Passion One', cursive;
    @media(max-width: 57em){
        width: 100%;
        text-align: center;
        font-size: 4.76em;    
    }
`
export const Description = styled.h2`
    font-size: 2.7em;
    font-weight: 700;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    width: 10.6em;
    line-height: 1.5em;
    @media(max-width: 57em){
        width: 70%;
        font-size: 1.5em;
        text-align: center;
        margin: 0 auto 1em auto;    
    }
    @media(max-width: 33.75em){
        width: 70%;
        text-align: center;
        
    }
    @media(max-width: 22.5em){
        width: 80%;
        text-align: center;       
    }
    @media(max-width: 25.75em){
        width: 70%;
        text-align: center;
    }
    @media(max-width: 17.5em){
        width: 100%;
        text-align: center;       
    }
`
export const GreyContainer = styled.div`
    width: 37%;
    height: 100vh;
    background-color: #333333;
    padding: 10em 0 0 3.65em;
    @media(max-width: 57em){
        width: 100%;
        height: 100vh;
        padding: 2.5em .7em .7em .7em;      
    }
`
export const Email = styled.input`
    width: 80%;
    height: 3em;
    border: none;
    border-radius: .4em;
    padding-left: .7em;
    font-family: 'Oswald', sans-serif;
    background-color: #fff;
    margin-bottom: .8em;
    font-weight: 700;
    font-size: 1.5em;
    color: #9f9f9f;
    display: flex;
    align-items: center;
    @media(max-width: 57em){
        width: 90%;
        margin: 0 auto .8em auto;    
    }
`
export const Password = styled(Email)`
`
export const LogIn = styled.button`
    width: 80%;
    height: 3em;
    border: none;
    border-radius: .4em;
    padding-left: .7em;
    font-family: 'Oswald', sans-serif;
    background-color: #1877F2;
    margin-bottom: 1.4em;
    font-weight: 700;
    font-size: 1.5em;
    color: #fff;
    cursor: pointer;
    @media(max-width: 57em){
        width: 90%;
        margin: 0 5% .8em 5%;       
    }
`
export const SignUp = styled.p`
    width: 80%;
    display: flex;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.25em;
    color:#fff;
    text-decoration: underline;
    cursor: pointer;
    text-align: center; 
    @media(max-width: 57em){
        width: 90%;
        margin: 0 auto .8em auto;  
        text-align: center;    
    }
`;