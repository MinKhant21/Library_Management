import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/index'
import {
    RouterProvider,
  } from "react-router-dom";
import { ThemeProvider } from './contexts/themeContexts';
import AuthContextProvider from './contexts/AuthContexts';

  

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider s>
    <ThemeProvider>
          <RouterProvider router={router} />
    </ThemeProvider>
  </AuthContextProvider>
)


