import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/customers/customerSlice';

const Customer = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    // Table Data 
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            defaultSortOrder: "descend",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
        },
    ];
    const customerState = useSelector((state) => state.customer.customers);

    const data1 = [];
    for (let i = 0; i < customerState.length; i++) {
        if (customerState[i].role !== "admin") {
            data1.push({
                key: i,
                name: `${customerState[i].firstname} ${customerState[i].lastname}`,
                email: customerState[i].email,
                mobile: customerState[i].mobile,
            });
        }
    }

    return (
        <>
            <MetaTag title="Customers" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Customers</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Customer;