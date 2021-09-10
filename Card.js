import React from 'react';

const card = ({ name, birth_year, gender, image }) => {
    
    return (
        <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='hero' src='https://socialgeek.co/wp-content/uploads/2017/09/star-wars-logo.jpg'/>
        <div>
          <h2>{name}</h2>
          <p>{birth_year}</p>
          <p>{gender}</p>
          <p>{image}</p>
        </div>
        </div>
    )
}

export default card;