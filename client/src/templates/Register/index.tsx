import React, { ChangeEventHandler, useRef, useState } from 'react';
import logo from '../../assets/architech_logo_raw.png';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import * as Common from '../../styles/common';
import api from '../../services/api';

const Register = () => {
  const [role, setRole] = useState('clients');
  const [error, setError] = useState(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const phone = phoneRef.current?.value;
    const gender = genderRef.current?.value;
    const age = ageRef.current?.value;
    const password = passwordRef.current?.value;
    const reqBody = {
      email,
      first_name: firstName,
      last_name: lastName,
      phone,
      gender: Number(gender),
      age: Number(age),
      password,
    };

    console.log(reqBody);
    // const email = emailRef.current?.value;
    // const password = passwordRef.current?.value;
    // const loginBody = { email: email, password: password };
    try {
      const res = await api.post(`/${role}/register`, reqBody);
      if (res.data) {
        navigate('/');
      }
    } catch (err: any) {
      setError(err?.response?.data);
    }
  };

  return (
    <S.RegisterContainer>
      <S.LogoBorder>
        <img src={logo} className="App-logo" alt="logo" />
      </S.LogoBorder>

      <S.RegisterScreen>
        <h2>Register</h2>
      </S.RegisterScreen>
      <S.RegisterForm onSubmit={handleRegister}>
        <select onChange={(e) => setRole(e.target.value)} placeholder="gender">
          <option disabled selected>
            Register as...
          </option>
          <option value="clients">Client</option>
          <option value="architects">Architect</option>
        </select>
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={firstNameRef} type="text" placeholder="First Name" />
        <input ref={lastNameRef} type="text" placeholder="Last Name" />
        <input ref={phoneRef} type="text" placeholder="Phone" />
        <select ref={genderRef} placeholder="gender">
          <option disabled selected>
            Gender
          </option>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
          <option value={3}>Other/none</option>
        </select>
        <input ref={ageRef} type="text" placeholder="current age" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <S.ButtonContainer>
          <Common.FormButton type="submit">Register</Common.FormButton>
        </S.ButtonContainer>
        {error ? <S.ErrorMessage>{error}</S.ErrorMessage> : null}
      </S.RegisterForm>
    </S.RegisterContainer>
  );
};

export default Register;
