import React from 'react';
import Header from '@components/Header';
import Columnas from '@components/Columns';
import Multi_lineal from '@components/Multi_lineal';


const GraficaProceso = () => {
	return (
		<>
			<Header />
			<div>
				<h1> GRAFICAS DE PROCESO</h1>
				<Columnas/> 
			</div>
		</>
	);
}

export default GraficaProceso;