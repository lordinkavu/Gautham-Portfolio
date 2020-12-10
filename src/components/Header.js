import React, {useState} from "react";
import './Header.css'

const Header = () =>{
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>

            <h3>GAUTHAM</h3>
            
            <div id="navmenu" onClick = {()=>setMenuOpen(!menuOpen)} className={menuOpen?"open":"closed"}>
                <div className="bar"></div>
                <div className="bar"></div>
                
            </div>
            {menuOpen && <div id="navitems">
            
            <a>About</a>
                <a>Projects</a>
                <a>Blog</a>
                <a>Contact</a>
                <a>Resume</a>
            </div>
            
            }
        
            
        </header>
    )
}

export default Header;