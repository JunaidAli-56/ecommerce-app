import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../features/auth/authSlice';

const Orders = () => {
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
            title: 'Products',
            dataIndex: 'products',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders())
    }, [])
    const orderState = (useSelector((state) => state.auth.orders))
    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderBy.firstname,
            products: orderState[i].products.map((i) => {
                return (
                    <div key={i.product.title}>
                        <span>{i.product.title}</span>
                    </div>
                )
            }),
            status: `London, Park Lane no. ${i}`,
            action: (
                <Link><AiOutlineDelete className=' fs-4 text-danger' /></Link>
            ),
        });
    }
    return (
        <>
            <MetaTag title="Orders" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Orders</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Orders;