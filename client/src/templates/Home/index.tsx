import React, { useContext, useRef, useState } from 'react';
import logo from '../../assets/architech_logo_raw.png';
import { AuthContext } from '../../context/Authcontext';
import * as S from './styles';

function Home() {
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState('clients');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChangeRole = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setRole(target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const loginBody = { email: email, password: password };
    return login(role, loginBody);
  };

  return (
    <div>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Home;
