import React from 'react';

const HomeCards = ({ albums }) => {

    return (
        <li className="album-cards">
            <h2 className='home-album-title'>Album</h2>
            <img src={albums.cover} alt={"album : " + albums.name}/>
            <div className="album-infos">
                <h3 className="album-title">{albums.name}</h3>
            </div>
        </li>
    );
};

export default HomeCards;