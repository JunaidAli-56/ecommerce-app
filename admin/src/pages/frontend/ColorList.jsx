import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { useDispatch, useSelector } from "react-redux"
import { getColors } from '../../features/color/colorSlice';

const ColorList = () => {
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
            title: 'Status',
            dataIndex: 'status',
        },
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getColors());
    },)
    const colorState = useSelector((state) => state.color.colors)
    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i,
            name: `Edward King ${i}`,
            products: 32,
            status: `London, Park Lane no. ${i}`,
        });
    }
    return (
        <>
            <MetaTag title="Color List" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Color List</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ColorList;