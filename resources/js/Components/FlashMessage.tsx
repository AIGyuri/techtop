import { useEffect } from 'react';
import { FlashMessageProps } from '@/lib/types';

export default function FlashMessage({ 
    type, 
    message, 
    onDismiss 
}: FlashMessageProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss?.();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onDismiss]);

    if (!message) return null;

    const baseClasses = "p-4 mb-4 rounded-lg";
    const typeClasses = {
        success: "bg-green-100 text-green-700",
        error: "bg-red-100 text-red-700",
        warning: "bg-yellow-100 text-yellow-700",
        info: "bg-blue-100 text-blue-700"
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]} fixed bottom-2 right-2`}>
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button 
                    onClick={onDismiss}
                    className="ml-2 text-lg font-semibold"
                    aria-label="Dismiss message"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
