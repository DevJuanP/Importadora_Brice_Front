import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  let admin = false
  return (
    <header className='header'>
      <div className='logo'>
        <h3>este es el header</h3>
      </div>
      <ul className='nav-links'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {admin && (
          <li>
            <NavLink to="/about">DashBorad</NavLink>
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
