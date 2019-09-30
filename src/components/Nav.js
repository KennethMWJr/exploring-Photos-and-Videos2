import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    return(
        <nav> 
            <ul>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/videos">Videos</Link></li>
            </ul>
        </nav>
    )

}





export default Nav;