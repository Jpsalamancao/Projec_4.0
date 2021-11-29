import React from 'react';
import Header from '@containers/Header';
import Columnas from '@components/Columns';
import Multi_lineal from '@components/Multi_lineal';


const GraficaComparativa = () => {
	return (
		<>  
		    <Header />
			<div>
				<h1> GRAFICAS COMPARATIVAS</h1>
			    <Multi_lineal/> 
			</div>
		</>
	);
}

export default GraficaComparativa;