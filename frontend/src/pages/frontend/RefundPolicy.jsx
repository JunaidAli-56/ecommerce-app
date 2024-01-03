import React from 'react'
import MetaTag from '../../components/MetaTag';
import BreadCrumb from '../../components/BreadCrumb';
import Container from '../../components/Container';

const RefundPolicy = () => {
    return (
        <>
            <MetaTag title="Refund Policy" />
            <BreadCrumb title="Refund Policy" />
            <Container className="refund-wrapper">
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

export default RefundPolicy;