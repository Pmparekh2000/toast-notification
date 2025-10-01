import { AiOutlineClose } from "react-icons/ai";
import { ICONS } from "../constants/icons";
import "./Notification.css";
import { ANIMATIONS } from "../constants/animation";
import React, { useRef, useEffect } from "react";

const Notification = ({type="success", message, onClose=() => {}, animation="slide"}) => {
    const notificationRef = useRef(null);
    useEffect(() => {
      if (notificationRef.current) {
        notificationRef.current.focus();
      }
    }, [])
    
    const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
    const ariaType = type === "error" || type === "warning" ? "assertive" : "polite";
    return (
        <div className={`notification ${type} ${ANIMATIONS[animation]}`} ref={notificationRef} role={ariaRole} aria-live={ariaType} tabIndex={-1}>
            {ICONS[type]}
            {message}
            <button className="cloneBtn" onClick={() => onClose()}>
                <AiOutlineClose color="white" />
            </button>
        </div>
    )
}

export default Notification;