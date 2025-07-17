import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    basic: {},
    permanentaddress: {},
    localaddress: {},
    accountdetails: {},
    familydependentinfo: {},
    guarantordetails: {},
    files: {}
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
