export interface NotificationProps {
    type: "success" | "info" | "warning" | "error", 
    message: string,
    duration: number,
    animation?: "fade" | "pop" | "slide"
};

export interface UseNotification {
    NotificationComponent: JSX.Element,
    triggerNotification: (notificationProps: NotificationProps) => void
};