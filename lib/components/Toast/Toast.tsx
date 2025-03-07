import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
    toastHeading?: string;
    toastText: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    button?: boolean;
    buttonLabel?: string;
    buttonBackgroundColor?: string;
    buttonTextColor?: string;
    buttonRounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    buttonBorderColor?: string;
    buttonOnClick?: () => void;
    children?: React.ReactNode;
}

const Toast = ({ 
    toastText, 
    toastHeading, 
    rounded='sm', 
    bgColor='black', 
    textColor='white', 
    borderColor='white',
    button=false,
    buttonLabel,
    buttonBackgroundColor,
    buttonTextColor,
    buttonRounded,
    buttonBorderColor,
    buttonOnClick,
    children
}: ToastProps) => {

    const [toastPosition, setToastPosition] = useState<string>('-right-50');

    useEffect(() => {
        setToastPosition('right-5');
        setTimeout(() => {
            setToastPosition('-right-50');
        }, 5000);
    }, []);


    return (
        <div 
            className={`
                fixed bottom-5 ${toastPosition} p-4 flex flex-col justify-center ${toastHeading ? 'items-start gap-2' : 'items-center'} transition-all duration-300 rounded-md
                ${rounded === 'none' && 'rounded-none'}
                ${rounded === 'sm' && 'rounded-sm'}
                ${rounded === 'md' && 'rounded-md'}
                ${rounded === 'lg' && 'rounded-lg'}
                ${rounded === 'full' && 'rounded-full'}
            `}
            style={{
                border: `1px solid ${borderColor}`,
                backgroundColor: bgColor,
                color: textColor,
            }}
        >
            <button 
                className='absolute top-1 right-1 cursor-pointer transition-all duration-300'
                style={{ 
                    backgroundColor: bgColor,
                    color: textColor
                 }}
                onClick={() => setToastPosition('-right-50')}
            >
                <X size={16} />
            </button>
            {toastHeading && <div className='text-base font-bold'>{toastHeading}</div>}
            {toastText && toastText}
            {
                button && (
                    <button 
                        className={`
                            px-2 py-1 border border-white
                            ${buttonRounded === 'none' && 'rounded-none'}
                            ${buttonRounded === 'sm' && 'rounded-sm'}
                            ${buttonRounded === 'md' && 'rounded-md'}
                            ${buttonRounded === 'lg' && 'rounded-lg'}
                            ${buttonRounded === 'full' && 'rounded-full'}
                        `}
                        style={{
                            backgroundColor: buttonBackgroundColor || bgColor,
                            color: buttonTextColor || textColor,
                            borderColor: buttonBorderColor || borderColor
                        }}
                        onClick={buttonOnClick}
                    >
                        {buttonLabel}
                    </button>
                )
            }
            {children}
        </div>
    )
}

export default Toast;