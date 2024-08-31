// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import image from '../assets/img-login.svg'
import back from '../assets/voltar.svg'
import logo from '../assets/Logo.svg';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Usuario123' && password === 'senha123') {
      login();
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className="parti">
    <div className="blur-4"></div>
    <img src={logo} alt="" className="logo" />
    <div className="left">
        <br /><br /><br /><br /><br /><br /><br />
        <h1>Olá, Seja bem vindo de volta </h1>
        <img src={image} alt="img" className="men" />
        <div className="btn">
            <a href="/"><img src={back} alt="" className="back" /></a>
        </div>
    </div>

    <div className="right">

        <div className="title-login">
            <h1>Entre na sua conta</h1>
            <p>Insira suas informações para prosseguir</p>
        </div>
        <br /><br /><br />
        <div class="login-box">

            <form>
                <div class="user-box">
                <div className="wave-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>U</span>
              <span className="label-char" style={{ "--index": 1 }}>s</span>
              <span className="label-char" style={{ "--index": 2 }}>u</span>
              <span className="label-char" style={{ "--index": 3 }}>á</span>
              <span className="label-char" style={{ "--index": 4 }}>r</span>
              <span className="label-char" style={{ "--index": 5 }}>i</span>
              <span className="label-char" style={{ "--index": 6 }}>o</span>
            </label>
          </div>
                </div>  
                <div className="user-box">
                  <div className="wave-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <span className="label-char" style={{ "--index": 0 }}>S</span>
                    <span className="label-char" style={{ "--index": 1 }}>e</span>
                    <span className="label-char" style={{ "--index": 2 }}>n</span>
                    <span className="label-char" style={{ "--index": 3 }}>h</span>
                    <span className="label-char" style={{ "--index": 4 }}>a</span>
                  </label>
                  <div className="eye-icon" onClick={toggleShowPassword}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </div>
                </div>
                </div>

                <br />
                <a href="." className="esqueci">Esqueci minha senha</a>
                <button onClick={handleLogin} class="button type1" >
                  <span class="btn-txt">Hello</span>
                </button>

            </form>
            <br /><br /><br />
            <a href="/cadastro" className="btn-cadastro">Não tem uma conta?<span>Crie uma</span></a>
        </div>



    </div>
</section>
  );
};

export default Login;
