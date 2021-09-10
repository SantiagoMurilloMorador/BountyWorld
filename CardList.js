import React from 'react';
import Card from './Card';

const CardList = ({ Characters }) => {
    
    return (
    <div>
    {Characters.map((people, i) => {
        return (
        <Card
        key={i}
        name={Characters[i].name}
        birth_year={Characters[i].birth_year} 
        gender={Characters[i].gender} image={Characters[0].image}/>
        );
    })
    }
    </div>
    );
}


export default CardList;