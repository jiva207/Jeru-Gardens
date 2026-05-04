import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

import Snake_plant from "../../assets/Snake_plant.jpg"
import Peace_lily from "../../assets/Peace_lily.jpg"
import ZZ_plant from "../../assets/ZZ_plant.jpg"
import Spider_Plant from "../../assets/Spider_Plant.jpg"
import Hibiscus_Plant from "../../assets/Hibiscus_Plant.jpg"
import Bougainvillea_Flower from "../../assets/Bougainvillea_Flower.jpg"
import Jasmine_Flower from "../../assets/Jasmine_Flower.jpg"
import Ixora from "../../assets/Ixora.jpg"
import Roses from "../../assets/Roses.jpg"
import Orchid from "../../assets/Orchid.jpg"
import Chrysanthemum from "../../assets/Chrysanthemum.jpg"
import Anthurium from "../../assets/Anthurium.jpg"
import Lucky_Jade from "../../assets/Lucky_Jade.jpg"
import Aloe_Vera from "../../assets/Aloe_Vera.jpg"
import Echeveria from "../../assets/Echeveria.jpg"
import Haworthia from "../../assets/Haworthia.jpg"
import Mint from "../../assets/Mint.jpg"
import Tulsi_Plant from "../../assets/Tulsi_Plant.jpg"
import Thyme from "../../assets/Thyme.jpg"
import Lemongrass from "../../assets/Lemongrass.jpg"
import Bamboo_Palm from "../../assets/Bamboo_Palm.jpg"
import Money_Plant from "../../assets/Money_Plant.jpg"
import Lady_Palm from "../../assets/Lady_Palm.png"
import Pathos from "../../assets/Pathos.jpg"
import Meyer_Lemon_Tree from "../../assets/Meyer_Lemon_Tree.jpg"
import Dwarf_Pomegranate from "../../assets/Dwarf_Pomegranate.png"
import Strawberries from "../../assets/Strawberries.jpg"
import Petite_Negra_Fig from "../../assets/Petite_Negra_Fig.png"
import Sweet_Basil_Plant from "../../assets/Sweet_Basil_Plant.jpg"
import Rosemary_Plant from "../../assets/Rosemary_Plant.jpg"
import Coriander_Leaf_Plant from "../../assets/Coriander_Leaf_Plant.jpg"
import Curry_Leaf_Plant from "../../assets/Curry_Leaf_Plant.jpg"

const Cart = () => {
  const { cartItems, plant_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const imageMap = {
    "1": Snake_plant, "2": Peace_lily, "3": ZZ_plant, "4": Spider_Plant,
    "5": Hibiscus_Plant, "6": Bougainvillea_Flower, "7": Jasmine_Flower, "8": Ixora,
    "9": Roses, "10": Orchid, "11": Chrysanthemum, "12": Anthurium,
    "13": Lucky_Jade, "14": Aloe_Vera, "15": Echeveria, "16": Haworthia,
    "17": Mint, "18": Tulsi_Plant, "19": Thyme, "20": Lemongrass,
    "21": Bamboo_Palm, "22": Money_Plant, "23": Lady_Palm, "24": Pathos,
    "25": Meyer_Lemon_Tree, "26": Dwarf_Pomegranate, "27": Strawberries, "28": Petite_Negra_Fig,
    "29": Sweet_Basil_Plant, "30": Rosemary_Plant, "31": Coriander_Leaf_Plant, "32": Curry_Leaf_Plant
  };

  return (
    <div className='cart'>
      <div className="nav-bg-cart"></div>
      
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {plant_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={imageMap[item.id] || item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>₹{item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;