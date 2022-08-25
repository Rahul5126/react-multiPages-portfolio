import "./FooterStyles.css"

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                </div>
                <div>
                    <p>39M Awadh Vihar Colony.</p>
                    <p>Gorakhpur, Uttar Pradesh.</p>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>+91-9565589422</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>rs9565589422@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is me Rahul Singh. Developer of this Portfolio. I enjoy making new projects and designs on React.Js</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer