// src/components/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import image from '../assets/img-login.svg';
import back from '../assets/voltar.svg';
import logo from '../assets/Logo.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Usuario123' && password === 'senha123') {
      login();
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className="parti">
      <div className="blur-4" />
      <img src={logo} alt="Logo" className="logo" />
      <div className="left">
        <h1>Olá, Seja bem vindo de volta</h1>
        <img src={image} alt="Login Illustration" className="men" />
        <div className="btn">
          <a href="/">
            <img src={back} alt="Back" className="back" />
          </a>
        </div>
      </div>

      <div className="right">
        <div className="title-login">
          <h1>Entre na sua conta</h1>
          <p>Insira suas informações para prosseguir</p>
        </div>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div className="user-box">
              <div className="wave-group">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="input"
                />
                <span className="bar" />
                <label htmlFor="username" className="label">
                  <span className="label-char">U</span>
                  <span className="label-char">s</span>
                  <span className="label-char">u</span>
                  <span className="label-char">á</span>
                  <span className="label-char">r</span>
                  <span className="label-char">i</span>
                  <span className="label-char">o</span>
                </label>
              </div>
            </div>
            <div className="user-box">
              <div className="wave-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input"
                />
                <span className="bar" />
                <label htmlFor="password" className="label">
                  <span className="label-char">S</span>
                  <span className="label-char">e</span>
                  <span className="label-char">n</span>
                  <span className="label-char">h</span>
                  <span className="label-char">a</span>
                </label>
                <button
                  type="button"
                  className="eye-icon"
                  onClick={toggleShowPassword}
                  onKeyDown={(e) => e.key === 'Enter' && toggleShowPassword(e)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>

            <a href="." className="esqueci">Esqueci minha senha</a>
            <button type="submit" className="button type1">
              <span className="btn-txt">Entrar</span>
            </button>
          </form>
          <a href="/cadastro" className="btn-cadastro">
            Não tem uma conta?<span>Crie uma</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
