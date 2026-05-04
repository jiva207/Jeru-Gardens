import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import './Shop.css';

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

const Shop = () => {
    const { plantID } = useParams();
    const { plant_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    
    const [plantData, setPlantData] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

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

    useEffect(() => {
        const plant = plant_list.find((item) => String(item.id) === String(plantID));
        
        if (plant) {
            setPlantData(plant);
            
            const related = plant_list
                .filter((item) => item.category === plant.category && String(item.id) !== String(plantID))
                .slice(0, 3);
            
            setRelatedProducts(related);
        }
        window.scrollTo(0, 0);
    }, [plantID, plant_list]);

    if (!plantData) return <div className='shop-loading'>Loading Product...</div>;

    return (
        <div>
            <div className="nav-bg-shop"></div>
            <div className='shop-display'>
                <div className='shop-display-container'>
                    <div className='shop-product-main'>
                        <div className='shop-display-left'>
                            <img src={imageMap[plantData.id] || plantData.image} alt={plantData.name} className='main-img' />
                        </div>

                        <div className='shop-display-right'>
                            <h1>{plantData.name}</h1>
                            <div className='shop-display-rating'>
                                <img src={assets.rating_starts} alt="" />
                                <p>(122 Reviews)</p>
                            </div>
                            <div className='shop-display-price'>₹{plantData.price}</div>
                            <div className='shop-display-desc'>{plantData.desc}</div>
                            <p className='category-tag'>Category: <span>{plantData.category}</span></p>

                            <div className='shop-cart-section'>
                                {!cartItems[plantID] ? (
                                    <button className='add-btn' onClick={() => addToCart(plantID)}>ADD TO CART</button>
                                ) : (
                                    <div className='shop-counter'>
                                        <button className='red' onClick={() => removeFromCart(plantID)}>-</button>
                                        <span>{cartItems[plantID]}</span>
                                        <button className='green' onClick={() => addToCart(plantID)}>+</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {relatedProducts.length > 0 && (
                        <div className='related-products'>
                            <h2 className='related-title'>Related Products</h2>
                            <div className='related-products-list'>
                                {relatedProducts.map((item) => (
                                    <Link to={`/shop/${item.id}`} key={item.id} className='related-item'>
                                        <div className='related-img-container'>
                                            <img src={imageMap[item.id] || item.image} alt={item.name} />
                                        </div>
                                        <p className='related-name'>{item.name}</p>
                                        <p className='related-price'>₹{item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Shop;