import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
    return (
       <div className='pa4'>
        <input className='pa3 ba b--green bg-light-yellow'
        type='search'
        placeholder='search character'
        onChange={searchChange}    
        />
        </div>
    );
}

export default SearchBox;