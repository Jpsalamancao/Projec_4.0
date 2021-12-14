import React, { useState } from 'react';
import Header from '@components/Header';
import Graficas_comparativas from '@containers/Graficas_comparativas';
import Comp_Rendimiento from '../containers/Comp_Rendimientos';



const Home = () => {



	return (
		<>
			<Header />
			<Graficas_comparativas/>
			<Comp_Rendimiento/>

		</>
	);
}

export default Home;