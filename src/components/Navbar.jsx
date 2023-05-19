import './navbar.css';
import {ImHome} from 'react-icons/im/';
import { AiFillContacts } from "react-icons/ai";
import {FcAbout} from "react-icons/fc"


function Navbar() {
    return (
        <div className='navbar'>

          
           <div class="wrap">
           <div  class="par">
                <a href="#home" style={{display: "flex", justifyContent: "center", alignItems: "between"}}> <ImHome /> Home</a>
            </div>
            <div>
             <p class="block">Welcome to The Jitu Blog</p> 
            </div>
             
            <div  class="par">
                <a href="#contact" style={{display: "flex", justifyContent: "center", alignItems: "between"}}><AiFillContacts /> Contact</a>
             <a href="#about" style={{display: "flex", justifyContent: "center", alignItems: "between"}}><FcAbout/>About</a>
            </div>
           </div>
            
           
           
            </div>
    )
}

export default Navbar