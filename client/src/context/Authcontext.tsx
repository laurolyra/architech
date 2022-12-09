import { api } from '../services/api';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextProps = {
  children: ReactNode;
};

interface IUserInfo {
  currentUser: object | null;
  login: (inputs: object) => void;
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

  const login = async (inputs: object) => {
    const res = await api.post('/auth/login', inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setCurrentUser(null);
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
