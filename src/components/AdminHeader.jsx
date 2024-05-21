import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cart'
import { useAdminStore } from '../store/admin'

function AdminHeader() {
  let navigate = useNavigate()
  let logout = useAdminStore((state) => state.logout)
  let isadminloggedin = useAdminStore((state) => state.isadminloggedin)

  return (
    <>
      <header className="main-header header-1">
        <div className="top-header">
          <div className="container">
            <div className="top-header-inner">
              <div className="top-header-contacts">
                <ul className="top-header-nav">
                  <li> <a className="p-0" href="tel:+123456789"><i className="fas fa-phone mr-2" /> +91 79904 56948</a> </li>
                </ul>
              </div>
              <ul className="top-header-nav header-cta">
                <li> {isadminloggedin ? <Link to="">Welcome, Admin</Link> : <Link to="/adminlogin">Admin Login</Link>} </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <a className="navbar-brand" href=""> <img src="slices/assets/img/logo.png" alt="logo" /> </a>
            {/* Menu */}
            <ul className="navbar-nav">
              


            </ul>
            <div className="header-controls">
              <ul className="header-controls-inner">
              <li className="menu-item menu-item-has-children active">
                <NavLink to="/adminorders">Orders</NavLink>
              </li>

              <li className="menu-item menu-item-has-children">
                <NavLink onClick={()=>{
                  logout()
                }} to="/adminlogin">Logout</NavLink>
              </li>

              </ul>

              <div className="aside-toggler aside-trigger">
                <span />
                <span />
                <span />
              </div>
            </div>

          </nav>
        </div>
      </header>
    </>
  )
}

export default AdminHeader