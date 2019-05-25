import React from 'react';

function SearchResults(props){



    return (
        <div className="search-item">
            {props.item.title ? <p>{props.item.title}</p> : <p>{props.item.name}</p>}

            {props.item.poster_path ? 
                <img 
                src={`http://image.tmdb.org/t/p/original${props.item.poster_path}`} 
                alt={props.item.name}
                className="search-poster"
                />
             : 
                <img src="https://previews.123rf.com/images/leodekol/leodekol1705/leodekol170500001/77299588-retro-movie-film-frame-.jpg"
                className="search-poster"
                alt="no poster available"
                />
            }

            <p>{props.item.vote_average} average score</p>
        </div>
    )
}

export default SearchResults;