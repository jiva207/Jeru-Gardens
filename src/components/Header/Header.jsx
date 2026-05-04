import React from "react";
import "./Header.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Header = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure Green plants for better world</h1>
        <p>
          Welcome to Jeru, your destination for sustainable, vibrant greenery. Discover a collection of hardy plants designed to bring wellness, fresh flavors, and natural beauty into your life. Begin your growing journey today.
        </p>
        <button className="btn">
            Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
