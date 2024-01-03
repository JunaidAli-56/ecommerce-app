import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className="blog-card shadow-light rounded-4">
            <div className="card-image">
                <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
                <p className='text-secondary date'>24,Dec,2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse?</p>
                <Link to="/blogs/:id" className='button-primary'>Read more</Link>
            </div>
        </div>
    )
}

export default BlogCard