import React, { useState } from 'react';
import './Login.css'; // Renomeie o arquivo CSS se necessário


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        if ((email === 'mateus@gmail.com' && password === '123') || (email === 'lucas@gmail.com' && password === '123')) {
            window.location = "/turma";
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Dados do formulário:', formData);
    //     // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor e fazer a validação do login
    // };

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

                <button onClick={handleClick} className='submit'>CONFIRMAR</button>
            </form>
            <a href="/"> Ainda não tem uma Conta?</a>
        </div>
    );
}

export default LoginForm;
