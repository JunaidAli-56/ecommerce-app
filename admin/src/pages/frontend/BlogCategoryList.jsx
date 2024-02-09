import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { getBlogCategory } from '../../features/blogCategory/blogCategorySlice';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

const BlogCategoryList = () => {
    // Table Data 
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogCategory());
    }, [])
    const categoryState = (useSelector((state) => state.blogCategory.blogCategories))
    const data1 = [];
    for (let i = 0; i < categoryState.length; i++) {
        data1.push({
            key: i + 1,
            title: categoryState[i].title,
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
            <MetaTag title="Blog Categories" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Blog Categories</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BlogCategoryList;