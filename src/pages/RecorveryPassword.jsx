import React, {useRef} from "react";
import '@styles/Login.scss';
import logo from '@Logos/UD.png';

const dataUsers = [
    {
        "id": 1,
        "user": "admin",
        "password": "admin",
        "email": "admin@email.com"
    },
    {
        "id": 2,
        "user": "Jsalamanca",
        "password": "HolaMundo",
        "email": "juan.salamanca@email.com"
    },
    {
        "id": 3,
        "user": "Cmedina",
        "password": "abc1234yz",
        "email": "carlos.medina@email.com"
    }
];

const users = dataUsers.map(data => data.user);
const emails = dataUsers.map(data => data.email)

const RecorveryPassword = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
        // event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('user'),
            email: formData.get('email')
        }
        
        let username = users.find(user => user == data.username);
        let email = emails.find(pass => pass === data.email)

        const p = document.getElementById('info');

        if(typeof(username) === 'string' && typeof(email) === 'string'){
            // alert(`OK, user: ${username} y password: ${password}`);
            const p = document.getElementById('info');
            p.innerHTML = 'Se ha enviado la contrasena al correo'
        } else {
            // alert(`Falla, user: ${username} y email: ${email}`);
            event.preventDefault();
            p.innerHTML = 'Falla usuario o email'
        }
    }

    return (
        <div className='user-data--container'>
        <section className="logo--container">
            <img src={logo} alt='Logo UD'  />
        </section>

        <section className="data-container">
            <form action={'/'} className="user-info" ref={form}>
                <p>Usuario</p>
                <input type="text" name="user" placeholder="username" />
                <p>Email</p>
                <input type="text" name="email" placeholder="user@email.com" />
                <button type="submit" id="button-submit" onClick={handleSubmit}>
                    Recuperar
                </button>
            </form>

            <p id="info"></p>

            <div className="user-create">
                {/* <a href="/RecorveryPassword"></a> */}
                <a href='/CreateUser'>Crear usuario</a>
            </div>
        </section>
    </div>
    );
}

export default RecorveryPassword;
