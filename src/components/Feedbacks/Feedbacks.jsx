import React, { useRef } from "react";
import "./Feedbacks.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Feedbacks = () => {
    
    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    
    <div className="feedbacks" id="reviews">
      <h1>Our happy customers !!!</h1>
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Cristiano Ronaldo</h3>
                  <span>Lisbon, Portugal</span>
                </div>
              </div>
              <p>
                "The quality of the plants from Jeru is outstanding! I ordered a Curry Leaf plant and a Sweet Basil, and both arrived vibrant, healthy, and ready to thrive in my kitchen. It’s rare to find a shop that cares this much about the health of their greenery."
              </p>
            </div>
          </li>

           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Lionel Messi</h3>
                  <span>Rosario, Argentina</span>
                </div>
              </div>
              <p>
                "I love the diverse selection available here. Whether you are looking for medicinal herbs or decorative indoor palms, Jera has it all. I recently added a Lady Palm to my living room, and it has completely transformed the space into a lush sanctuary."
              </p>
            </div>
          </li>

           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Alisha Lehmann</h3>
                  <span>Tägertschi, Switzerland</span>
                </div>
              </div>
              <p>
                "As a beginner gardener, I was worried about keeping anything alive, but the low-maintenance options at Jera made it so easy. The Pothos and Money Plant I bought are thriving with very little effort. Highly recommend for fellow novices!"
              </p>
            </div>
          </li>

           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Zinedine Zidane</h3>
                  <span>Marseille, France</span>
                </div>
              </div>
              <p>
                "Jeru truly lives up to its mission of ensuring green plants for a better world. I appreciate their commitment to sustainable living and the helpful advice they provide. My Dwarf Pomegranate is already flowering, and I couldn't be happier with my purchase."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feedbacks;
