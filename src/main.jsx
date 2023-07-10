import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/index'
import {
    RouterProvider,
  } from "react-router-dom";
import { ThemeProvider } from './contexts/themeContexts';

  

ReactDOM.createRoot(document.getElementById('root')).render(
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
)


