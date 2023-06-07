import React from 'react';

function SearchResult(props){
    return (
        <>
        <p>Results</p>
        <h2>{props.songTitle}</h2>
        <h3>{props.artistName} </h3>
        </>
    )
}

export default SearchResult