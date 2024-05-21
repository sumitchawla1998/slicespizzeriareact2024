import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../firebase/firebaseconfig'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import { error, success } from '../../utils/messages'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    let [nm, setNm] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")

    let navigate = useNavigate()
    async function signup(e) {
        e.preventDefault()

        if (nm == "" || email == "" || pwd == "") {
            error("All Fields Are Required!")
            return
        }

        let credentials = await createUserWithEmailAndPassword(auth, email, pwd)

        if (credentials.user) {
            await updateProfile(credentials.user, { displayName: nm })

            let colref = collection(db, "users")
            await addDoc(colref, {
                "uid": credentials.user.uid,
                "nm": nm,
                "email": email,
                "pwd": pwd,
            })

            success("Customer Registration Successfull")
            navigate("/login",{replace:true})
        }
        else{
            error("Customer Registration Failed")
        }

    }
    return (
        <>

            <div>
            
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
                                    <h2>Sign Up!</h2>
                                    <p>Sign up now to order delicious pizzas online.</p>
                                </div>
                            </div>
                            <div className="auth-form">
                                <h2>Sign Up</h2>
                                <form method="post" onSubmit={signup}>
                                    <div className="form-group">
                                        <input value={nm} type="text" className="form-control form-control-light" placeholder="Name" name="username" onChange={(e) => setNm(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input value={email} type="email" className="form-control form-control-light" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input value={pwd} type="password" className="form-control form-control-light" placeholder="Password" name="password" onChange={(e) => setPwd(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn-custom primary">Sign Up</button>
                                    <div className="auth-seperator">
                                        <span>OR</span>
                                    </div>
                                    <div className="social-login">
                                        <button type="submit" className="ct-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                                        <button type="button" className="ct-social-login google"><i className="fab fa-google" /> Continue with Google</button>
                                    </div>
                                    <p>Already have an account? <Link to="/login">Login</Link> </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Register Form End */}
                {/* Footer Start */}
                <Footer />
                {/* Footer End */}
            </div>

        </>
    )
}

export default Register