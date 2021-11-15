import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Layout from '../containers/Layout';
import Login_Home from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
    return(
        <Routes>
                <Route path ="/" exact element ={<Login_Home/>}/>
                <Route path ="*" exact element ={< NotFound />}/>
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

