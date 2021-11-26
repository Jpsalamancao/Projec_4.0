import React from "react";
import UD from '@Logos/UD.png';
import Login from '@Logos/user-icon.png';
import '@styles/Header.scss';


const Header = () => {
    return(
        <nav> 
            <img className="header_img" src={UD} alt="UD"/>
            <div className="header_centro">
                <ul>
                    <li>
                            <a href="/">HOME</a>
                    </li>
                    <li>
                            <a href="/">GRAFICAS COMPARATIVAS</a>
                    </li>
                    <li>
                            <a href="/">GRAFICA DE PROCESO</a>
                    </li>
                </ul>
            
            </div>
            {/* <input type="text" className="input" placeholder="Buscar el lote"/> */}
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img src={Login} alt=""/>
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li><a href="../login/index.html">Cerrar Sesión</a></li>
                    </ul>  

                </div>
         </nav>
        

    );
}




export default Header;
