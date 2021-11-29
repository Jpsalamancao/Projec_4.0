import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GraficaComparativa from '../pages/GraficaComparativa';
import Columns from '../components/Columns';
import Login_Home from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import '../styles/global.css';


const App = () => {
    return(
        <Routes>
                <Route path ="/" exact element ={<Login_Home/>}/>
                <Route path ="*"  element ={< NotFound />}/>
                <Route path ="/Home" element= {< Home/>}/>
                <Route path ="/GraficaComparativa" element={<GraficaComparativa/>}/>
                <Route path ="/GraficaProceso" element= {< GraficaProcesos/>}/>
        </Routes>
    );
}

export default App;


