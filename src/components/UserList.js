import { useNavigate } from "react-router-dom"
import styled from "styled-components";

export function UserList({ user }) {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`/users/${user.id}`)}>
            <Profile src={user.profile} alt='Profile' />
            <Name>{user.name}</Name>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    height: 80px;
    border-top: #c6c6c6;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
`;

const Profile = styled.img`
    width: 65px;
    height: 65px;
    padding: 0 12px;
    border-radius: 50%;
`;

const Name = styled.h1`
    font-size: 18px;
    font-family: 'Oswald';
    color: #c6c6c6;

    &:hover {
        color: #b9b9b9;
    }
`;