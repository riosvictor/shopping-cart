import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../store';
import { cartActions } from '../../store/cart-slice';

interface IProps {
  name: string;
  id: number;
  imageUrl: string;
  price: number;
}

const Product: React.FC<IProps> = ({id, name, imageUrl, price}) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    }))
  }
  
  return (
    <div>
      <img src={imageUrl} alt={`product ${id}`} />
      <h2>{name}</h2>
      <p>{`$ ${price}`}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;