import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from '@mui/material'

interface UINotification {
  message?: string;
  type?: AlertColor;
  open: boolean;
}

interface UIState {
  notification: UINotification | null;
}

const initialState: UIState = {
  notification: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification(state, action: PayloadAction<UINotification>) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      }
    }
  },
})

export const uiActions = uiSlice.actions

export default uiSlice