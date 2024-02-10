import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { getEnquiries } from '../../features/enquiry/enquirySlice';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

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
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
        },
        {
            title: 'Comments',
            dataIndex: 'comment',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEnquiries());
    }, [])
    const enqState = (useSelector((state) => state.enquiry.enquiries))
    const data1 = [];
    for (let i = 0; i < enqState.length; i++) {
        data1.push({
            key: i + 1,
            name: <div className='text-capitalize'>{enqState[i].name}</div>,
            email: enqState[i].email,
            mobile: enqState[i].mobile,
            comment: enqState[i].comment,
            status: (
                <select defaultValue={'Default'} className="form-select" aria-label="Default select example">
                    <option value='Default' disabled selected>Set status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            ),
            action: (
                <Link><AiOutlineDelete className=' fs-4 text-danger' /></Link>
            ),
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