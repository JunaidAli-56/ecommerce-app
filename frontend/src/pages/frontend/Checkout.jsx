import React from 'react'
import { Link } from 'react-router-dom'
import { MdChevronLeft } from "react-icons/md";
import watch from '../../images/watch.jpg'

const Checkout = () => {
    return (
        <>
            <section className="checkout-wrapper py-lg-5 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-data-details">
                                <h3 className="logo-name">Vouge</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark' to="/cart">Cart</Link>
                                        </li>
                                        &nbsp; {">"}
                                        <li className="breadcrumb-item" aria-current="page">Information</li>
                                        &nbsp; {">"}
                                        <li className="breadcrumb-item" aria-current="page">Payment</li>
                                        &nbsp; {">"}
                                        <li className="breadcrumb-item" aria-current="page">Shipping</li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact Information</h4>
                                <p className='user-detail'>
                                    jarviz@mail.com
                                </p>
                                <form action="" className='d-flex flex-wrap justify-content-between gap-15'>
                                    <div className="w-100">
                                        <select defaultValue={'Default'} className="form-select" aria-label="Default select example">
                                            <option value='Default' disabled>Select Country</option>
                                            <option value="3">Saudi Arabia</option>
                                            <option value="2">Palestine</option>
                                            <option value="1">Pakistan</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='First name' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='Last name' />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder='Address' />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder='Apartment, suit, etc' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                            <option Value='DEFAULT' disabled>Select State</option>
                                            <option value="1">Lahore</option>
                                            <option value="3">Laliyain</option>
                                            <option value="2">Faisalabad</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder='Zip Code' />
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-between mt-4'>
                                <Link to='/cart' className='d-flex align-items-center text-dark'>
                                    <MdChevronLeft size={25} />
                                    Return to cart
                                </Link>
                                <button className='button-primary'>Continue to shipping</button>
                            </div>
                        </div>
                        <div className="col-5 checkout-products-billing">
                            <div className='border-bottom'>
                                <div className='d-flex justify-content-between align-items-center pb-3'>
                                    <div className='d-flex gap-15 w-75'>
                                        <div className="image-box position-relative">
                                            <div className='product-count position-absolute'>2</div>
                                            <img src={watch} alt="watch" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>Honor T saaha jada hadu dqd dqdqd qwhdodqwd  qdqdq</h4>
                                            <p className='color mb-0'>S/ #eaeaeae</p>
                                        </div>
                                    </div>
                                    <p className='text-dark'>$ 200</p>
                                </div>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <p>Subtotal</p>
                                    <p className='text-dark'>$ 200</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Shipping</p>
                                    <p className='text-dark'>$ 19.05</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <h4>Total</h4>
                                <h4><span>USD</span>$ 219.05</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout