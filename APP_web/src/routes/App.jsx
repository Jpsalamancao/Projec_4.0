import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MultiAxisChartjs from '../components/MultiAxisChartjs';
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
                <Route path ="/MultiAxisChartjs" element={<MultiAxisChartjs/>}/>
        </Routes>
    );
}

export default App;

// <Router>
// <Layout>
//     < Switch>
//             <Route  exact path="/" component={Login} />                 
//     </ Switch>
// </Layout>
// </Router>


{/* <Route   path="/Login" exact>
<Login />            
</Route>    */}

///////////////////////////////////////////////////////////

