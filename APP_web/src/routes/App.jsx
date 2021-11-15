import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Multi_lineal from '../components/Multi_lineal';
import Columns from '../components/Columns';
import Login_Home from '../pages/Login';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
    return(
        <Routes>
                <Route path ="/" exact element ={<Login_Home/>}/>
                <Route path ="*"  element ={< NotFound />}/>
                <Route path ="/Columns" element= {< Columns/>}/>
                <Route path ="/Multi_lineal" element={<Multi_lineal/>}/>
        </Routes>
    );
}

export default App;


