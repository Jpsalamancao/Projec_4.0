import React from "react";
import Columnas from '@components/Columns';
import Multi_lineal from '@components/Multi_lineal';
import '@styles/Grafica_comparativas.scss';



const Grafica_comparativas = () => {



	return (
		<>
			<div className="HOME">
				<h1> GRAFICAS COMPARATIVAS</h1>
                <div className="HOME_GRAF">
                    <Columnas/> 
                    <Multi_lineal/> 
                </div>
			</div>

		</>
	);
}

export default Grafica_comparativas;
