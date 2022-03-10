import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const Auth: React.FC = () => {
  const dispatch = useDispatch()
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(authActions.login())
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input 
          type="text" 
          name="id" 
          id="id"
          style={{marginLeft: "10px"}}
        />

        <br/>

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          autoComplete="true"
          style={{marginLeft: "10px"}}
        />
        
        <br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Auth;