import React from 'react';
import Layout from '../components/Layout';
import Login from '../components/Login';
import '../styles/global.css';

//import Columns from '../components/Columns';
//import MultiAxisChartjs from '../components/MultiAxisChartjs';

// const App = () => (
//     <div className="App">
//         <Columns/>
//         <MultiAxisChartjs/>
//     </div>
// );

const App = () => {
    return(
        <Layout>
            <Login/>
        </Layout>
    );
}

export default App;