import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/Multi_lineal.scss';


const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','15','18','19','20',
    '21','22','23','24','25','26','27','28','30','31','32','33','34','35','36','37','38','39','40'],
    datasets: [
      {
        label: '# LOTE 200',
        data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 50, 100, 110, 140],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# LOTE 300',
        data: [1, 2, 1, 1, 2, 2, 10, 20, 50, 100, 110, 120, 150, 130,100 ],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
      {
        label: '# LOTE 350',
        data: [3, 1, 4, 3, 1, 2, 10, 20, 30, 40, 50, 60, 70, 100, 120, 150, ],
        fill: false,
        backgroundColor: 'rgb(54, 162, 2)',
        borderColor: 'rgba(54, 162, 2, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const options = {
    // responsive: true,
    // maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },

  };

const Multi_lineal = () => {
  return (
    <div className='graphic-multiLinea-container'>
        <h1>GRÁFICA DE PROCESO </h1>
        <Line data={data} options={options} />
    </div>
  );
}

export default Multi_lineal;