import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { getProducts } from '../../features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
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
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, []);
    const productState = useSelector((state) => state.product.products)

    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
        data1.push({
            key: i,
            title: productState[i].title,
            brand: productState[i].brand,
            price: `$ ${productState[i].price}`,
            products: 32,
            status: `London, Park Lane no. ${i}`,
        });
    }
    console.log(data1)
    return (
        <>
            <MetaTag title="Products List" />
            <Container>
                <div className="row">
                    <h3 className='mb-3'>Products List</h3>
                    <div className="col-12">
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProductList;