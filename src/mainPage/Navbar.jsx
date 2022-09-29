import React from 'react'

import "./stylesheet/navbar.css"

const Navbar = () => {
  return (
    <nav>
        <span className="left">
            <a href="/">
                <img src="./media/logo.png" alt="" srcset="" /> 
            <p>infenito</p>

            </a>
        </span>

<span className="right">

    <a href="/" className='active'> Home</a>
    <a href="/"> Portfolio</a>
    <a href="/">About us</a>
    <a href="/"> Pricing</a>
    {/* <a href="/"> <img src="./media/arrow.png" alt="" /></a> */}

</span>


    </nav>
  )
}

export default Navbar