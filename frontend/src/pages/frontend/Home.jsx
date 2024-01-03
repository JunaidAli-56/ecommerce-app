import React from 'react'
import HeroSection from '../../components/HeroSection'
import SpecialProduct from '../../components/SpecialProduct'
import ItemsCard from '../../components/ItemsCard/ItemsCard'
import Brands from '../../components/BrandCarousel/Brands'
import BlogCard from '../../components/BlogCard'
import ProductCard from '../../components/ProductCard'
import MetaTag from '../../components/MetaTag'
import Container from '../../components/Container'
import { services } from '../../utils/Data'

const Home = () => {
  return (
    <>
      <MetaTag title="Home" />
      {/* Hero Section */}
      <div className='container flex-wrap'>
        <div className="row my-lg-5 my-3">
          <div className="col p-0">
            <HeroSection />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        {/* Services */}
        <Container className='services-wrapper'>
          <div className="row">
            {
              services && services.map((items) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={items.name}>
                    <div className="card card-div">
                      <div className="row inner-row">
                        <div className="col-3">
                          <div className="img-div">
                            <img src={items.image} alt="" /></div>
                        </div>
                        <div className="col-9">
                          <div>
                            <h5>{items.title}</h5>
                            <p>{items.tagline}</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Container>
        {/* Items product 8-Card */}
        <Container className='items-wrapper'>
          <div className="row">
            <div className="col shadow-light rounded-4 bg-white">
              <ItemsCard />
            </div>
          </div>
        </Container>
        {/* Feature Collection */}
        <Container className='featured-wrapper'>
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading mb-4'>Feature Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
        {/* Famous product */}
        <Container className='famous-wrapper'>
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-1.webp" alt="famous" className='img-fluid' />
                <div className="famous-card-content text-white position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>from $399 or $16.62/mo. from 24/mo.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-2.webp" alt="famous" className='img-fluid' />
                <div className="famous-card-content position-absolute">
                  <h5>Studio Display</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27-inch 5k Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-3.webp" alt="famous" className='img-fluid' />
                <div className="famous-card-content position-absolute">
                  <h5>Smart Phones</h5>
                  <h6>Smart Phones 13 pro</h6>
                  <p>Now in Green. From $999 or $116.62/mo. from 24/mo.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-4.webp" alt="famous" className='img-fluid' />
                <div className="famous-card-content position-absolute">
                  <h5>Home Speaker</h5>
                  <h6>Room-filling Sound</h6>
                  <p>From $699 or $116.62/mo. from 24/mo.</p>
                </div>
              </div>
            </div>

          </div>
        </Container>

        {/* special product */}
        <Container className='speacial-wrapper'>
          <div className="row">
            <div className="col-12">
              <h3 className='mb-4'>Speacial Product</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </Container>
        {/* Popular product */}
        <Container className='popular-wrapper'>
          <div className="row">
            <div className="col-12">
              <h3>Our Popular Product</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
        {/* Marquee Slider Section */}
        <Container className='marquee-wrapper'>
          <div className="row">
            <div className="col-12">
              <Brands />
            </div>
          </div>
        </Container>
        {/* Blog Wrapper */}
        <Container className='blog-wrapper'>
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading mb-4'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home;