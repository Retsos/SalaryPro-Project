import React, { createContext, useState } from 'react';

export const UsernameContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UsernameContext.Provider value={{ user, setUser }}>
      {children}
    </UsernameContext.Provider>
  );
};