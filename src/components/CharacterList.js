import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

	useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
			.then(response => {
        console.log(response);
        setCharacters(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});

  }, []);

	return (
    <div>
      <SearchForm characters={characters}/>
    </div>
	)
}

export default CharacterList;