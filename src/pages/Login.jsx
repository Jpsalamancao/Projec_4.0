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
    }

    return (
        <div className='user-data--container'>
        <section className="logo--container">
            <img src={logo} alt='Logo UD'  />
        </section>

        <section className="data-container">
            <form action="submit" className="user-info" ref={form}>
                <p>Usuario</p>
                <input type="text" name="user" placeholder="user@email" />
                <p>Contraseña</p>
                <input type="password" name="password" placeholder="********" />
                <button type="submit" onClick={handleSubmit}>
                    Ingresar
                </button>
            </form>

            <div className="user-create">
                <a href=''>¿Olvido la contraseña?</a>
                <a href=''>Crear usuario</a>
            </div>
        </section>
    </div>
    );
}

export default Login;
