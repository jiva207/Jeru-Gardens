import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const { getTotalCartAmount, plant_list, cartItems, url, setCartItems } = useContext(StoreContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "", lastName: "", email: "", street: "",
        city: "", state: "", zipcode: "", country: "", phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();
        
        let orderItems = plant_list
            .filter(item => cartItems[item.id] > 0)
            .map(item => ({ 
                name: item.name, 
                price: item.price, 
                quantity: cartItems[item.id] 
            }));

        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 20,
            status: "Order Placed",
            date: new Date().toLocaleString()
        };

        try {
            const response = await axios.post(`${url}/orders`, orderData);

            if (response.status === 201) {
                alert("Order Successful! Data saved to MockAPI.");
                setCartItems({});
                navigate('/');
            }
        } catch (error) {
            console.error("Order Error:", error);
            alert("Error placing order. Ensure 'orders' resource exists in MockAPI.");
        }
    };

    return (
      <div>
         <div className="nav-bg-po"></div>
      
        <form onSubmit={placeOrder} className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
                <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                <div className='multi-fields'>
                    <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                    <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
                    <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                </div>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
            </div>

            <div className='place-order-right'>
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p><p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p><p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b><b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                    </div>
                    <button type='submit'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
        </div>
    );
};

export default PlaceOrder;