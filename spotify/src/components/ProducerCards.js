import React from 'react';

const ProducerCards = ({ artists }) => {
    return (
        <li className="producer-cards">
            <h3 className="producer-name">{artists.name}</h3>
            <img src={artists.photo} alt={"producer : " + artists.name}/>
            <div className="producer-infos">
                <div className="producer-bio">
                    <h3 className="bio-title">Biography</h3>
                    <p className="bio-content">{artists.bio}</p>
                </div>
                <div className="producer-description">
                    <h3 className="describe-title">Description</h3>
                    <p className="describe-content">{artists.description}</p>
                </div>
            </div>
        </li>
    );
};

export default ProducerCards;