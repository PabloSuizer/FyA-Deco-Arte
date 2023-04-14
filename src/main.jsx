import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/*Permite que el usuario acceda mediante cualquier proveedor o método de autenticación. */}
    <App />
    </AuthProvider>
  </React.StrictMode>
)
