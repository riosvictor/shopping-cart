import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

interface IProps {
  id: number
  name: string
  price: number
  quantity: number
  total: number
}

const CartItem: React.FC<IProps> = ({id, name, price, quantity, total}) => {
  const dispatch = useDispatch()
  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  const incrementCartItem = () => {
    dispatch(cartActions.addToCart({
      id,
      name,
      price
    }))
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <h2>{name}</h2>
      <p>{`$ ${price}`}</p>
      <p>{`x ${quantity}`}</p>
      <article>{`Total $ ${total}`}</article>

      <button onClick={decrementCartItem}>
        -
      </button>
      <button onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
}

export default CartItem;