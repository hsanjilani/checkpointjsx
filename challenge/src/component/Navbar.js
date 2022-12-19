import React from "react";
import './Navbar.css';


const Navbar =()=>{
    return(<header>
        <h1>John Doe</h1>
        <ul className="navmenu">
          <li><a >About</a></li>
          <li><a >Projects</a></li>
          <li><a >Contact</a></li>
        </ul></header>

    )
}

export default Navbar;