import React from 'react';
import {Bar} from 'react-chartjs-2';

const Columns = () => {
    const data ={
        labels: ['maquina 1','maquina 2','maquina 3',
        'maquina 4','maquina 5', ],
        datasets:[{
            label:'Rendimiento',
            backgroundColor:'rgba(0,255,0,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#fff05',
            data: [50, 10, 30, 45, 82]
        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: false
    }


    return(
        <div className="Columns" styles={{width:'500px', height:'200px'}}>
            <h1>GRAFICA COMPARATIVA</h1>
            <Bar data={data} options={opciones}/>
        </div>
    );
}

export default Columns;
