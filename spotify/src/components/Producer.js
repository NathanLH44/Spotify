import React, { useEffect, useState } from 'react';
import ProducerCards from './ProducerCards';
import axios from "axios";

const Producer = () => {

    const[data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5500/artists")
        .then((res) => setData(res.data));
    }, [])

    return (
        <div className="container">
        <div className="producer">
        <h2 className="producer-list">Producers</h2>
            <ul className="single-genres">
                {data.map((artists, index) => (
                    <ProducerCards artists={artists}/>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default Producer;