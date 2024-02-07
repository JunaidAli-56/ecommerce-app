import React from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { useDispatch, useSelector } from 'react-redux'
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
            title: 'Products',
            dataIndex: 'products',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];
    const dispatch = useDispatch()
    const brandState = useSelector((state) => state.brand.brands)
    const data1 = [];
    for (let i = 0; i < 46; i++) {
        if (brandState === 'admin') {
            data1.push({
                key: i,
                title: brandState[i].title,
                products: 32,
                status: `London, Park Lane no. ${i}`,
            });
        }
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