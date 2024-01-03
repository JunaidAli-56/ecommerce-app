import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import Container from '../../components/Container'

const Wishlist = () => {
    return (
        <>
            <MetaTag title="Wishlist" />
            <BreadCrumb title="Wishlist" />
            <Container className="wishlist-wrapper">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross-icon img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className="wishlist-card-details">
                                <h5 className="title">Samsung Galaxy A23 128GB 6GB RAM Purple Color</h5>
                                <h6 className="price my-3">$350.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross-icon img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className="wishlist-card-details">
                                <h5 className="title">Samsung Galaxy A23 128GB 6GB RAM Purple Color</h5>
                                <h6 className="price my-3">$350.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross-icon img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className="wishlist-card-details">
                                <h5 className="title">Samsung Galaxy A23 128GB 6GB RAM Purple Color</h5>
                                <h6 className="price my-3">$350.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Wishlist