import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TodoContext from './Context/TodoContext';
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient=new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
 <QueryClientProvider client={queryClient}>
 <TodoContext>
  <App />
  </TodoContext>
 </QueryClientProvider>
   </BrowserRouter>
  </React.StrictMode>
);


