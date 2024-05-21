import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { error, success } from '../utils/messages'
import { db } from '../firebase/firebaseconfig'

function NewsLetter() {
    let [email, setEmail] = useState("")

    async function submit(e) {
        e.preventDefault()

        if (email == "") {
            error("All Fields Are Required!")
            return
        }
        let colref = collection(db, "newsletter")
        await addDoc(colref, {
            "email": email,
        })

        success("Thank You For Newsletter Signup")
        setEmail("")

    }
    return (
        <>
            <section className="section bg-center bg-cover dark-overlay" style={{ backgroundImage: 'url("assets/img/bg/1.jpg")' }}>
                <div className="container">
                    <div className="ct-newsletter">
                        <div className="section-title-wrap section-header">
                            <h2 className="title">Join Our Newsletter</h2>
                            <p className="subtitle">
                                Stay in the loop with all things pizza! Sign up for our newsletter to receive exclusive deals, mouthwatering recipes
                            </p>
                        </div>
                        <form onSubmit={submit}>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter your email address" />
                            <button type="submit" className="btn-custom primary" name="button"> Submit <i className="far fa-paper-plane" /> </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter