import React from 'react'

function PokeList({cards, handleClick}) {
    const cardItems = cards.map(card =>{
        // to pass handleClick a custom argument, must wrap it in anonymous function
    return <li onClick={()=>{handleClick(card.id)}}>{card.name}</li>
    });
    return (
    <ul>
        {cardItems}
    </ul>
    )
}

export default PokeList;
