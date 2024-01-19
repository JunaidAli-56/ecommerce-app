import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GrCatalog } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

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
                <h3 className='text-white my-2 ms-4'>Allah</h3>
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
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;