import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Return</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a href='tel:+92 102030490'> +92 102030490</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container upper-conatiner">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className='text-white'>Vouge</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group search-input rounded-2">
                <input type="text" className="form-control shadow-none border-none py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text bg-primary" id="basic-addon2"><BsSearch className='fs-5' /></span>
              </div>
            </div>
            <div className="col-5">
              <div className='header-upper-links d-flex align-items-center justify-content-between '>
                <div>
                  <Link to="/compare-product" className='d-flex align-items-center gap-6'>
                    <img src="images/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare<br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className='d-flex align-items-center gap-6'>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favourite<br />Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className='d-flex align-items-center gap-6'>
                    <img src="images/user.svg" alt="user" />
                    <p className='mb-0'>Log in<br />My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='d-flex align-items-center gap-6'>
                    <img src="images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column gap-1'>
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$400</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown shop-dropdown ">
                    <button className="btn btn-secondary dropdown-toggle shadow-none bg-transparent border-0 d-flex align-items-center gap-6" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt="menu" />
                      <span className='me-2 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu menu">
                      <li><Link className="dropdown-item" to="">Action</Link></li>
                      <li><Link className="dropdown-item" to="">Another action</Link></li>
                      <li><Link className="dropdown-item" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header