import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { getCategory } from '../../features/proCategory/proCategorySlice';
import { useDispatch, useSelector } from 'react-redux'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const CategoryList = () => {
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
        dispatch(getCategory());
    }, [])
    const categoryState = useSelector((state) => state.productCategory.productCategories)
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
        })
    }
    return (
        <>
            <MetaTag title="Category List" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Category List</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CategoryList;