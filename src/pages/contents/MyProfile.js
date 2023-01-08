import styled from "styled-components"
import profile from "../../assets/profile.jpg";


export default function Profile () {
    return (
        
        <Container>
            <Main>
                <Info>
                    <Image src={profile} alt='profile' />
                    <InfoBox>
                        <Name>{'its beauty name'}</Name>
                        <Member>Member since {'DD/MM/YYYY'}</Member>
                    </InfoBox>
                </Info>
                <Posts>
                signup       <div><span>✨</span> {'0'} Posts</div>
                    <div><span>✨</span> {'0'} Likes</div>
                </Posts>
                <Support>
                    <div>{'0'} Supports</div>
                    <div>My Supports</div>
                </Support>
                <Edit>Edit acount</Edit>
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
    justify-content: space-between;
    align-items: center;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
`

const InfoBox = styled.div`
    width: calc(75vw - 100px);
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
    margin-bottom: 65px;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
`

const Support = styled.div`
    width: 100%;
    & div{
        width: 100%;
        height: 65px;
        margin: 15px 0;
        border-radius: 5px;
        font-weight: 700;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    & :nth-child(1) {
        background-color: #454545;
        color: #F4F4F4;
    }

    & :nth-child(2) {
        background-color: #B7B9BB;
        color: #333333;
        cursor: pointer;
        transition: all 0.3s linear;

        &:hover {
            background-color: #5C6F5C;
            color: #B7B9BB;
        }
    }
`
const Edit = styled.div`
    width: 100%;
    height: 65px;
    margin: 15px 0;
    border-radius: 5px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B7B9BB;
    color: #333333;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        background-color: #6272e1;
        color: #B7B9BB;
    }

`