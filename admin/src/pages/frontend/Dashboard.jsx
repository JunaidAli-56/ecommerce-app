import React from 'react'
import MetaTag from "../../components/MetaTag"
import Container from "../../components/Container"
import Card from '../../components/Card'

import { Column } from '@ant-design/plots';
// icons  
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#FEBD69";
    },
    label: {
      // 可手动配置 label 数据标签位置
      // position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <>
      <MetaTag title="Dashboard" />
      <Container>
        <div className="row">
          <h3 className='mb-3'>Dashboard</h3>
          <div className="col-4">
            <Card className='d-flex justify-content-between align-items-cennter dashboard-card'>
              <div className='d-flex flex-column justify-content-between'>
                <p className='mb-4'>Total</p>
                <h3 className='mb-0 my-3'><span className='fs-5'>$</span>1100</h3>
              </div>
              <div className='d-flex flex-column justify-content-between align-items-end'>
                <div className='mb-4'>
                  <CiMenuKebab className='text-secondary' />
                </div>
                <div className='d-flex flex-column align-items-end'>
                  <h5 className='d-flex align-items-center text-success'><FaArrowTrendUp className='me-1' />32%</h5>
                  <p>Compared to Apirl 2022</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-4">
            <Card className='d-flex justify-content-between align-items-cennter dashboard-card'>
              <div className='d-flex flex-column justify-content-between'>
                <p className='mb-4'>Total</p>
                <h3 className='mb-0 my-3'><span className='fs-5'>$</span>1100</h3>
              </div>
              <div className='d-flex flex-column justify-content-between align-items-end'>
                <div className='mb-4'>
                  <CiMenuKebab className='text-secondary' />
                </div>
                <div className='d-flex flex-column align-items-end'>
                  <h5 className='d-flex align-items-center text-danger'><FaArrowTrendDown className='me-1' />32%</h5>
                  <p>Compared to Apirl 2022</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-4">
            <Card className='d-flex justify-content-between align-items-cennter dashboard-card'>
              <div className='d-flex flex-column justify-content-between'>
                <p className='mb-4'>Total</p>
                <h3 className='mb-0 my-3'><span className='fs-5'>$</span>1100</h3>
              </div>
              <div className='d-flex flex-column justify-content-between align-items-end'>
                <div className='mb-4'>
                  <CiMenuKebab className='text-secondary' />
                </div>
                <div className='d-flex flex-column align-items-end'>
                  <h5 className='d-flex align-items-center text-success'><FaArrowTrendUp className='me-1' />32%</h5>
                  <p>Compared to Apirl 2022</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="row mt-4">
          <h3 className='mb-3'>Income Statics</h3>
          <div className="col-12">
            <Column {...config} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard;


