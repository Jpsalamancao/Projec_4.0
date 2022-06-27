import React from "react";
import One_linea from '@components/One_linea';
import Container_info_compare from "../components/Container_info_compare";
import "../styles/Container_GraficasProceso.scss";
import Lupa from '@Logos/lupa.png';

const Container_GraficasProceso = () => {

    return(
        <section className="process-info-card">      
            <span className="process-info--search">
                <input type="text" placeholder="Buscar el lote"/>
                <button onClick='Buscar()'></button>
            </span>
            <div className="graphic-info-container">
                <One_linea/> 
                <Container_info_compare/>
            </div>
        </section>
    );
}

export default Container_GraficasProceso;
