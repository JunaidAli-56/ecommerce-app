import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss"
import 'bootstrap/dist/js/bootstrap.bundle'
// Components
import MainLayout from "./components/MainLayout"
// Pages
import Dashboard from "./pages/frontend/Dashboard"
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/admin' element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
