import React from 'react'
import Marquee from "react-fast-marquee";
const Brands = () => {
    return (
        <div className='marquee-inner-wrapper bg-white shadow-light rounded-3'>
            <Marquee className='d-flex'>
                <div>
                    <img src="images/brand-01.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-02.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-03.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-04.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-05.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-06.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-07.png" alt="brand" />
                </div>
                <div>
                    <img src="images/brand-08.png" alt="brand" />
                </div>
            </Marquee>
        </div>
    )
}

export default Brands