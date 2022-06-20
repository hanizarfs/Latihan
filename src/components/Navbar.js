import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar navbar-expand-lg'>
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="assets/img/Logo.png" alt="Semartec" className="img-logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navlink navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center w-100" id="navbar">
                        <NavLink to="/" className='link'>Home</NavLink>
            <NavLink to="/About" className='link'>About</NavLink>
            <NavLink to="/Contact" className='link'>Contact</NavLink>
                            <div className="theme-switch-container">
                                <label className="theme-slider" for="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="round slider"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    
  )
}

const toggleSwitch = document.querySelector('.theme-slider input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.setAttribute('theme', 'light');
  }
  toggleSwitch.addEventListener('change', switchTheme, false);
}

export default Navbar