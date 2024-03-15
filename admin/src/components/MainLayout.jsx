import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Badge } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { GrCatalog } from "react-icons/gr";
import { MdOutlineDashboard, MdOutlineColorLens } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";
import { TbBrandAbstract } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { CiDeliveryTruck, CiCircleList } from "react-icons/ci";
import { TbBrandBlogger } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                        if (key === 'signout') {

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
                                    icon: <RiProductHuntLine />,
                                    label: "Product List"
                                },
                                {
                                    key: 'brand',
                                    icon: <IoMdAdd />,
                                    label: "Add Brand"
                                },
                                {
                                    key: 'brand-list',
                                    icon: <TbBrandAbstract className='fw-normal' />,
                                    label: "Brand List"
                                },
                                {
                                    key: 'category',
                                    icon: <IoMdAdd />,
                                    label: "Add Category"
                                },
                                {
                                    key: 'category-list',
                                    icon: <BiCategoryAlt />,
                                    label: "Category List"
                                },
                                {
                                    key: 'color',
                                    icon: <IoMdAdd />,
                                    label: "Add Color"
                                },
                                {
                                    key: 'color-list',
                                    icon: <MdOutlineColorLens />,
                                    label: "Color List"
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <CiDeliveryTruck />,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <TbBrandBlogger />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'add-blogs',
                                    icon: <IoMdAdd />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <CiCircleList />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'blog-category',
                                    icon: <IoMdAdd />,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <BiCategoryAlt />,
                                    label: 'Blog Category List',
                                },
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <IoMdContacts />,
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
                        <div className='d-flex gap-3 align-items-center dropdown'>
                            <div>
                                <Badge count={5}>
                                    <Avatar shape="square" size="large" src={<img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="avatar" />} />
                                </Badge>
                            </div>
                            <div className='d-flex flex-column justify-content-evenly'
                                type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                <h6>Lali Cake</h6>
                                <p className='mb-0'>alimotu@mail.com</p>
                            </div>
                            <div>
                                <ul className="dropdown-menu dropdown-menu_user border-0 shadow-light p-2">
                                    <li><Link className="dropdown-item" to="#">View profile</Link></li>
                                    <li><Link className="dropdown-item" to="#">Settings</Link></li>
                                    <li><Link className="dropdown-item text-danger" to="/">Logout</Link></li>
                                </ul>
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
                    <ToastContainer
                        position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;