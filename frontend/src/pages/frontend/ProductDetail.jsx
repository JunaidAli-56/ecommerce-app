import React, { useState } from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import ProductCard from '../../components/ProductCard'
import Color from '../../components/Color'
import ReactStars from "react-rating-stars-component";
import ImageZoom from "react-image-zooom";
import { GoGitCompare } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoLink } from "react-icons/go";
import Container from '../../components/Container'


const ProductDetail = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <MetaTag title="Product Detail" />
            <BreadCrumb title="Product Detail" />
            <Container className="main-product-wrapper">
                <div className="row">
                    <div className="col-6">
                        <div className="product-detail-image">
                            <div>
                                <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200" className="zoom-image" />
                            </div>
                            <div className="other-product-images mt-2 d-flex flex-wrap justify-content-between">
                                <div>
                                    <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200" className="zoom-image" />
                                </div>
                                <div>
                                    <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200" className="zoom-image" />
                                </div>
                                <div>
                                    <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200" className="zoom-image" />
                                </div>
                                <div>
                                    <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200" className="zoom-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product-details-box">
                            <div className='border-bottom'>
                                <h3 className='title'>Samsung Galaxy Note 10+ Mobile Phone...</h3>
                            </div>
                            <div className="border-bottom">
                                <h6 className='price'>$100</h6>
                                <div className='d-flex gap-10 align-items-center'>
                                    <ReactStars
                                        count={5}
                                        value={4}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>2 reviews</p>
                                </div>
                                <a href="#review" className='mb-2'>write a review</a>
                            </div>
                            <div className="border-bottom">
                                <div className="d-flex align-items-center gap-10 mb-3">
                                    <h3 className='title'>Type :</h3>
                                    <p>Head</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 mb-3">
                                    <h3 className='title'>Type :</h3>
                                    <p>Headset</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 mb-3">
                                    <h3 className='title'>Brand :</h3>
                                    <p>Havels</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 mb-3">
                                    <h3 className='title'>Categories :</h3>
                                    <p>airpods</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 mb-3">
                                    <h3 className='title'>Tags :</h3>
                                    <p>Headphones</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 mb-3">
                                    <h3 className='title'>Availability :</h3>
                                    <p>In Stock</p>
                                </div>
                                <div className="d-flex flex-column gap-10 mb-3">
                                    <h3 className='title'>Size :</h3>
                                    <div className='d-flex gap-15 flex-wrap'>
                                        <span className='badge bg-white border border-1 text-dark border-secondary px-3 py-2'>S</span>
                                        <span className='badge bg-white border border-1 text-dark border-secondary px-3 py-2'>M</span>
                                        <span className='badge bg-white border border-1 text-dark border-secondary px-3 py-2'>L</span>
                                        <span className='badge bg-white border border-1 text-dark border-secondary px-3 py-2'>XL</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-10 mb-3">
                                    <h3 className='title'>Color :</h3>
                                    <Color />
                                </div>
                                <div className="d-flex align-items-center gap-15 mb-3">
                                    <h3 className='title'>Quantity :</h3>
                                    <div>
                                        <input type="number" name='' min={1} max={20} className='form-control' style={{ width: "70px" }} id='' />
                                    </div>
                                    <div className='d-flex gap-15'>
                                        <button className='btn btn-primary bg-dark text-white rounded-3'>Add to cart</button>
                                        <button className='btn btn-primary rounded-3'>Buy it now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15 mb-3'>
                                    <div>
                                        <a href="" className='text-decoration-none fw-normal'><IoIosHeartEmpty className='me-1' size={20} />Add to Wishlist</a>
                                    </div>
                                    <div>
                                        <a href="" className='text-decoration-none fw-normal'><GoGitCompare className='me-1' size={20} />Add to Compare</a>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-10 mb-3">
                                    <h3 className='title'>Shipping & Return :</h3>
                                    <p>Free shipping and returns available on all orders!
                                        We ship all US domestic orders within<b> 5-10 business days!</b></p>
                                </div>
                                <div className='d-flex align-items-center gap-15 mb-3'>
                                    <div>
                                        <a href="javascript:void(0)" onClick={() => copyToClipboard("https://picsum.photos/seed/000/1920/1080")} className='text-decoration-none fw-normal'><GoLink className='me-1' size={20} />Share</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="description-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className='p-3 bg-white'>
                            <h3>Desc</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui pariatur repudiandae sapiente expedita voluptas perferendis? Possimus sint sequi aliquid ab totam officia. Sequi officiis a possimus aliquam ipsa aliquid cumque maxime ipsam perferendis qui.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container id="review" className="reviews-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className='bg-white p-3'>
                            <div className="review-head d-flex justify-content-between align-items-end pb-2">
                                <div>
                                    <h3>Reviews</h3>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a href="#" className='mb-1 text-dark text-decoration-underline'>Write a review</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="review-form mt-3">
                                <form action="" className='d-flex flex-column gap-15'>
                                    <h6 className='mb-0'>Write a review</h6>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea name="" id="" className='form-control w-100' placeholder='Comments' cols="30" rows="4"></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className="btn bg-dark text-white rounded-5 py-2 px-3">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews">
                                <div className="review">
                                    <div className='d-flex align-items-center gap-10'>
                                        <h6 className='mb-0'>Jarviz</h6>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, dolorem?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="popular-wrapper bg-white">
                <div className="row">
                    <div className="col-12">
                        <h3>Our Popular Product</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default ProductDetail;