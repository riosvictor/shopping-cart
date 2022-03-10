import React from 'react';
import { Alert, AlertColor } from '@mui/material'
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

interface IProps {
  type: AlertColor
  message: string
}

const Notification: React.FC<IProps> = ({ type, message }) => {
  const dispatch = useDispatch()
  const notification = useAppSelector(state => state.ui.notification)
  const handleClose = () => {
    dispatch(uiActions.showNotification({
      open: false
    }))
  }

  return (
    <div>
      {
        notification?.open && 

        <Alert 
          severity={type}
          onClose={handleClose}
        >
          {message}
        </Alert>
      }
      
    </div>
  );
}

export default Notification;