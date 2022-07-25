import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TodoContext from './Context/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
  <TodoContext>
  <App />
  </TodoContext>
   </BrowserRouter>
  </React.StrictMode>
);


