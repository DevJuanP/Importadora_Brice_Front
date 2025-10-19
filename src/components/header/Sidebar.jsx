import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <Fragment>
            {/* Logo */}
            <Link className="navbar-brand me-4" to="/">
            <img
                src="https://media.discordapp.net/attachments/1391243726055145497/1426046460209791108/logo-brice.jpg?ex=68ea7582&is=68e92402&hm=9553ab614a5379389692964c19c8db01889dab9e7092693d3848c3e460d4733d&=&format=webp"
                alt="logo"
                style={{ width: '60px', height: '60px' }}
            />
            </Link>

            {/* Botón menú */}
            <button
            className="navbar-toggler border-0 d-flex align-items-center p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            <span
                className="menu ms-2"
                style={{ fontSize: '16px', marginTop: '5px' }}
            >
                Menú
            </span>
            </button>
        </Fragment>
    )
}

export default Sidebar