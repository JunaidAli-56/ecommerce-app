import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { useDispatch, useSelector } from 'react-redux'
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
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getColors());
    }, [dispatch])
    const colorState = useSelector((state) => state.color.colors)
    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i + 1,
            name: <div className='d-flex align-items-center'><div className="shadow-medium me-2 rounded-5" style={{ width: "30px", height: "30px", backgroundColor: `${colorState[i].title}` }}></div>{colorState[i].title}</div>
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