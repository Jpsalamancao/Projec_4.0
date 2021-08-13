import React from 'react';
import {Bar} from 'react-chartjs-2';
import Columns from '../components/Columns';
import MultiAxisChartjs from '../components/MultiAxisChartjs';

const App = () => (
    <div className="App">
        <Columns/>
        <MultiAxisChartjs/>
    </div>
);

export default App;