import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import Color from '../../components/Color'
import Container from '../../components/Container'

const CompareProduct = () => {
  return (
    <>
      <MetaTag title="Comapre Products" />
      <BreadCrumb title="Comapre Products" />
      <Container className="compare-product-wrapper">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src="images/cross.svg" alt="cross" className="position-absolute cross-icon img-fluid" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung Galaxy A23 128GB 6GB RAM Purple Color</h5>
                <h6 className="price my-3">$350.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand</h5>
                    <p>Havel</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type</h5>
                    <p>Tablet Computer</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size</h5>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src="images/cross.svg" alt="cross" className="position-absolute cross-icon img-fluid" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung Galaxy A23 128GB 6GB RAM Purple Color</h5>
                <h6 className="price my-3">$350.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand</h5>
                    <p>Havel</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type</h5>
                    <p>Tablet Computer</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size</h5>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProduct