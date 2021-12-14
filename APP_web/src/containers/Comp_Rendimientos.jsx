import React from "react";
import ID_lote_home from "../components/ID_lote_home";
import "../styles/Comp_Rendimientos.scss";

const Comp_Rendimiento = () => {


    return (
        <>
            <div className="Conten">
                <h1>LOS MEJORES LOTES</h1>
                <div className="Conten_lote">
                    <ID_lote_home/>
                    <ID_lote_home/>
                    <ID_lote_home/>
                    <ID_lote_home/>
                    <ID_lote_home/>
                </div>

            </div>
        </>

    );
}

export default Comp_Rendimiento;