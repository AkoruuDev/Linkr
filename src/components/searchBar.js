import { useEffect, useState } from "react";
import styled from "styled-components";
import {searchProfileList } from "../database/database.js";
import { UserList } from "./UserList.js";

export function searchBar(search) {
    const [countChar, setCountChar] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        if (countChar > 3) {
            searchProfileList(search)
                .then(res => {
                    console.log(res.data);
                    setList(res.data);
                })
                .catch(err => {
                    console.log(err.data.message);
                })
        }
    }, [countChar]);

    return (
        <Container>
            <SearchBar type='search' placeholder='Search by user' autocomplete='on' onChange={() => setCountChar(countChar + 1)} />
            {/* Search Icon */}
            <ListBox>{list.map(user => {
                return(

                    <UserList key={user.id} user={user} />
                )
            })}</ListBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 45px;

    position: relative;
`;

const SearchBarr = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 12px;
    border-radius: 8px;
    background-color: #FFFFFF;
    border: #000000;
    outline: none;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    &::placeholder {
        color: #c6c6c6;
    }
`;

const ListBox = styled.nav`

position: absolute;
    width: 100%;
    background-color: white;
    padding: 12px;
    border-radius: 0 0 8px 8px;

    position: absolute;
    top: 45px;
    left: 0;
    z-index: 1;
`