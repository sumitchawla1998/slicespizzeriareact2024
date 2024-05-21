import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useCartStore } from '../../store/cart'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../../store/user'

function Cart() {

    let items = useCartStore((state)=> (state.items))
    let updatecart = useCartStore((state)=> (state.updatecart))
    let totalprice = useCartStore((state)=> (state.totalprice))
    let removeitem = useCartStore((state) => state.removeitem)

    let isloggedin = useUserStore((state) => state.isloggedin)
    let navigate = useNavigate()
    
    return (
        <>
            <Header />
            <section className="section">
                <div className="container">
                    {/* Cart Table Start */}
                    <table className="ct-responsive-table">
                        <thead>
                            <tr>
                                <th className="remove-item" />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qunantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                         {items.map((cartitem,index) => {
                                return (
                                    <tr>
                                        <td className="remove">
                                            <button onClick={()=>{
                                                removeitem(index)
                                            }} type="button" className="close-btn close-danger remove-from-cart">
                                                <span />
                                                <span />
                                            </button>
                                        </td>
                                        <td data-title="Product">
                                            <div className="cart-product-wrapper">
                                                <img src="slices/assets/img/prods-sm/5.png" alt="prod1" />
                                                <div className="cart-product-body">
                                                    <h6> <a href="#">{cartitem.title}</a> </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-title="Price"> <strong>{cartitem.price}</strong> </td>
                                        <td className="quantity" data-title="Quantity">
                                            <input onChange={(e)=>{
                                                updatecart(index,Number(e.target.value))
                                                
                                            }} type="number" className="qty form-control" value={cartitem.quantity} />
                                        </td>
                                        <td data-title="Total"> <strong>{cartitem.tprice}</strong> </td>
                                    </tr>
                                )
                            })} 


                        </tbody>
                    </table>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="form-group mb-0">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Coupon Code" />
                                    <div className="input-group-append">
                                        <button className="btn-custom shadow-none" type="button">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                    <div className="row ct-cart-form">
                        <div className="offset-lg-6 col-lg-6">
                            <h4>Cart Total</h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>{totalprice}$</td>
                                    </tr>
                                    <tr>
                                        <th>Tax</th>
                                        <td>0$ </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td> <b>{totalprice}$</b> </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={()=>{
                                if(isloggedin){
                                    navigate("/checkout")
                                }else{
                                    navigate("/login")
                                }
                            }} className="btn-custom primary btn-block">Proceed to Checkout</button>
                        </div>
                    </div>

                </div>
            </section>
          
            <Footer />


        </>
    )
}

export default Cart