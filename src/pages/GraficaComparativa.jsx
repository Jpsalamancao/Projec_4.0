import React from 'react';
import Header from '@components/Header';
import Container_compare from '@containers/Container_compare';
import "../styles/GraficaComparativa.scss";

const GraficaComparativa = () => {	
	return (
		<div>
		    <Header />
			<section className='compare-info-container'>  
				<h1> GRAFICAS COMPARATIVAS</h1>		
				<div className="compare-info--cards">
					<Container_compare/>
					<Container_compare/>
				</div>
			</section>
		</div>
	);
}

export default GraficaComparativa;