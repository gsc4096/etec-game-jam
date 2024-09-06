import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    //Fazer a integração com o back para envio de e-mail/ não me pergunte como fazer kkkkkkkkkk eu ñ sei
    alert(`Um email foi enviado para ${email} com instruções para redefinir sua senha.`);
    navigate('/login');
  };

  return (
    <div className="forgot-password">
      <h2>Recuperar Senha</h2>
      <form onSubmit={handlePasswordReset}>
        <div className="wave-group">
          <input
            type="email"
            id="email" // Adicionado ID
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <span className="bar"></span>
          <label htmlFor="email" className="label"> {/* Associado com htmlFor */}
            <span className="label-char" style={{ "--index": 0 }}>E</span>
            <span className="label-char" style={{ "--index": 1 }}>m</span>
            <span className="label-char" style={{ "--index": 2 }}>a</span>
            <span className="label-char" style={{ "--index": 3 }}>i</span>
            <span className="label-char" style={{ "--index": 4 }}>l</span>
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
