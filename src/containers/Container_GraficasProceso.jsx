import React from "react";
import One_linea_proces from '@components/One_linea_proces';
import Container_info_compare from "../components/Container_info_compare";
import "../styles/Container_GraficasProceso.scss";
import Lupa from '@Logos/lupa.png';

const Container_GraficasProceso = () => {

    return(
        <div className="Cont_Proceso">      
            <div className="tituloComparativa">
                <input type="text" className="input_comparativo" placeholder="Buscar el lote"/>
                <button>
                    <img  className="img_compare" 
                    src={Lupa} alt="lupa" 
                    onclick="buscar()"/>
                </button>
            </div>
            <div className="Cont_grafica_info">
            <One_linea_proces/> 
                <div className="info_proceso">
                    <Container_info_compare/>
                </div>
            </div>
        </div>

    );
}

export default Container_GraficasProceso;
