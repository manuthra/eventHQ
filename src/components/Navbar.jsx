import React from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    const user = localStorage.getItem("user")
    return (
        <nav className='navbar navbar-expand-lg navbar-dark  bg-dark px-3'>

            {/* logo */}
            <h2 className='neon-text fw-bold mb-2 mb-md-0'>Event<span className='text-info'>HQ</span></h2>

            {/* toggle btn */}
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className='navbar-toggler-icon'></span>
            </button>

            {/* collapsing content */}
            <div className='collapse navbar-collapse' id='navbarContent'>


                {/* nav-links */}
                <ul className='navbar-nav mx-auto gap-4'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link text-decoration-none'>HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Bookings" className='nav-link  text-decoration-none'>MY BOOKINGS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-link  text-decoration-none'>ABOUT</Link>
                    </li>

                </ul>

                {/* user */}
                <div className="d-lg-flex d-none align-items-center gap-2 text-white">
                    <FaUserCircle size={20} />
                    <h6 className="mb-0">Welcome, {user}</h6>
                </div>

            </div>

        </nav>

    )
}

export default Navbar;
