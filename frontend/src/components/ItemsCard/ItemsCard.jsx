import React from "react";
import { Link } from "react-router-dom";
import './items-card.scss'

const ItemsCard = () => {
    return (
        <div className="container-fluid">
            <div className="row pc-upper-div">
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-style">
                    <div className="py-3 ps-1">
                        <Link>computer & laptops</Link>
                        <p className="py-2">8 items</p>
                    </div>
                    <div className="product-card-img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/02_110x110.jpg?v=1654929897" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-style">
                    <div className="py-3 ps-1">
                        <Link>cameras & videos</Link>
                        <p className="py-2">10 items</p>
                    </div>
                    <div className="product-card-img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/03_110x110.jpg?v=1654929931" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-style">
                    <div className="py-3 ps-1">
                        <Link>smart television</Link>
                        <p className="py-2">12 items</p>
                    </div>
                    <div className="product-card-img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/04_110x110.jpg?v=1654929951" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-no-right">
                    <div className="py-3 ps-1">
                        <Link>smart watches</Link>
                        <p className="py-2">12 items</p>
                    </div>
                    <div className="product-card-img-div end-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/05_110x110.jpg?v=1654930000" alt="" />
                    </div>
                </div>
            </div>
            <div className="row pc-lower-div">
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-no-bottom">
                    <div className="py-3 ps-1">
                        <Link>mobile & tablets</Link>
                        <p className="py-2">5 items</p>
                    </div>
                    <div className="product-card-img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/01_110x110.jpg?v=1654929878" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-no-bottom">
                    <div className="py-3 ps-1">
                        <Link>headphones</Link>
                        <p className="py-2">6 items</p>
                    </div>
                    <div className="product-card-img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/07_110x110.jpg?v=1654930055" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div border-no-bottom">
                    <div className="py-3 ps-1">
                        <Link>accessories</Link>
                        <p className="py-2">19 items</p>
                    </div>
                    <div className="product-card-img-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/08_110x110.jpg?v=1654930082" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-0 p-2 product-card-main-div ">
                    <div className="py-3 ps-1">
                        <Link>portable speakers</Link>
                        <p className="py-2">8 items</p>
                    </div>
                    <div className="product-card-img-div end-div">
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/09_110x110.jpg?v=1654930102" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;
