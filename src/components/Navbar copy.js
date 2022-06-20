import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>

        <img src="https://upload.wikimedia.org/wikipedia/id/thumb/3/36/Naruto_Uzumaki.png/280px-Naruto_Uzumaki.png" alt="new" width='30'/>
        <div className='navlink'>
            <NavLink to="/" className='link'>Home</NavLink>
            <NavLink to="/About" className='link'>About</NavLink>
            <NavLink to="/Contact" className='link'>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar