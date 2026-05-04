import React from "react";
import "./About.css";
import play_icon from "../../assets/play-icon.png";
import about_img from "../../assets/about_img.jpg";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT JERU</h3>
        <h2>Bringing the outside world inside your home</h2>
        <p>
          <h4>The Vision</h4>
          At Jeru, we believe that nature is the ultimate source of wellness and
          inspiration. Our mission is to bridge the gap between urban living and
          the natural world by providing high-quality, resilient plants that
          transform your living space into a thriving green sanctuary.
        </p>
        <p>
          <h4>The Collection</h4>
          We specialize in a diverse selection of greenery, ranging from
          aromatic kitchen staples like Curry Leaf and Sweet Basil to hardy
          air-purifiers and decorative fruit trees. Every plant in our catalog
          is chosen for its ability to adapt and flourish, ensuring beauty and
          functionality in every home.
        </p>
        <p>
          <h4>The Commitment</h4>
          Sustainable living is at the heart of everything we do. We are
          dedicated to helping both beginners and experienced gardeners grow
          with confidence by offering curated advice and low-maintenance
          solutions. Join us as we work toward a greener, healthier, and more
          vibrant world, one plant at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
