import React from 'react';

const AlbumCards = ({ albums }) => {

    return (
        <li className="album-cards">
            <img src={albums.cover} alt={"album : " + albums.name}/>
            <div className="album-infos">
                <h3 className="album-title">{albums.name}</h3>
                <h3 className="album-producer">Producer's name</h3>
                <p className="album-describe">{albums.description.substring(0, 150)}</p>
            </div>
        </li>
    );
};

export default AlbumCards;