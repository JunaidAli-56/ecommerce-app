import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import Container from '../../components/Container'

const TermsCondition = () => {
  return (
    <>
      <MetaTag title="Terms and Conditions" />
      <BreadCrumb title="Terms and Conditions" />
      <Container className="terms-wrapper">
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

export default TermsCondition