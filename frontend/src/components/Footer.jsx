import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import svg from './svg'
import newsletter from "../images/newsletter.png"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className="bg-dark">
        <div className="container text-white">
          <div className="row py-4 footer-upper">
            <div className="col-lg-5 col-md-12 col-sm-12 ps-5 newsletter-div">
              <div>
                <img src={newsletter} alt="newsletters" />
                <h2 className="ms-2 me-4 text-white">SignUp For Newsletter</h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 pe-5 input-div">
              <div>
                <div className="input-group">
                  <input type="text" className="form-control  border-0 input-style" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2" />
                  <button className="btn m-1" type="button" id="button-addon2">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row footer-lower pt-3">
            <div className="col-lg-3 col-md-3 col-sm-4 col-contact">
              <h5>contact us</h5>
              <ul>
                <li>
                  <span>
                    Demo Store <br />
                    No. 1259 Freedom,<br />
                    New York, 11111 <br />
                    United States
                  </span>
                </li>
                <li>
                  <span>+91-987654321</span>
                </li>
                <li><Link to="">demo@example.com</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-info">
              <h5>information</h5>
              <ul>
                <li><Link to='/terms-condition'>Terms of Service</Link></li>
                <li><Link to='/shipping-policy'>Shipping Policy</Link></li>
                <li><Link to='/refund-policy'>Refund Policy</Link></li>
                <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-acc">
              <h5>account</h5>
              <ul>
                <li><Link>Size Chat</Link></li>
                <li><Link>About us</Link></li>
                <li><Link>Contact</Link></li>
                <li><Link>Search</Link></li>
                <li><Link>Faq</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-4 col-quickLinks">
              <h5>quick links</h5>
              <ul>
                <li><Link>Smart Watches</Link></li>
                <li><Link>Headphones</Link></li>
                <li><Link>Accessories</Link></li>
                <li><Link>Laptops</Link></li>
                <li><Link>Tablets</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h5>our app</h5>
              <span>Download our App and get extra 15% <br />
                Discount on your first order..!
              </span>
              <div className="row ourApp-row">
                <div className="col my-2">
                  <Link to='https://play.google.com/store/games'><img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/app-icon-01.png?v=1654931267" alt="" /></Link>
                </div>
                <div className="col">
                  <Link to='https://www.apple.com/app-store/'> <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/app-icon-02.png?v=1654931286" alt="" /></Link>
                </div>
              </div>

            </div>
          </div>
          <div className="row icon-row">
            <div className="col py-3">
              <ul>
                <li><Link><FaFacebookF /></Link></li>
                <li><Link><FaTwitter /></Link></li>
                <li><Link><FaInstagram /></Link></li>
                <li><Link><FaYoutube /></Link></li>
                <li><Link><FaPinterest /></Link></li>
              </ul>
            </div>
          </div>
          <div className="row copyright-row pt-4">
            <hr />
            <div className="row d-flex justify-content-between">
              <div className="col-4 col-sm-6 ps-3 py-4">
                <p> &copy; {year} - All Right Reserved.</p>
              </div>
              <div className="col-4 pay-icon d-flex justify-content-end pe-3 pt-4">
                {svg.map((props, i) => {
                  return (
                    <div className="px-1" key={i}>
                      {props.image}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
