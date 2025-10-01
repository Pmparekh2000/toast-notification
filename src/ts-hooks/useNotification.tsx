import React, {useState, useCallback} from "react";
import Notification from "../ts-components/Notification";
import {v4 as uuidv4} from "uuid";
import { Position } from "../types/position";
import { NotificationProps, UseNotification } from "../interface/notification";

const useNotification = (position: Position="top-right"): UseNotification => {
    const [notifications, setNotifications] = useState<(NotificationProps & {id: string})[]>([]);

    const triggerNotification = useCallback((notificationProps: NotificationProps) => {
        const toastId = uuidv4();
        setNotifications((prevNotifications) => [...prevNotifications, {...notificationProps, toastId}]);
        setTimeout(() => {
            setNotifications((prevNotifications) => prevNotifications?.filter((notification) => notification?.toastId !== toastId));
        }, notificationProps.duration);
    }, []);

    const handleNotificationClose = (index: number) => {
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