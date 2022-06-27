import React, {useState} from "react";
import UD from '@Logos/UD.png';
import Login from '@Logos/user-icon.png';
import '@styles/Header.scss';

const Header = () => {

	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	}
    return(
        <div className="header-container"> 
            <img className="header-logo" src={UD} alt="UD"/>
            <nav className="header-nav">
                <ul>
                    <li>
                        <a href="/Home">INICIO</a>
                    </li>
                    <li>
                        <a href="/GraficaComparativa">GRAFICAS COMPARATIVAS</a>
                    </li>
                    <li>
                        <a href="/GraficaProceso">GRAFICA DE PROCESO</a>
                    </li>
                </ul>
            </nav>
            <div className="header-menu">
                <span className="header-menu--profile" onClick={handleToggle}>
                    <p>Perfil</p>
                    <img src={Login} alt=""/>
                </span>
                {toggle && <li><a href="/">Cerrar Sesión</a></li>}
            </div>
         </div>
    );
}




export default Header;
