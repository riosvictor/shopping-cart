import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import Cart from '../Cart';

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <h1>Redux Shopping App</h1>
      <Cart />
      <button
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;