import React, {useRef} from "react";
import '@styles/Login.scss';
import logo from '@Logos/UD.png'

const dataDefault = {
    username: 'KrlozMedina',
    password: 'abc1234'
}

localStorage.setItem('Data', JSON.stringify(dataDefault));

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		// event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}

        localStorage.setItem('Data1', JSON.stringify(data));

        if (data.username === dataDefault.username && data.password === dataDefault.password){
            alert('OK');
        } else {
            alert('NO es posible ingresar... estamos trabajando en ello, asi que entra sin problemas');
        }

		// console.log(data);
    }

    return (
        <div className="container_PQ">
            <div className="semicirculo"></div>

            <div className="container">
                <div className="container_logo">
                    <img src={logo}
                    className="UniversidadDistritalLogo"
                    alt="logo"/>
                </div>

                <form action="/Home" className= "form" ref={form}>
                    <div className="container_data">
                        <p>Usuario</p>
                        <input type="text" name="email"
                        className="input" placeholder="user@email"/>

                        <p>Contraseña</p>
                        <input type="password" name="password"
                        className="input" placeholder="********"/>
                    </div>

                    <button className="boton" onClick ={handleSubmit}>
                        Ingresar               
                    </button>
                </form>

                <div className="container_link">
                    <p><a href="/Home">¿Olvido la contraseña?</a></p>
                    <p><a href="/">Crear usuario</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
