import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
	// const cardComponent = robots.map((user,i) => {
	// 	return (<Card 
	// 	key={i} 
	// 	id= {robots[i].id} 
	// 	name={robots[i].name} 
	// 	email={robots[i].email}
	// 	/>
	// 	);
	// })

	if(true){
		throw new Error('NOOOOOOOO');
	}
	return (
		<div>
		{/*{cardComponent}*/}
		
		{/*I can either put card component in its own const and call it like above 
		or put the entire declaration in brackets like below. */}
		{
		robots.map((user,i) => {
		return (<Card 
		key={i} 
		id= {robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		/>
		);
	})
		}
		</div>	
		);
}

export default CardList;