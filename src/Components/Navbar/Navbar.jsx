import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.png";

export const Navbar = () => {
  return (
    <div className='navbar bg-base-100 p-4 '>
        <ul>
            <Link to="login">
                <img src={logo} alt="logo" className="d-lg-none d-lg-block w-100 "/>
                <img src={logo} alt="logo" className="d-none d-lg-block w-50"/>
            </Link>

        </ul>
    </div>
  )
}
