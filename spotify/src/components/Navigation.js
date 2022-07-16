import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">

            <div className="navbar-brand">
                <img className="navbar-brand-logo" src="./img/spotify.png" alt="Logo"/>
                <h1 className="navbar-brand-name">Spotify</h1>
            </div>

            <div className="navbar-nav">
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className="nav-link">Home</li>
                    </NavLink>
                    <NavLink to="/albums" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className="nav-link">Albums</li>
                    </NavLink>
                    <NavLink to="/genres" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className="nav-link">Genre</li>
                    </NavLink>
                    <NavLink to="/producers" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className="nav-link">Producer</li>
                    </NavLink>
                </ul>
            </div>

            <div className="container-SearchBar">
                <img className="SearchBar-img" src="./img/loupe.png" alt="Search"/>
                <input type="text" id="SearchBar" name="SearchBar" className="SearchBar" placeholder="Search..."/>
            </div>
        </div>
    );
};

export default Navigation;