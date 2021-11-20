import React, {useRef} from "react";
import '@styles/Login.scss';
import logo from '@Logos/PQ_logo.png'

    

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
    }
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
                <form action="/" className= "form" ref={form}>
                    <div className="container_data">
                        <p>Usuario</p>
                        <input type="text" name="email" className="input" 
                        placeholder="jpsalaman"/>
                        <p>Contraseña</p>
                        <input type="password" name="password" className="input"
                        placeholder="12345"/>
                    </div>

                    <button className="boton" 
                    onClick ={ handleSubmit}>
                        Ingresar               
                    </button>
                </form>

                <div className="container_link">
                    <p><a href="/">¿Olvido la contraseña?</a></p>
                    <p><a href="/">Crear usuario</a></p>
                </div>
            </div>

        </div>

    );
}

export default Login;
