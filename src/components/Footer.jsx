import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
         <footer className="ct-footer footer-dark">
                {/* Top Footer */}
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <img src="/slices/assets/img/logo-light.png" alt="logo" />
                        </div>
                        <div className="footer-buttons">
                            <a href="#"> <img src="/slices/assets/img/android.png" alt="download it on the app store" /></a>
                            <a href="#"> <img src="/slices/assets/img/ios.png" alt="download it on the app store" /></a>
                        </div>
                    </div>
                </div>
                {/* Middle Footer */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li> <a href="#">Home</a> </li>
                                    <li> <a href="#">About</a> </li>
                                    <li> <a href="#">Menu</a> </li>
                                    <li> <a href="#">Register</a> </li>
                                    <li> <a href="#">Login</a> </li>
                                    <li> <a href="#">Contact Us</a> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Top Items</h5>
                                <ul>
                                    <li> <a href="#">Pepperoni</a> </li>
                                    <li> <a href="#">Swiss Mushroom</a> </li>
                                    <li> <a href="#">Barbeque Chicken</a> </li>
                                    <li> <a href="#">Vegetarian</a> </li>
                                    <li> <a href="#">Four Cheese</a> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Others</h5>
                                <ul>
                                    <li> <a href="#">Checkout</a> </li>
                                    <li> <a href="#">Cart</a> </li>
                                    <li> <a href="#">Menu</a> </li>
                                    <li> <a href="#">Locations</a> </li>

                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                                <h5 className="widget-title">Social Media</h5>
                                <ul className="social-media">
                                    <li> <a href="#" className="facebook"> <i className="fab fa-facebook-f" /> </a> </li>
                                    <li> <a href="#" className="pinterest"> <i className="fab fa-pinterest-p" /> </a> </li>
                                    <li> <a href="#" className="google"> <i className="fab fa-google" /> </a> </li>
                                    <li> <a href="#" className="twitter"> <i className="fab fa-twitter" /> </a> </li>
                                </ul>
                                <div className="footer-offer">
                                    <p>Signup and get exclusive offers and coupon codes</p>
                                    <Link to="/register" className="btn-custom btn-sm shadow-none">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      
                <div className="footer-bottom">
                    <div className="container">
                        <ul>
                            <li> <a href="#">Privacy Policy</a> </li>
                            <li> <a href="#">Refund Policy</a> </li>
                            <li> <a href="#">Cookie Policy</a> </li>
                            <li> <a href="#">Terms &amp; Conditions</a> </li>
                        </ul>
                        <div className="footer-copyright">
                            <p> Copyright © 2024 <a href="https://ultrontechnologies.in/">Ultron Technologies </a> All Rights Reserved. </p>
                            <a href="#" className="back-to-top">Back to top <i className="fas fa-chevron-up" /> </a>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer