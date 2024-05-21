import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

function Home() {
    return (


        <>
            <Header />

            <div className="banner banner-1 banner-4 light-banner">
                <div className="banner-item">
                    <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: 'url("slices/assets/img/banner/7.jpg")' }}>
                        <div className="container">
                            <img src="slices/assets/img/misc/1.png" alt="img" />
                            <h1 className="title">Modernizing The Traditional Italian Pizza</h1>
                            <p className="subtitle">
                                Indulge in the authentic flavors of Italy with our delicious pizzas, crafted with the finest ingredients and traditional recipes. Buon appetito!
                            </p>
                            <Link to="/menu" className="btn-custom primary">View Menu</Link>
                        </div>
                        <div className="banner-bottom-img">
                            <img src="slices/assets/img/veg/2.png" alt="veg" />
                            <img src="slices/assets/img/prods/3.png" alt="pizza" />
                            <img src="slices/assets/img/veg/12.png" alt="veg" />
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src="slices/assets/img/about.jpg" alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Sir Slice's Heritage</h5>
                                <h2 className="title">Serving Pizzas By The Slice Since 1987</h2>
                                <p className="subtitle">

                                    Our pizza site is your one-stop destination for all things pizza-related. From mouthwatering recipes and cooking tips to reviews of the best pizza joints, we've got you covered. Whether you're a pizza aficionado or just looking for a slice of inspiration, our site is the ultimate resource for pizza lovers everywhere. Dive in and discover the delicious world of pizza with us!
                                </p>

                                <div className="signature">
                                    <img src="slices/assets/img/signature.png" alt="signature" />
                                </div>
                                <Link to="/menu" className="btn-custom">Check our Menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h5 className="custom-primary">Pizza Menu</h5>
                        <h2 className="title">Explore Our Menu</h2>
                        <p className="subtitle">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ct-mini-menu-item">
                                <div className="ct-mini-menu-top">
                                    <h5>Pepperoni Pizza</h5>
                                    <div className="ct-mini-menu-dots" />
                                    <span className="custom-primary">14.99$</span>
                                </div>
                                <div className="ct-mini-menu-bottom">
                                    <p>Classic simplicity - tomato, mozzarella, basil, olive oil perfection.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ct-mini-menu-item">
                                <div className="ct-mini-menu-top">
                                    <h5>Four Cheese</h5>
                                    <div className="ct-mini-menu-dots" />
                                    <span className="custom-primary">13.99$</span>
                                </div>
                                <div className="ct-mini-menu-bottom">
                                    <p>Spicy, savory, timeless favorite with zesty pepperoni slices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ct-mini-menu-item">
                                <div className="ct-mini-menu-top">
                                    <h5>Vegetarian</h5>
                                    <div className="ct-mini-menu-dots" />
                                    <span className="custom-primary">9.99$</span>
                                </div>
                                <div className="ct-mini-menu-bottom">
                                    <p>Loaded with flavors - pepperoni, sausage, veggies, cheese extravaganza.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ct-mini-menu-item">
                                <div className="ct-mini-menu-top">
                                    <h5>Barbeque Chicken</h5>
                                    <div className="ct-mini-menu-dots" />
                                    <span className="custom-primary">13.99$</span>
                                </div>
                                <div className="ct-mini-menu-bottom">
                                    <p>Fresh, colorful veggies atop a bed of cheesy goodness.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ct-mini-menu-item">
                                <div className="ct-mini-menu-top">
                                    <h5>Ham &amp; Cheese</h5>
                                    <div className="ct-mini-menu-dots" />
                                    <span className="custom-primary">11.99$</span>
                                </div>
                                <div className="ct-mini-menu-bottom">
                                    <p>Sweet and savory harmony - ham, pineapple, cheese delight.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ct-mini-menu-item">
                                <div className="ct-mini-menu-top">
                                    <h5>Specialty Pizza</h5>
                                    <div className="ct-mini-menu-dots" />
                                    <span className="custom-primary">10.99$</span>
                                </div>
                                <div className="ct-mini-menu-bottom">
                                    <p> Carnivore's dream - piled high with assorted meats galore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section pt-0">
                <div className="gallery-section">
                    <div className="row no-gutters">
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/1.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/1.jpg" alt="ig" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/2.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/2.jpg" alt="ig" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/3.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/3.jpg" alt="ig" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/4.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/4.jpg" alt="ig" />
                            </a>
                        </div>
                    </div>
                    <div className="gallery-bg bg-parallax dark-overlay dark-overlay-2 bg-cover" style={{ backgroundImage: 'url("assets/img/subheader.jpg")' }}>
                        <div className="section-title-wrap text-center">
                            <h5 className="custom-primary">A Community</h5>
                            <h2 className="title text-white">Stories of Passion</h2>
                            <p className="subtitle text-white">
                            From a small storefront to a bustling pizzeria, our journey embodies dedication, passion, and community support, making us a beloved local gem.
                            </p>
                            <a href="blog-grid.html" className="btn-custom shadow-none">Read Stories</a>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/5.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/5.jpg" alt="ig" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/6.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/6.jpg" alt="ig" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/7.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/7.jpg" alt="ig" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                            <a href="assets/img/ig/8.jpg" className="gallery-thumb">
                                <img src="slices/assets/img/ig/8.jpg" alt="ig" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home