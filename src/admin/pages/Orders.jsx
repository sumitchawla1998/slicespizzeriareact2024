import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseconfig'
import Subheader from '../../components/Subheader'
import AdminHeader from '../../components/AdminHeader'
import { success } from '../../utils/messages'

function Orders() {
  let [orders, setOrders] = useState([])

  // let [status,setStatus] = useState("")
  let colref = collection(db, "orders")
  useEffect(() => {
    let unsub = onSnapshot(colref, function (snapShot) {
      let result = []
      snapShot.docs.forEach(function (doc) {
        result.push({ id: doc.id, ...doc.data() })
      })

      setOrders(result)
    })
    return () => unsub()
  }, [])


  async function updateorder(id,status){
    let docref = doc(db,"orders",id)
    await updateDoc(docref,{
      status : status
    })

    success("Order Status Updated")
  }
  return (
    <>

      <div className="search-form-wrapper">
        <div className="search-trigger close-btn">
          <span />
          <span />
        </div>
        <form className="search-form" method="post">
          <input type="text" placeholder="Search..." defaultValue />
          <button type="submit" className="search-btn">
            <i className="flaticon-magnifying-glass" />
          </button>
        </form>
      </div>

      <div className="aside-overlay aside-trigger" />

      <AdminHeader />

      <Subheader title="Orders" />

      <section className="section">
        <div className="container">
          <form method="post">
            <div className="row">

              <div className="col-xl-12 checkout-billing">
                {/* Order Details Start */}
                <table className="ct-responsive-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Total Price</th>
                      <th>Order Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders && orders.map((order) => (
                      <tr>

                        <td data-title="Product">
                          <div className="cart-product-wrapper">
                            <div className="cart-product-body">
                              <h6> <a href="#">{order.id}</a> </h6>

                            </div>
                          </div>
                        </td>
                        <td data-title="Quantity">{order.fnm}</td>
                        <td data-title="Quantity">{order.address}</td>
                        <td data-title="Total"> <strong>{order.totalprice}$</strong> </td>
                        <td data-title="Total">
                         
                          <select value={order.status} className="form-control" onChange={(e)=>{
                            updateorder(order.id,e.target.value)
                            
                            
                          }}>
                            <option value="Placed">Placed</option>
                            <option value="Confirmation">Confirmation</option>
                            <option value="Preparation">Preparation</option>
                            <option value="Our For Delivery">Out For Delivery</option>
                            <option value="Completed">Completed</option>
                        </select>
                        </td>
                      </tr>
                    ))}


                  </tbody>
                </table>



              </div>
            </div>
          </form>
        </div>
      </section>

    </>

  )
}
export default Orders

