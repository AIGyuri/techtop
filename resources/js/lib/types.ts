export type FlashMessageType = 'success' | 'error' | 'warning' | 'info';

export interface FlashMessageProps {
    type: FlashMessageType;
    message: string;
    onDismiss?: () => void;
}

export interface Brand {
    id: number;
    name: string;
    description: string;
}