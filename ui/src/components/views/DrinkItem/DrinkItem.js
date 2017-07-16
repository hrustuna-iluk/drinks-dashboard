import React from 'react';
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline';
import TiStarFullOutline from 'react-icons/lib/ti/star-full-outline';
import './DrinkItem.css'

export default ({ drink, onLike, onRate }) => (
	<div className="drink-item">
		<div className="drink-info">
			<div>Type: {drink.type}</div>
			<div>Brand: {drink.brand}</div>
			<div>Flavour: {drink.flavour}</div>
			<div>Likes: {drink.total_likes || 0}</div>
			<div>Rate: {drink.total_rate || 0} of 5</div>
		</div>
		<div className="icons">
			<span className="like-drink" onClick={ () => onLike(drink) }><TiHeartFullOutline /></span>
			<span className="rate-drink" onClick={ () => onRate(drink) }><TiStarFullOutline /></span>
		</div>				
	</div>
);