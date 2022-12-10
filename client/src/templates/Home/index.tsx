import React, { useContext, useRef, useState } from 'react';
import logo from '../../assets/architech_logo_raw.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';
import * as S from './styles';
import * as Common from '../../styles/common';

function Home() {
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState('clients');
  const [error, setError] = useState(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const loginBody = { email: email, password: password };
    try {
      await login(role, loginBody);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data);
    }
  };

  return (
    <S.HomeContainer>
      <S.LogoBorder>
        <img src={logo} className="App-logo" alt="logo" />
      </S.LogoBorder>

      {/* <S.Typography as="p">Texto</S.Typography> */}
      <S.WelcomeScreen>
        <h2>Welcome!</h2>
        <h2>Please sign in or Register</h2>
      </S.WelcomeScreen>
      <S.LoginForm onSubmit={handleLogin}>
        <select
          defaultValue=""
          onChange={(e) => setRole(e.target.value)}
          placeholder="gender"
        >
          <option disabled value="">
            Login as...
          </option>
          <option value="clients">Client</option>
          <option value="architects">Architect</option>
        </select>
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <S.ButtonContainer>
          <Common.FormButton
            type="button"
            onClick={() => navigate('/register')}
          >
            Register
          </Common.FormButton>
          <Common.FormButton type="submit">Login</Common.FormButton>
        </S.ButtonContainer>
        {error ? <Common.ErrorMessage>{error}</Common.ErrorMessage> : null}
      </S.LoginForm>
    </S.HomeContainer>
  );
}

export default Home;
