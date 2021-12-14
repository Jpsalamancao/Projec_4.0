import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GraficaComparativa from '../pages/GraficaComparativa';
import GraficaProceso from '../pages/GraficaProceso';
import Login_Home from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Comp_Rendimiento from '../containers/Comp_Rendimientos';
import  Grafica_comparativas from '../containers/Graficas_comparativas';
import '../styles/global.css';


const App = () => {
    return(
        <Routes>
                <Route path ="/" exact element ={<Login_Home/>}/>
                <Route path ="*"  element ={< NotFound />}/>
                <Route path ="/Home" element= {< Home/>}/>
                <Route path ="/GraficaComparativa" element={<GraficaComparativa/>}/>
                <Route path ="/GraficaProceso" element= {< GraficaProceso/>}/>
                <Route path ="/Grafica_comparativas" element= {<  Grafica_comparativas/>}/>
                {/* <Route path ="/Comp_Rendimiento" element= {<Comp_Rendimiento/>}/> */}
        </Routes>
    );
}

export default App;


