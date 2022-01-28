import React from 'react';
import Header from '@components/Header';
import Container_GraficasProceso from '@containers/Container_GraficasProceso';


const GraficaProceso = () => {
	return (
		<>
			<Header />
			<div className='GraficaProceso'>
				<h1> GRAFICAS DE PROCESO</h1>
				<Container_GraficasProceso/> 
			</div>
		</>
	);
}

export default GraficaProceso;