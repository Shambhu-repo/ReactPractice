import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import './index.css';   //this is the css which can be applied globally
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx'; // Ensure the correct casing

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
