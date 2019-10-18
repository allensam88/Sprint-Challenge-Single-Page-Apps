import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

	useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
			.then(response => {
        console.log(response);
        const data = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(data);
			})
			.catch(error => {
				console.log(error);
			});

	}, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

	return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="list">
        {characters.map(character => {
          return <CharacterCard character={character} />
        })}
      </div>
    </div>
	)
}

export default CharacterList;