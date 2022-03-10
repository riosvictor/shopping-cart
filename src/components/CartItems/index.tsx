import React from 'react';
import { useAppSelector } from '../../store';
import CartItem from '../CartItem';

const CartItems: React.FC = () => {
  const cartItems = useAppSelector(state => state.cart.itemsList)

  return(
    <div
      style={{
        width: "100%",
        border: "1px solid",
        marginTop: "40px",
      }}
    >
      <h2>Your Cart</h2>
      <ul>
        {
          cartItems.map(item => (
            <li key={item.id}>
              <CartItem 
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                total={item.totalPrice}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default CartItems;