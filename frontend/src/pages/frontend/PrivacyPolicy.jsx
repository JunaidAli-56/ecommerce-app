import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import Container from '../../components/Container'

const PrivacyPolicy = () => {
  return (
    <>
      <MetaTag title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <Container className="policy-wrapper">
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

export default PrivacyPolicy