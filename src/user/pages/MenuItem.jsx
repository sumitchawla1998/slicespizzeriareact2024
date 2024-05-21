import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import { useParams } from 'react-router-dom'
import { menu } from '../../data/db'

function MenuItem() {
  let {id} = useParams()

  let pizza = menu.find((pizza)=>pizza.id==id)
  console.log(pizza)

  return (
    <>
   
        <Header />
        <Subheader title="Pizza Item" />
        <div className="section product-single">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {/* Main Thumb */}
                <div className="product-thumb">
                  <img src={pizza.url} alt="pizza" width={400} />
                </div>
                {/* /Main Thumb */}
              </div>
              <div className="col-md-7">
                <div className="product-content">
                  {/* Product Title */}
                  <h2 className="title">{pizza.title}</h2>
                  {/* /Product Title */}
                  <div className="favorite">
                    <i className="far fa-heart" />
                  </div>
                  {/* Rating */}
                  <div className="ct-rating-wrapper">
                    <div className="ct-rating">
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star" />
                    </div>
                    <span>(24 ratings)</span>
                  </div>
      
                  <div className="price-wrapper">
                    <p className="product-price">{pizza.price}$</p>
                  </div>
             
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
   
                
    
                  <ul className="product-meta">
                    <li>
                      <span>Categories: </span>
                      <div className="product-meta-item">
                        <a href="#">Pizza</a>
                      </div>
                    </li>
                    <li>
                      <span>Tags: </span>
                      <div className="product-meta-item">
                        <a href="#">Pizza</a>,
                        <a href="#">Cheese</a>,
                        <a href="#">Cheesy Crusts</a>
                      </div>
                    </li>
                    <li>
                      <span>SKU: </span>
                      <div className="product-meta-item">
                        <span>N/A</span>
                      </div>
                    </li>
                  </ul>
   
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <Footer />

      </>



  )
}

export default MenuItem