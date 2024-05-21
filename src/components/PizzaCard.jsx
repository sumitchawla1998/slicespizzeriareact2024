import React from 'react'
import { useCartStore } from '../store/cart'
import { Link } from 'react-router-dom'



function Pizzacard({ id, title, description, url, price }) {

  let items = useCartStore((state) => state.items)
  let updateitems = useCartStore((state) => state.updateitems)

  function addtocart() {
    let pizza = { "id": id, "quantity": 1, "title": title, "url": url, "price": price, "tprice": price }

    updateitems(pizza)
    console.log(items)
  }

  return (
    <>

      <div className="col-lg-4 col-md-6">
        {/* <Link to={`/menu/${id}`}> */}
          <div className="product">
            <a className="product-thumb" href=""> <img src={url} alt="menu item" /> </a>
            <div className="product-body">
              <div className="product-desc">
                <h4> <a href="">{title}</a> </h4>
                <p>{description}</p>
                {/* <a href="#" className="btn-custom light btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#customizeModal"> Customize <i className="fas fa-plus" /> </a> */}
              </div>
              <div className="product-controls">
                <p className="product-price">{price}$</p>
                <button onClick={addtocart} className="order-item btn-custom btn-sm shadow-none">Add <i className="fas fa-shopping-cart" /> </button>
              </div>
            </div>
          </div>
        {/* </Link> */}
      </div>

    </>
  )
}

export default Pizzacard