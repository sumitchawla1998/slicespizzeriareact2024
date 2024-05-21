import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../../firebase/firebaseconfig'
import { useUserStore} from '../../store/user'

function MyOrders() {
    
    let user = useUserStore((state) => state.user)

    let [orders, setOrders] = useState([])
    let colref = collection(db, "orders")
    let q = query(colref, where("uid", "==", user.uid))
    useEffect(() => {
        let unsub = onSnapshot(q, function (snapShot) {
            let result = []
            snapShot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })

            setOrders(result)
        })
        return () => unsub()
    }, [])
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

            <Header />

            <Subheader title="My Orders" />

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
                                                <td data-title="Quantity">{order.address}</td>
                                                <td data-title="Total"> <strong>{order.totalprice}$</strong> </td>
                                                <td data-title="Total"> <strong>{order.status}</strong> </td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />




        </>

    )
}

export default MyOrders

