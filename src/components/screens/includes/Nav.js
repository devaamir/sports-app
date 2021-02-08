import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
            <Header>
                <Link to='/sports-app'>
                    <Heading>Jasu's Sports App</Heading>
                </Link>
                <Ul>
                <Link to='/sports-app'>
                    <Items className="active">Matches</Items>
                </Link>
                <Link to='/sports-app/table'>
                    <Items>Table</Items>
                </Link>
                <Link to='/sports-app/news'>
                    <Items>News</Items>
                </Link>
                </Ul>
            </Header>
    )
}

const Header = styled.header`
    background: #fff;
    color: #DD0543;
    padding: 50px 100px 0; 
    border-bottom: 15px solid #DD0543;
`;

const Heading = styled.h1`
    font-size: 46px;
    color: #DD0543;
    cursor: pointer;
`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    margin: 30px 0 0;
`;

const Items = styled.li`
    padding: 25px;
    color: #000;
    &:hover {
        background: #DD0543;
        color: #fff;
    }
`;