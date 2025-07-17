import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { FormProvider } from "./FormContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormProvider>
    <App />
  </FormProvider>
);
