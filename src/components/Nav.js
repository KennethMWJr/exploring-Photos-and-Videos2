import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    return(
        <nav className="menu"> 
            <div id="menu-outer"> 
                <div class="table">
                    <ul>
                        <li><Link to="/photos">Photos</Link></li>    
                        <li><Link to="/home">Home</Link></li>                        
                        <li><Link to="/videos">Videos</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}





export default Nav;