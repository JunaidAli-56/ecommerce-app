import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import BlogCard from '../../components/BlogCard'
import Container from '../../components/Container'

const Blog = () => {
    return (
        <>
            <MetaTag title="Blogs" />
            <BreadCrumb title="Blogs" />
            <Container className="blog-wrapper">
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
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 mb-4">
                                <BlogCard />
                            </div>
                            <div className="col-6 mb-4">
                                <BlogCard />
                            </div>
                            <div className="col-6 mb-4">
                                <BlogCard />
                            </div>
                            <div className="col-6 mb-4">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog