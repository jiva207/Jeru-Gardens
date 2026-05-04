import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import pay from "../../assets/pay.png";
import Jeru_2 from "../../assets/Jeru_2.png";
import facebook from "../../assets/facebook.png"
import x from "../../assets/x.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <hr />
      <div className="footer-content">
        <div className="footer-content-left">
            <Link to='/'><img src={Jeru_2} id='logo' alt="" /></Link>
            <p><b>Jeru</b> is dedicated to bringing the beauty and health benefits of nature into your home. We specialize in providing high-quality, sustainable greenery—from air-purifying indoor plants to essential kitchen herbs—helping you create a more vibrant and eco-friendly living space for a better world.</p>
            <div className="footer-social-icons">
                <img src={facebook} alt="" />
                <img src={x} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>APP DOWNLOAD</h2>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={assets.app_store} alt=""/>
                <img src={assets.play_store} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © <span>Jeru_Butterfly.com</span> - All Right Reserved.</p>
    </div>
  )
}

export default Footer
