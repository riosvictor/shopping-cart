import React from 'react';
import { useAppSelector } from '../../store';
import Cart from '../Cart';
import CartItems from '../CartItems';
import Header from '../Header';
import Product from '../Product';

const items = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Mac Book",
    price: 25.45
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Lenovo",
    price: 27.88
  }
]

const Layout: React.FC = () => {
  const showCart = useAppSelector(state => state.cart.showCart)
  const itemsCart = useAppSelector(state => state.cart.itemsList)
  let total = 0

  itemsCart?.forEach((item) => total += item.totalPrice)
  
  return (
    <>
      <Header />
      
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: "20px"
        }}
      >
        {
          items.map(
            item => 
              <React.Fragment key={item.id}>
                <Product 
                  id={item.id}
                  imageUrl={item.image}
                  name={item.name}
                  price={item.price}
                />

                <br/>
              </React.Fragment>
          )
        }
      </div>

      {showCart && <CartItems />}

      <div>
        <h3>{`Total: $ ${total}`}</h3>
      </div>
      
    </>
  );
}

export default Layout;