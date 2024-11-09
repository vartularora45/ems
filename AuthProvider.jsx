import React, { createContext, useState, useEffect } from 'react';

import { getLocalStorage } from './Utils/localstorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [Userdata, setUserdata] = useState({ employees: null, admin: null });

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUser({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={Userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
