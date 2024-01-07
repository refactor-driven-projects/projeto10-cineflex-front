import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from './routes/routes'
import SignInPage from './pages/SignInPage/SignInPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={pages.signin} element={<SignInPage/>} />
        </Routes>
      </BrowserRouter> 
      
    </>
  )
}

export default App
