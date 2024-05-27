import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <div className='container'>
            <div className='head'>
                <img src="./src/img/senai.png" alt="logo" width={300} />
            </div>
            <h2 className="article-title">CADASTRO</h2>
            <form> <br />
                <label className='label' htmlFor="email">E-MAIL:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                /> <br />

                <label className='label' htmlFor="password">SENHA:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                /> <br />

                <label className='label' htmlFor="confirmPassword">CONFIRMAR SENHA:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                /> <br /> 

                <label className='label' htmlFor="name">NOME:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                /> <br />

                <button type="button" onClick={handleClick} className='submit'>CADASTRAR</button>
            </form>
            <a href="/login"> Já tem uma Conta?</a>
        </div>
    );
}

export default RegistrationForm;
