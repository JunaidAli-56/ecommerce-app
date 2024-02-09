import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../features/blog/blogSlice';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
const BlogList = () => {
    // Table Data 
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, [])
    const blogState = (useSelector((state) => state.blog.blogs))
    console.log(blogState)
    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i + 1,
            name: blogState[i].title,
            category: blogState[i].category,
            action: (
                <>
                    <Link><FiEdit className=' fs-4 text-secondary  me-3' /></Link>
                    <Link><AiOutlineDelete className=' fs-4 text-danger' /></Link>
                </>
            ),
        });
    }
    return (
        <>
            <MetaTag title="Blogs List" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Blogs List</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BlogList;