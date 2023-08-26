import React, { useState, createContext, useContext } from 'react';

const CustomAlertContext = createContext();

export const CustomAlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <CustomAlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </CustomAlertContext.Provider>
  );
};

// Custom hook to access the alert methods
export const useCustomAlert = () => {
  const context = useContext(CustomAlertContext);
  if (context === undefined) {
    throw new Error('useCustomAlert must be used within a CustomAlertProvider');
  }
  return context;
};
