import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider} from "react-router-dom";
import {StoreContextUserProvider} from "./Contenxt/authContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <StoreContextUserProvider>
     <App/>
   </StoreContextUserProvider>
 </React.StrictMode>
);
