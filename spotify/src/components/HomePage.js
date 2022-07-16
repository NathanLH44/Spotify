import React, { useEffect, useState } from 'react';
import HomeCards from './HomeCards';
import axios from "axios";

const Albums = () => {

    const[data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5500/albums")
        .then((res) => setData(res.data));
    }, [])

    return (
        <div className="container">
            <div className="albums">
            <h2 className="album-list">Welcome</h2>
                <ul className="single-albums">
                    {data.map((albums, index) => (
                        <HomeCards key={index} albums={albums}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Albums;