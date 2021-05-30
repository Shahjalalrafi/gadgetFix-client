import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="container">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <Link style={{color: 'white', textDecoration: 'none'}} to='/'><h4>Gedget Fix</h4></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto py-2">
                        <li class="nav-item py-2 px-3">
                            <Link style={{color: 'white', textDecoration: 'none'}}   to='/'>Home</Link>
                        </li>
                        <li class="nav-item py-2 px-2">
                        <Link style={{color: 'white', textDecoration: 'none'}} to='/dashboard'>Dashboard</Link>
                        </li>
                        <li class="nav-item py-2 px-2">
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/home">Tutorial</Link>
                        </li>
                        <li class="nav-item py-2 px-2">
                            <Link style={{color: 'white', textDecoration: 'none'}} to='/login'>Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;