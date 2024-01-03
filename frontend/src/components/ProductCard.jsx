import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodCompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-2.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"


const ProductCard = ({ grid }) => {
    const location = useLocation();
    return (
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
            <Link to={`${location.pathname == '/' ? '/product/:id' : location.pathname == '/product/:id' ? '/product/:id' : ':id'}`}
                className="product-card position-relative shadow-light">
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="wish" />
                    </button>
                </div>
                <div className="product-image d-flex justify-content-center align-items-center">
                    <img src={watch} className="img-fluid" alt="product" />
                    <img src={watch2} className="img-fluid" alt="product" />
                </div>
                <div className="product-detail">
                    <h6 className="product-brand">Havels</h6>
                    <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <button className='border-0 bg-transparent'>
                            <img src={prodCompare} alt="compare" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt="view" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addcart} alt="addcart" />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard