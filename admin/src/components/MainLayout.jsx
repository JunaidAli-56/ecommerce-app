import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { GrCatalog } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { PiBellFill } from "react-icons/pi";



const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate()
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='logo'>
                    <h4 className='text-white text-center py-3'>
                        <span className='sm-logo'>GB</span>
                        <span className='lg-logo'>Gaza Bazar</span>
                    </h4>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[""]}
                    onClick={({ key }) => {
                        if (key == 'signout') {

                        } else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <MdOutlineDashboard />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <UserOutlined />,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <GrCatalog />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'product',
                                    icon: <IoMdAdd />,
                                    label: "Add Product"
                                },
                                {
                                    key: 'product-list',
                                    icon: <IoMdAdd />,
                                    label: "Product List"
                                },
                                {
                                    key: 'brand',
                                    icon: <IoMdAdd />,
                                    label: "Add Brand"
                                },
                                {
                                    key: 'brand-list',
                                    icon: <IoMdAdd />,
                                    label: "Brand List"
                                },
                                {
                                    key: 'category',
                                    icon: <IoMdAdd />,
                                    label: "Add Category"
                                },
                                {
                                    key: 'category-list',
                                    icon: <IoMdAdd />,
                                    label: "Category List"
                                },
                                {
                                    key: 'color',
                                    icon: <IoMdAdd />,
                                    label: "Add Color"
                                },
                                {
                                    key: 'color-list',
                                    icon: <IoMdAdd />,
                                    label: "Color List"
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <UserOutlined />,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <UserOutlined />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blogs',
                                    icon: <UserOutlined />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <UserOutlined />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'blog-category',
                                    icon: <UserOutlined />,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <UserOutlined />,
                                    label: 'Blog Category List',
                                },
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <UserOutlined />,
                            label: 'Enquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='d-flex justify-content-between ps-2 pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='d-flex gap-3 align-items-center'>
                        <div className='icon_box'>
                            <PiBellFill className='bell_icon' />
                            <span>3</span>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="admin" className='img-fluid ' height={40} width={40} />
                            </div>
                            <div className='d-flex flex-column justify-conteent-evenly'>
                                <h6>Lali Cake</h6>
                                <p className='mb-0'>alimotu@mail.com</p>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;