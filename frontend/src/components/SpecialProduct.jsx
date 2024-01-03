import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";



// let time = new Date().toLocaleTimeString();

const SpecialProduct = () => {
    // const [iconState, setIconState] = useState(false);

    // const iconChangeHandler = () => {
    //     (iconState === false) ? setIconState(true) : setIconState(false)
    // }
    return (
        <div className="col-6 mb-2">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Havels</h5>
                        <h6 className="title">Samsung Galaxy Note 10+ Mobile Phone...</h6>
                        <ReactStars
                            count={5}
                            value={4}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className="new-price">$100</span> &nbsp;
                            <strike className="old-price">$200</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center">
                            <p className="mb-0 me-2">
                                <b className="me-1">5</b>
                                Days
                            </p>
                            <div className="d-flex align-items-center gap-10">
                                <span className="badge rounded-circle p-3 ">1</span>:
                                <span className="badge rounded-circle p-3 ">1</span>:
                                <span className="badge rounded-circle p-3 ">1</span>
                            </div>
                        </div>
                        <div className="product-count mt-3">
                            <p>Product: 5</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{ "width": "25%" }}></div>
                            </div>
                        </div>
                        <Link className="button bg-dark text-white rounded-5 px-3 py-2 mt-4">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SpecialProduct;
