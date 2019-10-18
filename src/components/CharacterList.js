import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharacterCard from './CharacterCard';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/`)
			.then(response => {
				setCharacters(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});

	}, []);

	return (
		<div className="list">
			{characters.map((character, index) => {
				return <CharacterCard key={index} character={character} />
			})}
		</div>
	)
}

export default CharacterList;