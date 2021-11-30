import React, { useState } from 'react';
import Header from '@components/Header';
import Columnas from '@components/Columns';
import Multi_lineal from '@components/Multi_lineal';


const Home = () => {



	return (
		<>
			<Header />
			<div>
				<h1> CONTENIDO DEL HOME</h1>
				<Columnas/> 
			    <Multi_lineal/> 
			</div>

		</>
	);
}

export default Home;