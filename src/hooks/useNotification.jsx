import {useState, useCallback} from "react";
import Notification from "../components/Notification";
import {v4 as uuidv4} from "uuid";

const useNotification = (position="top-right") => {
    const [notifications, setNotifications] = useState([]);

    const triggerNotification = useCallback((notificationProps) => {
        const toastId = uuidv4();
        setNotifications((prevNotifications) => [...prevNotifications, {...notificationProps, toastId}]);
        setTimeout(() => {
            setNotifications((prevNotifications) => prevNotifications?.filter((notification) => notification?.toastId !== toastId));
        }, notificationProps.duration);
    }, []);

    const handleNotificationClose = (index) => {
        setNotifications((prevNotifications) => {
            const updatedNotification = [...prevNotifications];
            updatedNotification.splice(index, 1);
            return updatedNotification;
        });
    };

    const NotificationComponent = notifications ? (
        <div className={`notification-container ${position} ${position.split("-")[0]}`}>
            {notifications?.map((notification, index) => {
                return (
                    <Notification key={notification?.id} {...notification} onClose={() => handleNotificationClose(index)}/>
                )
            })}
        </div>
    ): (
        <></>
    );

    return {NotificationComponent, triggerNotification};
}

export default useNotification;