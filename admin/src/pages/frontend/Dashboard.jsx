import React from 'react'
import MetaTag from "../../components/MetaTag"
import Container from "../../components/Container"
const Dashboard = () => {
  return (
    <>
      <MetaTag title="Dashboard" />
      <Container>
        <h3 className='mb-3'>Dashboard</h3>
        <div className="row">
          <div className="col-4">
            <div className="card_style">1</div>
          </div>
          <div className="col-4">
            <div className="card_style">1</div>
          </div>
          <div className="col-4">
            <div className="card_style">1</div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard;