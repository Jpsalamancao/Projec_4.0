import React from 'react';
import {Bar} from 'react-chartjs-2';
import '../styles/Columns.scss';

const Columns = () => {
    const data ={
        labels: ['maquina 1','maquina 2','maquina 3',
        'maquina 4','maquina 5', ],
        datasets:[{
            label:'Rendimiento',
            backgroundColor:'rgba(91, 192, 222 ,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#fff05',
            data: [50, 10, 30, 45, 2000]
        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: false
    }


    return(
        <div className="Columns">
            <div className="Titel_Columns">
                <h1>GRAFICA COMPARATIVA</h1>
            </div>
            <Bar data={data} options={opciones}/>
        </div>
    );
}

export default Columns;
