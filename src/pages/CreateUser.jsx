import React, {useRef} from "react";
import '@styles/Login.scss';
import logo from '@Logos/UD.png';

const CreateUser = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
        // event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('user'),
            email: formData.get('email')
        }

    }

    return (
        <div className='user-data--container'>
        <section className="logo--container">
            <img src={logo} alt='Logo UD'  />
        </section>

        <section className="data-container">
            <form action={'/'} className="user-info" ref={form}>
                <p>Email</p>
                <input type="text" name="email" placeholder="user.email.com" />
                <p>Password</p>
                <input type="password" name="password" placeholder="********" />
                <button type="submit" id="button-submit" onClick={handleSubmit}>
                    Crear
                </button>
            </form>

            {/* <p id="info"></p> */}

            {/* <div className="user-create">
                <a href="/RecorveryPassword"></a>
                <a href='/CreateUser'>Crear usuario</a>
            </div> */}
        </section>
    </div>
    );
}

export default CreateUser;
