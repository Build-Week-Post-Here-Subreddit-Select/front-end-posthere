import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'

const Navigation = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Home Page</Link> <br/>
            <img src='https://i.imgur.com/cCJnjJR.png' alt='logo'/>
            <br/>
            <div>
            <Link to='/register'>Register</Link><br/>
            <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Navigation
