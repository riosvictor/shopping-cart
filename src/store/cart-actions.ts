import { AppDispatch } from "."
import { cartActions, CartState } from "./cart-slice"
import { uiActions } from "./ui-slice"

const url = 'https://redux-http-cd78e-default-rtdb.firebaseio.com'


export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(`${url}/cartItems.json`)
      const data = await res.json()

      return data
    }

    try {
      const cartData = await fetchHandler()
      dispatch(cartActions.replaceData(cartData))
    } catch (error) {
      dispatch(uiActions.showNotification({
        message: 'Sending Request to Fetch Data Failed',
        open: true,
        type: 'error'
      }))
    }
  }
}

export const sendCartData = (cart: CartState) => {

  return async (dispatch: AppDispatch) => {
    dispatch(uiActions.showNotification({
      message: 'Sending Request',
      open: true,
      type: 'warning'
    }))

    const sendRequest = async () => {
      if (!cart.itemsList) cart.itemsList = [];
      
      await fetch(`${url}/cartItems.json`, {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      dispatch(uiActions.showNotification({
        message: 'Sent Request to Database Successfully',
        open: true,
        type: 'success'
      }))
    }

    try {
      await sendRequest()
    } catch (error) {
      dispatch(uiActions.showNotification({
        message: 'Sending Request Failed',
        open: true,
        type: 'error'
      }))
    }
  }
}