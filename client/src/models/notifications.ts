/* B*H */
import { ref } from 'vue'

export interface Notification {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

const notifications = ref<Notification[]>([]) // array of notifications

export const refNotifications = () => notifications; // function to return the notifications

export function addNotification(notification: Notification) {
    notifications.value.push(notification);
}

export function removeNotification(index: number) {
    notifications.value.splice(index, 1); // remove the notification at the given index
    
}