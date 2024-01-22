import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss"
import 'bootstrap/dist/js/bootstrap.bundle'
// Components
import MainLayout from "./components/MainLayout"
// Pages
import Dashboard from "./pages/frontend/Dashboard"
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Enquiries from './pages/frontend/Enquiries';
import Customer from './pages/frontend/Customer';
import ProductList from './pages/frontend/ProductList';
import CategoryList from './pages/frontend/CategoryList';
import AddBrand from './pages/frontend/AddBrand';
import BrandList from './pages/frontend/BrandList';
import Orders from './pages/frontend/Orders';
import BlogList from './pages/frontend/BlogList';
import BlogCategoryList from './pages/frontend/BlogCategoryList';
import ColorList from './pages/frontend/ColorList';
import AddBlog from './pages/frontend/AddBlog';
import AddBlogCategory from './pages/frontend/AddBlogCategory';
import AddColor from './pages/frontend/AddColor';
import AddCategory from './pages/frontend/AddCategory';
import AddProduct from './pages/frontend/AddProduct';

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
            <Route path='customers' element={<Customer />} />
            <Route path='product' element={<AddProduct />} />
            <Route path='product-list' element={<ProductList />} />
            <Route path='category' element={<AddCategory />} />
            <Route path='category-list' element={<CategoryList />} />
            <Route path='brand-list' element={<BrandList />} />
            <Route path='brand' element={<AddBrand />} />
            <Route path='color' element={<AddColor />} />
            <Route path='color-list' element={<ColorList />} />
            <Route path='orders' element={<Orders />} />
            <Route path='add-blogs' element={<AddBlog />} />
            <Route path='blog-list' element={<BlogList />} />
            <Route path='blog-category' element={<AddBlogCategory />} />
            <Route path='blog-category-list' element={<BlogCategoryList />} />

            <Route path='enquiries' element={<Enquiries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
