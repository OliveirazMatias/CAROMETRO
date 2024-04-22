import React, { useState } from 'react';
import './Login.css'; // Renomeie o arquivo CSS se necessário

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados do formulário:', formData);
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor e fazer a validação do login
    };

    return (
        <div className='container'>
            <div className='head'>
                <img src="./src/img/senai.png" alt="logo" width={300} />
            </div>
            <h2 className="article-title">LOGIN</h2>
            <form onSubmit={handleSubmit}> <br />
                <label htmlFor="email">E-MAIL:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                /> <br />

                <label htmlFor="password">SENHA:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <a className='submit' href='/turma'> CONFIRMAR </a>
            </form>
            <a href="/"> Ainda não tem uma Conta?</a>
        </div>
    );
}

export default LoginForm;
