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

  const handleChangeRole = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setRole(target.value);
  };

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
      <h2>Welcome!</h2>
      <h2>Please sign in</h2>
      <form onSubmit={handleLogin}>
        <div>
          <button value="clients" onClick={handleChangeRole}>
            Client
          </button>
          <button value="architects" onClick={handleChangeRole}>
            Architect
          </button>
        </div>
        <div>
          <input ref={emailRef} type="text" placeholder="email" />
          <input ref={passwordRef} type="password" placeholder="password" />
        </div>
        <Common.FormButton type="submit">Login</Common.FormButton>
        {error ? <Common.ErrorMessage>{error}</Common.ErrorMessage> : null}
      </form>
    </S.HomeContainer>
  );
}

export default Home;
