import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    // State para armazenar os valores dos campos
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });

    // Função para lidar com a alteração dos campos
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className='container'>
            <div className='head'>
                <img src="./src/components/senai.png" alt="logo" width={300}/>
            </div>
            <h2 className="article-title">CADASTRO</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="password">SENHA:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="confirmPassword">CONFIRMAR SENHA:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="name">NOME:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit" className='submit'>CADASTRAR</button>
            </form>
            <a href="./src/components/Login.jsx"> Já tem uma Conta?</a>
        </div>
    );
}

export default RegistrationForm;