import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './routes/routes';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import AuthContext from './context/authentication';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(0);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path={pages.signin} element={<SignInPage/>} />
              <Route path={pages.signup} element={<SignUpPage/>} />
            </Routes>
          </BrowserRouter>        
      </AuthContext.Provider>
    </>
  )
}

export default App