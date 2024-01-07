import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from './routes/routes'
import SignInPage from './pages/SignInPage/SignInPage'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="<your_client_id>">
        <BrowserRouter>
          <Routes>
            <Route path={pages.signin} element={<SignInPage/>} />
          </Routes>
        </BrowserRouter>        
      </GoogleOAuthProvider>
    </>
  )
}

export default App
