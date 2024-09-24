import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [Ypalliloi, setYpalliloi] = useState([]);

    return (
        <EmployeeContext.Provider value={{ Ypalliloi, setYpalliloi }}>
            {children}
        </EmployeeContext.Provider>
    );
};