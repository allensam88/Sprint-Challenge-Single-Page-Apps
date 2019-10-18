import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 25px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  width: 300px;
  line-height: 30px;
  font-size: 20px;
  padding: 5px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredCharacter, setFilteredCharacter] = useState([]);

	useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
			.then(response => {
        console.log(response);
        const data = response.data.results
        setCharacters(data);
        setFilteredCharacter(data);
			})
			.catch(error => {
				console.log(error);
			});

  }, []);
  
  useEffect(() => {
    setFilteredCharacter(
      characters.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, characters]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

	return (
    <div>
      <StyledForm className="search">
        <StyledInput
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </StyledForm>
      <StyledCardsContainer className="list">
        {filteredCharacter.map(character => {
          return <CharacterCard key={character.name} character={character} />
        })}
      </StyledCardsContainer>
    </div>
	)
}

export default CharacterList;