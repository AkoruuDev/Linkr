import { useState } from "react";
import styled from "styled-components"
import profile from "../../assets/profile.jpg";


export default function MyProfile () {
    return (
        
        <Container>
            <Main>
                <Info>
                    <Image src={profile} alt='profile' />
                    <InfoBox>
                        <Name>{'Guilherme Kauane Rodrigues de Souza Lima'}</Name>
                        <Member>Member since {'DD/MM/YYYY'}</Member>
                    </InfoBox>
                </Info>
                <Follow>
                    <div>{'0'} Followers</div>
                </Follow>
                <Posts>
                signup       <div><span>✨</span> {'0'} Posts</div>
                    <div><span>✨</span> {'0'} Likes</div>
                </Posts>
                <Edit>Edit Acount</Edit>
            </Main>
        </Container>
       
    )
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #333333;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = styled.section`
    width: 75vw;
    height: 75vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    width: 100%;
    margin-bottom: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
`

const InfoBox = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Name = styled.h1`
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 700;
    margin-bottom: 8px;
`

const Member = styled.h2`
    font-size: 12px;
    color: #B7B9BB;
`

const Posts = styled.h3`
    width: 80%;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
`

const Follow = styled.div`
    width: 100%;
    margin: 35px 0;

    display: flex;
    justify-content: space-between;
    & div{
        width: 100%;
        height: 65px;
        margin: 15px 0;
        border-radius: 5px;
        font-weight: 700;
        background-color: #454545;
        color: #F4F4F4;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Edit = styled.div`
    width: 75vw;
    height: 65px;
    border-radius: 5px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B7B9BB;
    color: #333333;
    cursor: pointer;
    transition: all 0.3s linear;

    position: absolute;
    bottom: 25px;

    &:hover {
        background-color: #6272e1;
        color: #B7B9BB;
    }

`