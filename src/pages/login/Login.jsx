import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Renomeie o arquivo CSS se necessário

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/turma");
    };

    return (
        <div className='container'>
            <div className='head'>
                <img src="./src/img/senai.png" alt="logo" width={300} />
            </div>
            <h2 className="article-title">LOGIN</h2>
            <form> <br />
                <label htmlFor="email">E-MAIL:</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> <br />

                <label htmlFor="password">SENHA:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="button" onClick={handleClick} className='submit'>CONFIRMAR</button>
            </form>
            <a href="/"> Ainda não tem uma Conta?</a>
        </div>
    );
}

export default LoginForm;