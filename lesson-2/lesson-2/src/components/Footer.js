import React from "react";
import '../styles/Footer.css';

let date = new Date();

const Footer = () => {
    return(
        <div className="footer-box">
            <p>&copy; CopyRights Reserved {date.getFullYear()}</p>
        </div>
    ); 
}

export default Footer;