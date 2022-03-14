import React from 'react';
import Header from '@components/Header';
import Container_compare from '@containers/Container_compare';
import "../styles/GraficaComparativa.scss";




const GraficaComparativa = () => {
	return (
		<>  
		    <Header />
			<h1> GRAFICAS COMPARATIVAS</h1>		
			<div className="Contenedor_GraficaComparativa_info">
				<Container_compare/>
				<Container_compare/>
			</div>

		</>
	);
}

export default GraficaComparativa;