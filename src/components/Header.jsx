import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'
import { auth } from '../firebase/firebaseconfig'

function Header() {
  let navigate = useNavigate()

  let items = useCartStore((state) => state.items)
  let isloggedin = useUserStore((state) => state.isloggedin)
  let user = useUserStore((state) => state.user)
  let logout = useUserStore((state) => state.logout)




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
                <li> {isloggedin ? <Link to="/adminlogin">Wecome,{user.displayName}</Link> : <Link to="/adminlogin">Admin Login</Link>} </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <a className="navbar-brand" href=""> <img src="/slices/assets/img/logo.png" alt="logo" /> </a>
            {/* Menu */}
            <ul className="navbar-nav">
              <li className="menu-item menu-item-has-children">
                <NavLink to="/" >Home</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/menu">Menu</NavLink>
              </li>

              {isloggedin && <li className="menu-item menu-item-has-children">
                <NavLink to="/myorders">Orders</NavLink>
              </li>}


              <li className="menu-item menu-item-has-children">
                <NavLink to="/contact">Contact</NavLink>
              </li>

              {isloggedin ? (
                <li className="menu-item menu-item-has-children">
                  <NavLink onClick={() => {
                    logout()
                    auth.signOut()
                  }} to="/login">Logout</NavLink>
                </li>
              ) :
                (
                  <>
                    <li className="menu-item menu-item-has-children">
                      <NavLink to="/login">Login</NavLink>
                    </li>

                    <li className="menu-item menu-item-has-children">
                      <NavLink to="/register">Register</NavLink>
                    </li>
                  </>
                )
              }

            </ul>
            <div className="header-controls">
              <ul className="header-controls-inner">
                <li className="cart-dropdown-wrapper cart-trigger" onClick={() => {
                  navigate("/cart")
                }}>
                  <span className="cart-item-count">{items.length}</span>
                  <i className="flaticon-shopping-bag" />
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

export default Header