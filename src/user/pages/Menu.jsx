import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { menu } from '../../data/db'
import PizzaCard from '../../components/PizzaCard'

// import { useCartStore } from '../../store/cartstore'
function Menu() {

  // let items = useCartStore((state)=> (state.items))

  return (
    <div>
        <Header />
        <div className="section section-padding menu-v2">
          <div className="container">
            <div className="menu-category dark-overlay dark-overlay-2" style={{ backgroundImage: 'url("/slices/assets/img/categories-lg/1.jpg")' }}>
              <h3>Pizzas</h3>
              <p>Explore our mouthwatering selection of pizzas, featuring a variety of toppings and flavors to satisfy every craving. Order now!</p>
            </div>
            <div className="row">
              {menu.map((pizza) => <PizzaCard id={pizza.id} title={pizza.title} description={pizza.description} price={pizza.price} url={pizza.url} />)}
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Menu