import React from 'react';

const CharacterCard = props => {
	return (
		<div className="card">
			<img src={props.character.image} alt="rick and morty character" />
		</div>
	)
}

export default CharacterCard;