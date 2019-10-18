import React from 'react';

const CharacterCard = props => {
	return (
		<div className="card">
      <h2>{props.character.name}</h2>
			<img src={props.character.image} alt="rick and morty character" />
		</div>
	)
}

export default CharacterCard;