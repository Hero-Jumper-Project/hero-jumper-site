import React from 'react'

import { Link } from 'react-router-dom'

import Logo from '../res/logo.png'

import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='list'>
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <Link to="/more"><button>More</button></Link>
            <Link to="/workwithus"><button>Work With Us</button></Link>
        </ul>
    </div>
  )
}

export default Navbar