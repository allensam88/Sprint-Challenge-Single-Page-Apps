import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color: #24325FFF;
`;

const StyledImage = styled.img`
  margin: 0 auto;
  border: 10px solid #E89242FF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
        <StyledImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
