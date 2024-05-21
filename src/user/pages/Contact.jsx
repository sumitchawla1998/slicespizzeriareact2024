import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { error, success } from '../../utils/messages'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebaseconfig'

function Contact() {

    let [fnm, setFnm] = useState("")
    let [lnm, setLnm] = useState("")
    let [email, setEmail] = useState("")
    let [subject, setSubject] = useState("")
    let [msg, setMsg] = useState("")


    async function send(e) {
        e.preventDefault()

        if(fnm == ""|| lnm =="" || email == ""||subject==""||msg==""){
            error("All Fields Are Required")
            return
        }
        fetch("https://formsubmit.co/ajax/036686b72855453aab80c1ad8c3e0a21", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                fnm: fnm,
                lnm: lnm,
                email: email,
                subject: subject,
                msg: msg,
            })
        })
            .then(response => response.json())
            .then(data => success("Thank You for contacting us"))
            .catch(error => error("Something went wrong"));

        let colref = collection(db,"contacts")
        addDoc(colref,{
            fnm : fnm,
            lnm : lnm,
            email : email,
            subject : subject,
            msg : msg,
        })

        setFnm("")
        setLnm("")
        setEmail("")
        setSubject("")
        setMsg("")
    }
    return (
        <>
            <Header />

            <div className="contact-wrapper">
                <div className="ct-contact-map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.814196677264!2d72.9217625756034!3d22.548631933847805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f9b4f29c001%3A0x6f36f98b301bc841!2sUltron%20Technologies%20-%20Ethical%20Hacking%20%7C%20Coding%20Classes%20%7C%20Free%20Internship%20%7C%20Graphic%20Design%20%7C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1712319263009!5m2!1sen!2sin" width="100%" height="900" loading="lazy" ></iframe>
                </div>
                <div className>
                    <div className="section section-padding">
                        <div className="container">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-location" />
                                            <h5>Find Us</h5>
                                            <span>S202 Radhaswami Swamipia</span>
                                            <span>Opp. Home Science College</span>
                                            <span>+91 79904 56948</span>
                                            <span>support@venomtechnologies.in</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-online-booking" />
                                            <h5>Opening Hours</h5>
                                            <span><span>Mon - Wed:</span> 8:00am - 8:00pm</span>
                                            <span><span>Thu:</span> 8:00am - 5:00pm</span>
                                            <span><span>Fri:</span> 8:00am - 8:00pm</span>
                                            <span><span>Sat - Sun:</span> 8:00am - 2:00pm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pt-0">
                        <div className="container">
                            <div className="section-title-wrap">
                                <h2 className="title">Send us a Message </h2>
                                <p className="subtitle">
                                    Send us a message if you have any questions, feedback, or inquiries. We're here to assist you promptly.
                                </p>
                            </div>
                            <form onSubmit={send}  action="https://formsubmit.co/chawlas085@gmail.com">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input value={fnm} onChange={e => setFnm(e.target.value)} type="text" placeholder="First Name" className="form-control" name="fname" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input value={lnm} onChange={e => setLnm(e.target.value)} type="text" placeholder="Last Name" className="form-control" name="lname" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder="Subject" className="form-control" name="subject" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea value={msg} onChange={e => setMsg(e.target.value)} name="message" className="form-control" placeholder="Type your message" rows={8} />
                                    </div>
                                </div>
                                <button type="submit"  className="btn-custom primary" >Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact