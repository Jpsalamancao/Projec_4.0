import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GraficaComparativa from '../pages/GraficaComparativa';
import GraficaProceso from '../pages/GraficaProceso';
import Login_Home from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';
import Comp_Rendimiento from '../containers/Comp_Rendimientos';
import Grafica_comparativas from '../containers/Graficas_home';
import RecorveryPassword from '../pages/RecorveryPassword';
import '../styles/global.scss';
// import CreateUser from '../pages/CreateUser';


const App = () => {
    return(
        <Routes>
                <Route path ="/" exact element ={<Login_Home/>}/>
                <Route path ="*"  element ={< NotFound />}/>
                <Route path ="/Home" element= {< Home/>}/>
                <Route path ="/GraficaComparativa" element={<GraficaComparativa/>}/>
                <Route path ="/GraficaProceso" element= {< GraficaProceso/>}/>
                <Route path ="/Grafica_comparativas" element= {<  Grafica_comparativas/>}/>
                <Route path = "/CreateUser" element = {<CreateUser/>}/>
                <Route path = "/RecorveryPassword" element={<RecorveryPassword/>}/>
                {/* <Route path ="/Comp_Rendimiento" element= {<Comp_Rendimiento/>}/> */}
        </Routes>
    );
}

export default App;


