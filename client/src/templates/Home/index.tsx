import React, { useRef, useState } from 'react';
import logo from '../../assets/architech_logo_raw.png';
import { api } from '../../services/api';
import * as S from './styles';

function Home() {
  const [role, setRole] = useState('client');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChangeRole = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setRole(target.value);
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    const getInfo = api
      .get('/ditto')
      .then((res) => console.log('res:', res.data));
    return getInfo;
  };

  return (
    <div>
      <S.LogoBorder>
        <img src={logo} className="App-logo" alt="logo" />
      </S.LogoBorder>

      {/* <S.Typography as="p">Texto</S.Typography> */}
      <h2>Welcome!</h2>
      <h2>Please sign in</h2>
      <form onSubmit={login}>
        <div>
          <button value="client" onClick={handleChangeRole}>
            Client
          </button>
          <button value="architect" onClick={handleChangeRole}>
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
