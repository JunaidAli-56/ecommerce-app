import React, { useState } from 'react'
import { Carousel } from 'antd';
const HeroSection = () => {
    const [dotPosition, setDotPosition] = useState('right');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <Carousel dotPosition={dotPosition} className="slidercc">
                        <div>
                            <div className='contentStyle slider-main'>
                                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-2_830x550.jpg?v=1655455867;" alt="" />
                                <div className='py-5'>
                                    <p>super charged for pros</p>
                                    <h1>special sale</h1>
                                    <span>from $999.00 or $41.62/mo. <br />
                                        for 24mo. footnote*
                                    </span> <br />
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='contentStyle slider-main'>
                                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-1_830x550.jpg?v=1655701492;" alt="" />
                                <div className='py-5'>
                                    <p>super charged for pros</p>
                                    <h1>special sale</h1>
                                    <span>from $999.00 or $41.62/mo. <br />
                                        for 24mo.footnote*
                                    </span> <br />
                                    <button className='btn btn-primary'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                {/* short card */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="container-fluid mt-2 mb-3">
                        <div className="row short-card px-2">
                            <div className="col-lg-6 col-md-12  p-2 pb-2 m-0">
                                <div className="card">
                                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-01.jpg?v=1655701506" alt="" />
                                    <div className="p-3 short-card-about">
                                        <p>best sale</p>
                                        <h4 className="py-1">special sale</h4>
                                        <span>from $41.62/mo. <br />
                                            for 24mo.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12  p-2 pb-2 m-0">
                                <div className="card">
                                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-03.jpg?v=1654859212" alt="" />
                                    <div className="p-3 short-card-about">
                                        <p>new arrival</p>
                                        <h4 className="py-1">buy ipad air</h4>
                                        <span>from $41.62/mo. <br />
                                            for 24mo.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 p-2 pb-2 m-0">
                                <div className="card">
                                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-02.jpg?v=1654859195" alt="" />
                                    <div className="p-3 short-card-about">
                                        <p>15% OFF</p>
                                        <h4 className="py-1">smart watch 7</h4>
                                        <span>Shop the latest <br />
                                            brand & colors.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12  p-2 pb-2 m-0">
                                <div className="card">
                                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-04.jpg?v=1654859228" alt="" />
                                    <div className="p-3 short-card-about">
                                        <p>free engraving</p>
                                        <h4 className="py-1">airpod max</h4>
                                        <span>High fidelity playback & <br />
                                            ultra-low distortion
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;