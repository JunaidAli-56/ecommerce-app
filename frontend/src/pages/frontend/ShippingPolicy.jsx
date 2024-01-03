import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import Container from '../../components/Container'

const ShippingPolicy = () => {
  return (
    <>
      <MetaTag title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />
      <Container className="shipping-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="policy-card">

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShippingPolicy