import React from "react";
import UD from '@Logos/UD.png';
import Login from '@Logos/user-icon.png';
import '@styles/Header.scss';


const Header = () => {
    return(
        <nav> 
        <img className="header_img" src={UD} alt="UD"/>
        <input type="text" className="input" placeholder="Buscar el lote"/>
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
