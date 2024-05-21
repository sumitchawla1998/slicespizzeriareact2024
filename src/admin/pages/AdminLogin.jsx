import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { db, auth } from "../../firebase/firebaseconfig";
import { error, success } from '../../utils/messages'
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { useAdminStore } from "../../store/admin";
import { collection, getDocs, query,where } from "firebase/firestore";

function AdminLogin() {
  let [unm, setUnm] = useState("")
  let [pwd, setPwd] = useState("")

  let login = useAdminStore((state) => state.login)

  let navigate = useNavigate()
  async function signin(e) {
    e.preventDefault()

    if (unm == "" || pwd == "") {
      error("All Fields Are Required")
    }


    let colref = collection(db, "admins")
    let q = query(colref, where("unm", "==", unm), where("pwd", "==", pwd))

    let snapshot = await getDocs(q)

    if (snapshot.docs.length > 0) {
       login(snapshot.docs[0].data())

      navigate("/adminorders",{replace:true})
      success("Admin Login Successful")
    } else {
      error("Admin Login Failed")
    }
  }
  return (
    <>
        <Header />
        <div className="section">
          <div className="imgs-wrapper">
            <img src="slices/assets/img/veg/11.png" alt="veg" className="d-none d-lg-block" />
            <img src="slices/assets/img/prods/3.png" alt="veg" className="d-none d-lg-block" />
          </div>
          <div className="container">
            <div className="auth-wrapper">
              <div className="auth-description bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: 'url("slices/assets/img/auth.jpg")' }}>
                <div className="auth-description-inner">
                  <i className="flaticon-chili" />
                  <h2>Admin Login!</h2>
                  <p>Sign in now to manager customer orders.</p>
                </div>
              </div>
            
                <div className="auth-form">
            
                  <h2>Admin Log In</h2>
                  <form onSubmit={signin}>
                    <div className="form-group">
                      <input value={unm} type="text" className="form-control form-control-light" placeholder="Email" name="username" onChange={(e) => setUnm(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <input value={pwd} type="password" className="form-control form-control-light" placeholder="Password" name="password" onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    <a href="#">Forgot Password?</a>
                    <button type="submit" className="btn-custom primary">Login</button>

                  </form>
                </div>
            

            </div>
          </div>
        </div>

        <Footer />



    </>
  );
}
export default AdminLogin;
