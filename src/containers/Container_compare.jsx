import React from "react";
import One_linea from '@components/One_linea';
import Container_info_compare from "../components/Container_info_compare";
import "../styles/Container_info_compare.scss";

const Container_compare = () => {
    return (
        <section className="compare-info-container">
            <span className="compare-info--search">
                <input type="text" placeholder="Buscar el lote"/>
                <button onclick='Buscar()'></button>
            </span>
			<One_linea/> 
            <Container_info_compare/>
        </section>
    );

}
export default Container_compare;