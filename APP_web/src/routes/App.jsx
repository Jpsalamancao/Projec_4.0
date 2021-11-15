import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
    return(
        <Router>
                <Login/>
        </Router>
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

