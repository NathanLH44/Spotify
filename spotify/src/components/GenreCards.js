import React from 'react';

const GenreCards = ({ genres }) => {

    return (
        <li className="genre-cards">
            <img src={"./img/genre-img/" + genres.name + ".jpeg"} alt="Genres images"/>
            <div className="genre-infos">
                <h3 className="genre-title">{genres.name}</h3>
            </div>
        </li>
    );
};

export default GenreCards;