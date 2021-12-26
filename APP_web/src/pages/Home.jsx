import React, { useState } from 'react';
import Header from '@components/Header';
import Graficas_home from '@containers/Graficas_home';
import Comp_Rendimiento from '../containers/Comp_Rendimientos';



const Home = () => {



	return (
		<>
			<Header />
			<Graficas_home/>
			<Comp_Rendimiento/>

		</>
	);
}

export default Home;