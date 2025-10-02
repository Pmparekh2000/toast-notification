import React, {useState, useRef, useEffect} from 'react'
import NotificationToast from './NotificationToast';
import { POSITIONS_OPTIONS } from '../constants/constants';

const NotificationToastList = () => {
    const [toastList, setToastList] = useState([]);
    const [toastPosition, setToastPosition] = useState("top-right");
    const timerRef = useRef({});

    const clearAllTimeouts = () => {
        for (const toastId in timerRef.current) {
            clearTimeout(timerRef.current[toastId]);
            delete timerRef.current[toastId];
        }
    };

    // Clean up to clean any existing timer from browser in case toast component unmounts.
    useEffect(() => {
        return () => {
            clearAllTimeouts();
        }
    }, []);

    const addToast = (type="success", timeout=5000, message="No message provided", animation="popup") => {
        const toastId = new Date().getTime();
        setToastList((prevToastList) => [...prevToastList, {toastId, type, timeout, message, animation}]);
        const timer = setTimeout(() => {
            removeToast(toastId);
        }, timeout);
        timerRef.current[toastId] = timer;
    };

    const removeToast = (toastId) => {
        setToastList((prevToastList) => prevToastList?.filter((toast) => toast?.toastId !== toastId));
        clearTimeout(timerRef.current[toastId]);
        delete timerRef.current[toastId];
    };

  return (
    <div>
        <div className={`notification-toast-container ${toastPosition}`}>
            {
                toastList?.map((toast) => {
                    return (
                        <div key={toast?.toastId}>
                            <NotificationToast {...toast} removeToast={removeToast}/> 
                        </div>
                    )
                })
            }
        </div>
        <div className="notification-buttons-container">
            <div>
                <button onClick={() => addToast("success", 5000, "File sent successfully", "popup")}>Success Toast Pop</button>
            </div>
            <div>
                <button onClick={() => addToast("info", 5000, "File uploaded", "slide")}>Info Toast Slide</button>
            </div>
            <div>
                <button onClick={() => addToast("warning", 5000, "Uploaded file has some error", "popin")}>Warning Toast PopIn</button>
            </div>
            <div>
                <button onClick={() => addToast("error", 5000, "File sent failed")}>Error Toast</button>
            </div>
            <div>
                <select name="toast-position" id="toast-position" value={toastPosition} onChange={(e) => setToastPosition(e.target.value)}>
                {POSITIONS_OPTIONS?.map((position_option) => {
                    return <option key={position_option.value} value={position_option.value}>{position_option.text}</option>
                })}
                </select>
            </div>
        </div>
    </div>
  )
}

export default NotificationToastList