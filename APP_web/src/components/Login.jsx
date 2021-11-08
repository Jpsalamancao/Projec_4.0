import React from "react";
import '../styles/Login.scss';

const Login = () => {
    return (
     <div className="container_PQ">
        <div className="container_logo">
            <img src="../assets/Producciones-Quimicas-logo.png"
            className="Producciones-Quimicas-logo"
            alt="Logo Producciones quimicas"/>
        </div>

        <div class="container_data">
            <p>Usuario</p>
            <input type="text" class="input" 
            placeholder="jpsalaman"/>
            <p>Contraseña</p>
            <input type="password" class="input"
            placeholder="12345"/>
        </div>

        <a href="/">
            <button>
                Ingresar
            </button>
        </a>

        <div className="container_link">
            <p><a href="/">¿Olvido la contraseña?</a></p>
            <p><a href="/">Crear usuario</a></p>
        </div>
    </div>

    );
}

export default Login;
