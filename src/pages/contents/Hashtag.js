import { useParams } from "react-router-dom"
import styled from 'styled-components';

export default function Hashtag(){

    const {hashtag} = useParams()

    return (
        <>
            <Container>
                <Wrapper>
                    <h1># {hashtag}</h1>
                </Wrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 100px;
  width: min(100vw, 614px);
  h1 {
    color: #ffffff;
    margin-left: 17px;
    margin-bottom: 19px;
  }
`;