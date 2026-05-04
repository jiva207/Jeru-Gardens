import React, { useContext } from "react";
import "./PlantItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

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

const PlantItem = ({ id, name, price, desc, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // 2. CREATE THE IMAGE MAP
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
    <div className="plant-item">
      <div className="plant-item-img-container">
        <img className="plant-item-image" src={imageMap[id] || image} alt={name} />
        
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="plant-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      
      <Link to={`/shop/${id}`}>
        <div className="plant-item-info">
          <div className="plant-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="plant-item-desc">{desc}</p>
          <p className="plant-item-price">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default PlantItem;