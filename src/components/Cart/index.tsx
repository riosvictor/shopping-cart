import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { cartActions } from '../../store/cart-slice';

const Cart: React.FC = () => {
  const quantity = useAppSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }

  return (
    <div>
      <h3 onClick={showCart}>{`Cart: ${quantity} Items`}</h3>
    </div>
  );
}

export default Cart;