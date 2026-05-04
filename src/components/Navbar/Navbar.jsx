import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import Jeru_1 from '../../assets/Jeru_1.png';
import flower_basket from '../../assets/flower_basket.png';
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  const loggedInUser = localStorage.getItem("userName");

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.reload();
  };

  const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='/'><img src={Jeru_1} alt="logo" className='logo' /></Link>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li className="menu-close-li">
        <img src={menu_icon} alt="close" className='menu-close-icon' onClick={() => setMobileMenu(false)}/>
    </li>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}><Link to='/'>Home</Link></li>
        <li onClick={() => setMenu("Categories")} className={menu === "Categories" ? "active" : ""}><a href="#explore-menu">Categories</a></li>
        <li onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}><a href="#plant-display">Products</a></li>
        <li onClick={() => setMenu("About us")} className={menu === "About us" ? "active" : ""}><a href="#about">About us</a></li>
        <li onClick={() => setMenu("Reviews")} className={menu === "Reviews" ? "active" : ""}><a href="#reviews">Reviews</a></li>
        <li onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}><a href="#contact">Contact us</a></li>
        
        <li className='flowerr'>
          <Link to='/cart'><img id='flower' src={flower_basket} alt="cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </li>

        {!loggedInUser ? (
          <li><button onClick={() => setShowLogin(true)} className='btn'>Sign Up</button></li>
        ) : (
          <li className="nav-user-container">
            <span className="nav-user-name" onClick={handleLogout}>Hi, {loggedInUser}</span>
            
          </li>
        )}
      </ul>

<img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>

    </nav>
  );
};

export default Navbar;