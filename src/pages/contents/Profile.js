import styled from "styled-components"

export default function Profile () {
    return (
        <Container>
            <Main>
                <Info>
                    <Image src={'profile'} alt='profile' />
                    <InfoBox>
                        <Name>{'its beauty name'}</Name>
                        <Member>Member since {'DD/MM/YYYY'}</Member>
                    </InfoBox>
                </Info>
                <Posts>
                    <div><span>✨</span> {'0'} Posts</div>
                    <div><span>✨</span> {'0'} Likes</div>
                </Posts>
                <Support>
                    <div>{'0'} Supports</div>
                    <div>Support</div>
                </Support>
            </Main>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #4d4d4d;

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

const Info = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Image = styled.section`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
`

const InfoBox = styled.section`
    width: calc(75vw - 100px);
    display: flex;
    flex-direction: column;
    justify-content: end;
`

const Name = styled.section`
`

const Member = styled.section`
`

const Posts = styled.section`
`

const Support = styled.section`
`