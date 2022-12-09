import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import Cookies from 'js-cookie';

type AuthContextProps = {
  children: ReactNode;
};

interface IUserInfo {
  currentUser: object | null;
  login: (role: string, inputs: object) => void;
  logout: () => void;
}

const initialValue = {
  currentUser: null,
  setCurrentUser: () => null,
  login: () => null,
  logout: () => null,
};

export const AuthContext = createContext(initialValue as IUserInfo);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const localStorageItem = JSON.parse(localStorage.getItem('user') || '{}');
    return localStorageItem || initialValue.currentUser;
  });

  const login = async (role: string, inputs: object) => {
    const res = await api.post(`/${role}/login`, inputs);
    const { token, ...other } = res.data;
    setCurrentUser(other);
    Cookies.set('auth_token', token);
  };

  const logout = async () => {
    await api.post('/auth/logout');
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
