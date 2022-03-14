import React from 'react';
import {Bar} from 'react-chartjs-2';
import '../styles/Columns.scss';

const Columns = () => {
    const data ={
        labels: ['maquina 1','maquina 2','maquina 3',
        'maquina 4','maquina 5', ],
        datasets:[{
            label:'Rendimiento',
            backgroundColor:'rgba(140, 25, 25 ,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor: 'rgba(140, 25, 25, 0.5)',
            hoverBorderColor: '#fff05',
            data: [50, 10, 30, 45, 100]
        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true
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
