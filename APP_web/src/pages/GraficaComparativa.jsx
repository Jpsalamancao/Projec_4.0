import React from 'react';
import Header from '@components/Header';
import Multi_lineal from '@components/Multi_lineal';
import Container_info from '../components/Container_info';


const GraficaComparativa = () => {
	return (
		<>  
		    <Header />
			<div>
				<h1> GRAFICAS COMPARATIVAS</h1>
			    <Multi_lineal/> 
				<Container_info/>
			</div>
		</>
	);
}

export default GraficaComparativa;