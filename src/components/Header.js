import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  background-color: #E89242FF;
  color: #24325FFF;
  padding: 30px;
  font-weight: bold;
  font-size: 50px;
  border-radius: 20px;
  border: 1px solid #24325FFF;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  text-align: center;
  color: #E89242FF;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  padding 5px 0;
  background-color: #24325FFF;
  width: 150px;

  :hover {
    color: #24325FFF;
    background-color: #E89242FF;
  }
`;

export default function Header() {
  return (
    <header className="ui centered">
      <Title className="ui center">Rick &amp; Morty Fan Page</Title>
      <NavBar>
        <StyledLink to={`/`}>Home</StyledLink>
        <StyledLink to={'/characters/'}>Characters</StyledLink>
      </NavBar>
    </header>
  );
}
