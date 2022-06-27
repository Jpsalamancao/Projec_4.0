import React from "react";
import "../styles/ID_lote_home.scss";

const ID_lote_home = () => {  
    return (
        <a href="" className ="performance-card">
            <h2 className="performance-card--title">1</h2>
            <div className="performance-card--data">
                <p>Lote</p>
                <p> aaa4747</p>
            </div>
            <div className="performance-card--data">
                <p>Contenido Metalico</p>
                <p> 10 %</p>
            </div>
            <div className = "performance-card--data">
                <p>Tiempo de proceso</p>
                <p> 24:25 horas</p>
            </div>
            <div className = "performance-card--data">
                <p>Producto sin empacar</p>
                <p>100.0 kg</p>
            </div>
            <div className = "performance-card--data">
                <p>Producto  empacar</p>
                <p>96.0 kg</p>
            </div>
        </a>
    );
}

export default ID_lote_home;