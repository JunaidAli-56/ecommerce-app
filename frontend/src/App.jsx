import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss"
import 'bootstrap/dist/js/bootstrap.bundle'

// Components
import Layout from "./components/Layout"
// Pages
import Home from "./pages/frontend/Home"
import About from "./pages/frontend/About"
import Contact from "./pages/frontend/Contact"
import Store from './pages/frontend/Store';
import Blog from './pages/frontend/Blog';
import CompareProduct from './pages/frontend/CompareProduct';
import Wishlist from './pages/frontend/Wishlist';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import BlogDetail from './pages/frontend/BlogDetail';
import PrivacyPolicy from './pages/frontend/PrivacyPolicy';
import ShippingPolicy from './pages/frontend/ShippingPolicy';
import RefundPolicy from './pages/frontend/RefundPolicy';
import TermsCondition from './pages/frontend/TermsCondition';
import ProductDetail from './pages/frontend/ProductDetail';
import Cart from './pages/frontend/Cart';
import Checkout from './pages/frontend/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Store />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blogs/:id' element={<BlogDetail />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            {/* Authentication */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password' element={<ResetPassword />} />

            {/* Footer Links */}
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='terms-condition' element={<TermsCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
