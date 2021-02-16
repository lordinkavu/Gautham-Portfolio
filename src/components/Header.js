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
            {menuOpen && <div id="navitems" className = {menuOpen?"navopen":"navclosed"}>
            
            <a href="/#aboutsec" onClick={()=>setMenuOpen(false)}>About</a>

                <a href="/#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
                <a href="/#projects" onClick={()=>setMenuOpen(false)}>Projects</a>
                
                <a href="/#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
                <a href="https://ingaavu.wordpress.com/" onClick={()=>setMenuOpen(false)} target="_blank" rel="noreferrer">Blog</a>
               
            </div>
            
            }
        
            
        </header>
    )
}

export default Header;