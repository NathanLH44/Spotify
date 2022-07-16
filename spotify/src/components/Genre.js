import React, { useEffect, useState } from 'react';
import GenreCards from './GenreCards';
import axios from "axios";

const Genre = () => {

    const[data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5500/genres")
        .then((res) => setData(res.data));
    }, [])

    return (
        <div className="container">
            <div className="genres">
                <h2 className="genre-list">All our music genre</h2>
                <ul className="single-genres">
                    {data.map((genres, index) => (
                        <GenreCards key={index} genres={genres}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Genre;