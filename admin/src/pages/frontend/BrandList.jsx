import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { useDispatch, useSelector } from 'react-redux'
import { getBrands } from '../../features/brand/brandSlice';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BrandList = () => {
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
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBrands())
    }, [])

    const brandState = useSelector((state) => state.brand.brands)
    const data1 = [];
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            title: brandState[i].title,
            action: (
                <>
                    <Link><FiEdit className=' fs-4 text-secondary  me-3' /></Link>
                    <Link><AiOutlineDelete className=' fs-4 text-danger' /></Link>
                </>
            )
        });
    }
    return (
        <>
            <MetaTag title="Brand List" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Brand List</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BrandList;