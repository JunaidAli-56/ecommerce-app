import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import blog from "../../images/blog-1.jpg"
import Container from '../../components/Container';
const BlogDetail = () => {
    return (
        <>
            <MetaTag title="Blog Detail" />
            <BreadCrumb title="Blog Detail" />
            <Container className="blog-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="blog-detail-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-1 mb-3'><IoArrowBack />Back to blogs</Link>
                            <h3 className="title">A Beautiful Sunday Morning</h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio, enim excepturi delectus corrupti adipisci. Distinctio ad, id dolorum culpa voluptates autem ipsum quas eaque voluptatibus velit ullam, sint hic dolore rem consequatur explicabo eligendi quae, debitis vitae tempora. Reprehenderit minus voluptas exercitationem est.</p>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default BlogDetail