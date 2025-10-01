import React from 'react'
import { ICONS } from '../constants/constants'


const NotificationToast = ({toastId, type="success", message="No message provided", removeToast=() => {}, animation="popup"}) => {
  return (
    <div className={`notification-toast ${type} ${animation}`}>
        <div>
            {ICONS[type]}
        </div>
        <div>
            {message}
        </div>
        <div onClick={() => removeToast(toastId)} className="toast-cross-button">
            {ICONS["cross"]}
        </div>
    </div>
  )
}

export default NotificationToast