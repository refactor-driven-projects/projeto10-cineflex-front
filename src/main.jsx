import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './style/ResetStyle.js'
import GlobalStyle from './style/GlobalStyle.js'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <GoogleOAuthProvider clientId="<your_client_id>">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
