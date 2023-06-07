import React from 'react';
import './SearchBar.css';

function SearchBar(props){
    return (
        <form className ='form'>
            <input type= 'text'></input><br></br>
            <br></br>
            
            <button>Search</button><br></br>
            <br></br>
            <button>Save to spotify</button>
        </form>
    )
}

export default SearchBar ;