import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../../components/BreadCrumb'
import MetaTag from '../../components/MetaTag'
import ProductCard from '../../components/ProductCard';
import Color from '../../components/Color';
import Container from '../../components/Container';
const Store = () => {
    const [grid, setGrid] = useState(3);
    return (
        <>
            <MetaTag title="Our Store" />
            <BreadCrumb title="Our Store" />
            <Container className="store-wrapper">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className='ps-1'>
                                    <li>Tv</li>
                                    <li>Watch</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Filter By</h3>
                            <div className='ms-1'>
                                <h5 className="sub-title">Availablity</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label form-check-title" htmlFor=''>
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" value="" id='defaultCheck1' />
                                        <label className='form-check-label form-check-title' htmlFor=''>Out Stock (0)</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <Color />
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-1" />
                                        <label className="form-check-label form-check-title" htmlFor='size-1'>
                                            S (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-2" />
                                        <label className="form-check-label form-check-title" htmlFor='size-2'>
                                            M (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-3" />
                                        <label className="form-check-label form-check-title" htmlFor='size-3'>
                                            L (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-4" />
                                        <label className="form-check-label form-check-title" htmlFor='size-4'>
                                            XL (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-5" />
                                        <label className="form-check-label form-check-title" htmlFor='size-5'>
                                            XXL (1)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10 mt-3">
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Headphones</span>
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Mobile</span>
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Oppo</span>
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Laptop</span>
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Speaker</span>
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Tablet</span>
                                    <span className="badge rounded-2 py-2 px-3 bg-light text-secondary fw-medium">Vivo</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Random Product</h3>
                            <div>
                                <div className="random-product d-flex my-3">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="price fw-medium">$100</p>
                                    </div>
                                </div>
                                <div className="random-product d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="price fw-medium">$100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className='mb-0 d-block' style={{ "width": "50%" }}>Sort by:</p>
                                    <select defaultValue={'Default'} className="form-select" aria-label="Default select example">
                                        <option value='Default' disabled selected>Feature</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price low to high</option>
                                        <option value="price-descending">price high to low</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10 grid-wrapper">
                                    <p className="total-product mb-0">21 Product</p>
                                    <div className="d-flex align-items-center gap-10 grid-box-wrapper">
                                        <div className='grid-box' onClick={() => setGrid(3)}>
                                            <img src="images/gr4.svg" alt="grid" className='d-block img-fluid' />
                                        </div>
                                        <div className='grid-box' onClick={() => setGrid(4)}>
                                            <img src="images/gr3.svg" alt="grid" className='d-block img-fluid' />
                                        </div>
                                        <div className='grid-box' onClick={() => setGrid(6)}>
                                            <img src="images/gr2.svg" alt="grid" className='d-block img-fluid' />
                                        </div>
                                        <div className='grid-box' onClick={() => setGrid(12)}>
                                            <img src="images/gr.svg" alt="grid" className='d-block img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Card */}
                        <div className='product-list py-lg-4 py-2'>
                            <div className="row d-flex flex-wrap gap-10">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Store