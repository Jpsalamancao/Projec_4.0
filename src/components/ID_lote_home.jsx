import React from "react";
import "../styles/ID_lote_home.scss";

const ID_lote_home = () => {

    
return (
    <div className ="Performance_box">
        <a href="/">
            <h2 className="Puesto">1</h2>
        </a>
        <div className="container_lote">
            <p>LOTE</p>
            <p className ="Con_Lote"> aaa4747</p>
        </div>
        <div className="container_performance">
            <p>Contenido Metalico</p>
            <p className ="Con_Rendi"> 10 %</p>
        </div>
        <div className = "container_performance">
            <p>Tiempo de proceso</p>
            <p className ="Con_Rendi"> 24:25 horas</p>
        </div>
        <div className = "container_performance">
            <p>Producto sin empacar</p>
            <p className ="Con_Rendi">100.0 kg</p>
        </div>
        <div className = "container_performance">
            <p>Producto  empacar</p>
            <p className ="Con_Rendi">96.0 kg</p>
        </div>
</div>

);

}

export default ID_lote_home;