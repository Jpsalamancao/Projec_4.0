import React, {useState} from "react";
import UD from '@Logos/UD.png';
import Login from '@Logos/user-icon.png';
import '@styles/Header.scss';
//import '@styles/bootstrap.css';


const Header = () => {

	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	}
    return(
        <nav> 
            <img className="header_img" src={UD} alt="UD"/>
            <div className="header_centro">
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
            
            </div>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={Login} alt="" onClick={handleToggle}/>
                    <p>Perfil</p>
                </div>
                {toggle &&  <li><a href="/">Cerrar Sesión</a></li>}
            </div>
                
         </nav>


        

    );
}




export default Header;
