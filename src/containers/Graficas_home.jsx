import React from "react";
import Columnas from '@components/Columns';
import Multi_lineal from '@components/Multi_lineal';
import '@styles/Graficas_home.scss';

const Graficas_home = () => {
	return (
		<div className="home--graphics-container">
			<h1 className="graphics-title"> GRAFICAS COMPARATIVAS</h1>
			<div className="home--graphics">
				<Columnas/> 
				<Multi_lineal/> 
			</div>
		</div>
	);
}

export default Graficas_home;
