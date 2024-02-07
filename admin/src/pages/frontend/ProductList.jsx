import React, { useEffect } from 'react'
import { Table } from 'antd';
import Container from '../../components/Container';
import MetaTag from '../../components/MetaTag';
import { getProducts } from '../../features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

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
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            sorter: (a, b) => a.brand.length - b.brand.length,
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Colour',
            dataIndex: 'color',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            dataIndex: 'action',
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
            key: i+1,
            title: productState[i].title,
            brand: productState[i].brand,
            price: `$ ${productState[i].price}`,
            color: productState[i].color,
            category: productState[i].category,
            action: (
                <>
                    <Link><FiEdit className=' fs-4 text-secondary  me-3' /></Link>
                    <Link><AiOutlineDelete className=' fs-4 text-danger' /></Link>
                </>
            ),
        });
    }
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