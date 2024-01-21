import React from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
const Enquiries = () => {
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
    const data1 = [];
    for (let i = 0; i < 46; i++) {
        data1.push({
            key: i,
            name: `Edward King ${i}`,
            products: 32,
            status: `London, Park Lane no. ${i}`,
        });
    }
    return (
        <>
            <MetaTag title="Enquiries" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Enquiries</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Enquiries;