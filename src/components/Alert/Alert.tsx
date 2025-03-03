import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface AlertProps {
    alertType: 'success' | 'error' | 'warning' | 'info' | 'black';
    alertHeading?: string;
    alertText: string,
    borderColor?: string,
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    // button? : boolean;
    children?: React.ReactNode;
}

const Alert = ({
    alertType = "info",
    alertHeading,
    alertText,
    borderColor = "transparent",
    rounded = "none",
    // button = true,
    children,
}: AlertProps) => {
    const [alertPosition, setAlertPosition] = useState<string>('-top-30');
    useEffect(() => {
        setAlertPosition('top-5');
        setTimeout(() => {
            setAlertPosition('-top-30');
        }, 5000);
    }, []);

    return (
        <div 
            className={`
                w-11/12 min-h-14 ${alertPosition} left-1/2 -translate-x-1/2 fixed rounded-lg z-[100] transition-all duration-300
                ${alertType === 'success' && 'bg-green-600'}
                ${alertType === 'error' && 'bg-red-500'}
                ${alertType === 'warning' && 'bg-orange-500'}
                ${alertType === 'info' && 'bg-blue-500'}
                ${alertType === 'black' && 'bg-black'}
                ${rounded === 'none' && 'rounded-none'}
                ${rounded === 'sm' && 'rounded-sm'}
                ${rounded === 'md' && 'rounded-md'}
                ${rounded === 'lg' && 'rounded-lg'}
                ${rounded === 'full' && 'rounded-full'}
            `}
            style={{ border: `1px solid ${borderColor}` }}
        >
            <button
                className={`absolute top-1 right-1 cursor-pointer text-white transition-all duration-300 hover:text-gray-300`}
                onClick={() => setAlertPosition('-top-30')}
            >
                <X size={16} />
            </button>
            <div className={`w-full h-full text-white flex flex-col justify-center ${alertHeading ? 'items-start pl-10' : 'items-center'}`}>
                {alertHeading && <div className='text-base font-bold'>{alertHeading}</div>}
                {alertText}
            </div>
            {children}
        </div>
    )
}

export default Alert;