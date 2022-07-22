import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Settings from "../settings/Settings";
import Navbar from "./components/Navbar";

export default function App() {
    return <div>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </div>;
}
