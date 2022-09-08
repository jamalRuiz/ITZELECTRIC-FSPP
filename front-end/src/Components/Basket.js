import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;
const Basket = () => {
    const [cars, setCars] = useState([])
       
   const [cart, setCart] = useState([]);

  
    useEffect(() => {
      axios.get(`${API}/electric`)
        .then((response) => setCars(response.data.payload))
        .catch((c) => console.warn("catch", c));
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
  
    const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  
    const removeFromCart = (item) => {
      setCart((currentCart) => {
        const indexOfItemToRemove = currentCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );
  
        if (indexOfItemToRemove === -1) {
          return currentCart;
        }
  
        return [
          ...currentCart.slice(0, indexOfItemToRemove),
          ...currentCart.slice(indexOfItemToRemove + 1)
        ];
      });
    };
  
    const amountOfItems = (id) => cart.filter((item) => item.id === id).length;
  
    const listItemsToBuy = () =>
      cars.map((car) => (
        <div key={car.id}>
          {car.make} -{car.price}
          <button type="submit" onClick={() => addToCart(car)}>
            Add
          </button>
        </div>
      ));
  
    const listItemsInCart = () =>
      cars.map((item) => (
        <div key={item.name}>
          ({amountOfItems(item.id)} x {item.price}){item.name}
          <button type="submit" onClick={() => removeFromCart(item)}>
            Remove
          </button>
        </div>
      ));
  
    return (
      <div>
        Shopping Cart
        <div>{listItemsToBuy()}</div>
        <div>CART</div>
        <div>{listItemsInCart()}</div>
        <div>Total: ${cartTotal}</div>
        <div>
          <button onClick={() => setCart([])}>Clear</button>
        </div>
      </div>
    );
  };

export default Basket