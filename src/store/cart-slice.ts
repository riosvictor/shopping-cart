import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface InsertCartItem { 
  id: number;
  price: number;
  name: string;
}

interface CartItem extends InsertCartItem { 
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  itemsList: CartItem[];
  totalQuantity: number
  showCart: boolean
  changed: boolean
}

const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceData(state, action: PayloadAction<CartState>) {
      state.totalQuantity = action.payload.totalQuantity
      state.itemsList = action.payload.itemsList
    },
    addToCart(state, action: PayloadAction<InsertCartItem>) {
      state.changed = true

      const newItem = action.payload

      const existingItem = state.itemsList?.find(
        item => item.id === newItem.id
      )

      if(existingItem) {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price      
      }

      if (!existingItem) {
        const insertingItem = {
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        }

        if (state.itemsList)
          state.itemsList.push(insertingItem)

        if (!state.itemsList)
          state.itemsList = [insertingItem]

        state.totalQuantity++
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.changed = true

      const id = action.payload
      const existingItem = state.itemsList.find(item => item.id === id)
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemsList = state.itemsList.filter(item => item.id !== id)
          state.totalQuantity--
        }

        if (existingItem.quantity > 1) {
          existingItem.quantity--
          existingItem.totalPrice -= existingItem.price
        }
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart
    },
  }
})



export const cartActions = cartSlice.actions

export default cartSlice