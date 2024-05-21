import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import { useUserStore } from '../../store/user'
import { useCartStore } from '../../store/cart'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebaseconfig'
import { error, success } from '../../utils/messages'

function Checkout() {

  let [fnm, setFnm] = useState("")
  let [lnm, setLnm] = useState("")
  let [company, setCompany] = useState("")
  let [city, setCity] = useState("")
  let [address, setAddress] = useState("")
  let [mobile, setMobile] = useState("")
  let [email, setEmail] = useState("")
  let [notes, setNotes] = useState("")

  let items = useCartStore((state) => state.items)
  let totalprice = useCartStore((state) => state.totalprice)
  let user = useUserStore((state) => state.user)
  let navigate = useNavigate()

  async function checkout(e) {
    e.preventDefault()
    if (fnm == "" || lnm == "" || company == "" || city == "" || address == "" || mobile == "" || email == "" || notes == "") {
      error("All Fields Are Required")
      return
    }
    let colref = collection(db, "orders")
    let docref = await addDoc(colref, {
      "uid": user.uid,
      "cust": user.displayName,
      "items": items,
      "size": items.length,
      "totalprice": totalprice,
      "fnm": fnm,
      "lnm": lnm,
      "city": city,
      "mobile": mobile,
      "address": address,
      "notes": notes,
      "status": "Placed"

    })

    success("Order Placed")
    navigate("/myorders")
  }
  return (
    <>
      <Header />
      <Subheader title="Checkout" />
      <section className="section">
        <div className="container">
          <form onSubmit={checkout}>
            <div className="row">
              <div className="col-xl-12">
                <h4>Billing Details</h4>
                <div className="row">
                  <div className="form-group col-xl-6">
                    <label>First Name <span className="text-danger">*</span></label>
                    <input value={fnm} onChange={e => setFnm(e.target.value)} type="text" placeholder="First Name" name="fname" className="form-control" />
                  </div>
                  <div className="form-group col-xl-6">
                    <label>Last Name <span className="text-danger">*</span></label>
                    <input value={lnm} onChange={e => setLnm(e.target.value)} type="text" placeholder="Last Name" name="lname" className="form-control" />
                  </div>
                  <div className="form-group col-xl-12">
                    <label>Company Name</label>
                    <input value={company} onChange={e => setCompany(e.target.value)} type="text" placeholder="Company Name (Optional)" name="cname" className="form-control" />
                  </div>

                  <div className="form-group col-xl-12">
                    <label>Street Address<span className="text-danger">*</span></label>
                    <input onChange={e => setAddress(e.target.value)} value={address} type="text" placeholder="Street Address" name="town" className="form-control" />
                  </div>

                  <div className="form-group col-xl-12">
                    <label>Town / City <span className="text-danger">*</span></label>
                    <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="Town/City" name="town" className="form-control" />
                  </div>
                  <div className="form-group col-xl-6">
                    <label>Phone Number <span className="text-danger">*</span></label>
                    <input value={mobile} onChange={e => setMobile(e.target.value)} type="text" placeholder="Phone Number" name="phone" className="form-control" />
                  </div>
                  <div className="form-group col-xl-6">
                    <label>Email Address <span className="text-danger">*</span></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" name="email" className="form-control" />
                  </div>
                  <div className="form-group col-xl-12 mb-0">
                    <label>Order Notes</label>
                    <textarea value={notes} onChange={e => setNotes(e.target.value)} name="name" rows={5} className="form-control" placeholder="Order Notes (Optional)" />
                  </div>
                </div>

              </div>
              <div className="col-xl-5 mt-4 checkout-billing">

                <button type="submit" className="btn-custom primary btn-block">Check Out</button>

              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />




    </>
  )
}

export default Checkout