import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albums from './pages/Albums';
import Genres from './pages/Genres';
import Home from "./pages/Home"
import Producers from './pages/Producers';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/albums" element={<Albums/>}/>
                <Route path="/genres" element={<Genres/>}/>
                <Route path="/producers" element={<Producers/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;