import React from "react";
import '../styles/Login.scss';
import logo from '../assets/images/PQ_logo.png'

    

const Login = () => {
    return (
        <div className="container_PQ">
            <div className="semicirculo">
            </div>
            <div className="container">
                <div className="container_logo">
                    <img src={logo}
                    className="Producciones-Quimicas-logo"
                    alt="logo"/>
                </div>
                <div className="container_data">
                    <p>Usuario</p>
                    <input type="text" class="input" 
                    placeholder="jpsalaman"/>
                    <p>Contraseña</p>
                    <input type="password" class="input"
                    placeholder="12345"/>
                </div>

                <a href="../home/index.html" class="boton">
                    Ingresar               
                </a>

                <div className="container_link">
                    <p><a href="/">¿Olvido la contraseña?</a></p>
                    <p><a href="/">Crear usuario</a></p>
                </div>
            </div>

        </div>

    );
}

export default Login;
