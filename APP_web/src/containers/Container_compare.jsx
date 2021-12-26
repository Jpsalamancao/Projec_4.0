import React from "react";
import One_linea from '@components/One_linea';
import Container_info_compare from "../components/Container_info_compare";
import "../styles/Container_info_compare.scss";
import Lupa from '@Logos/lupa.png';


const Container_compare = () => {

    return (
        <div className="Contenedor_GraficaComparativa">
            <div className="tituloComparativa">
                <input type="text" className="input_comparativo" placeholder="Buscar el lote"/>
                <button><img  className="img_compare" src={Lupa} alt="lupa" onclick="buscar()"/></button>
            </div>
			<One_linea/> 
            <Container_info_compare/>
        </div>
    );

}
export default Container_compare;