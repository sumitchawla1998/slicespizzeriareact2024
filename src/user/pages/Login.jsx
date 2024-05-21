import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { signInWithEmailAndPassword } from "firebase/auth";

import { db, auth } from "../../firebase/firebaseconfig";
import { error, success } from '../../utils/messages'
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";


function Login() {
  let [email, setEmail] = useState("")
  let [pwd, setPwd] = useState("")

  let navigate = useNavigate()


  let login = useUserStore((state) => state.login)

  async function signin(e) {
    e.preventDefault()

    if (email == "" || pwd == "") {
      error("All Fields Are Required!")
      return
    }


    let credentials = await signInWithEmailAndPassword(auth, email, pwd)

    if (credentials.user) {
      login(credentials.user)
      success("Login Successfull")
      navigate("/",{replace:true})
    }
    else{
      error("Please Enter Valid Credentials")
    }


  }
  return (
    <>
      <div>

        {/* Header Start */}
        <Header />
        {/* Header End */}
        {/* Login Form Start */}
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
                  <h2>Welcome Back!</h2>
                  <p>Sign in now to order delicious pizzas online and get started with great offers..</p>
                </div>
              </div>
              <div className="auth-form">
                <h2>Log in</h2>
                <form method="post" onSubmit={signin}>
                  <div className="form-group">
                    <input value={email} type="text" className="form-control form-control-light" placeholder="Email" name="username" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input value={pwd} type="password" className="form-control form-control-light" placeholder="Password" name="password" onChange={(e) => setPwd(e.target.value)} />
                  </div>
                  <a href="#">Forgot Password?</a>
                  <button type="submit" className="btn-custom primary">Login</button>
                  <div className="auth-seperator">
                    <span>OR</span>
                  </div>
                  <div className="social-login">
                    <button type="button" className="ct-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                    <button type="button" className="ct-social-login google"><i className="fab fa-google" /> Continue with Google</button>
                  </div>
                  <p>Don't have an account? <Link to="/register">Create One</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Login Form End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </div>

    </>
  );
}
export default Login;
