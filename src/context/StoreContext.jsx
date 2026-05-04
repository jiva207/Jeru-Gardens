import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [plant_list, setPlantList] = useState([]);
    
    const url = "https://69f66cbea72f01a951b95f69.mockapi.io/api/v1"; 

    const fetchPlantList = async () => {
        try {
            const response = await axios.get(`${url}/plants`);
            setPlantList(response.data);
        } catch (error) {
            console.error("API Error (List):", error);
        }
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = plant_list.find((product) => product.id == item);
                if(itemInfo) totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        fetchPlantList();
    }, []);

    const contextValue = {
        plant_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;