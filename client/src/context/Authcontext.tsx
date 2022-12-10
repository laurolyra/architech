import React, { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie';

type AuthContextProps = {
  children: ReactNode;
};

type User = {
  age: number;
  email: string;
  first_name: string;
  gender: number;
  id: number;
  last_name: string;
  phone: number;
  role: string;
};

interface IUserInfo {
  currentUser: User;
  login: (role: string, inputs: object) => void;
  logout: (role: string) => void;
}

const initialValue = {
  currentUser: {},
  setCurrentUser: () => null,
  login: () => null,
  logout: () => null,
};

export const AuthContext = createContext(initialValue as unknown as IUserInfo);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const localStorageItem = JSON.parse(localStorage.getItem('user') || '{}');
    return localStorageItem || initialValue.currentUser;
  });

  const login = async (role: string, inputs: object) => {
    const res = await api.post(`/${role}/login`, inputs);
    if (res.data) {
      const { token, ...other } = res.data;
      Cookies.set('auth_token', token);
      setCurrentUser({ ...other, role });
    }
  };

  const logout = async (role: string) => {
    await api.post(`/${role}/logout`);
    setCurrentUser(null);
    Cookies.remove('auth_token');
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
