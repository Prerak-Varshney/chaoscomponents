import { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

interface AlertBoxProps {
    label?: string;
    width?: string;
    height?: string;
    borderColor?: string;
    textColor?: string;
    textSize?: string;
    bgColor?: string;
    bgBlurColor?: string;
    opacity?: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    isCrossEnabled?: boolean;
    onCrossClick?: () => void;
    onClickOutside?: () => void;
    children?: React.ReactNode;
}

const AlertBox = ({
    label,
    width = 'fit-content',
    height = 'auto',
    borderColor = 'transparent',
    textColor = 'white',
    textSize,
    bgColor = 'gray',
    bgBlurColor = '#111',
    opacity = '0.8',
    rounded = 'md',
    isCrossEnabled = false,
    onCrossClick,
    onClickOutside,
    children
}: AlertBoxProps) => {

    const [paddingEnabled, setPaddingEnabled] = useState(true);
    const [alertBoxOpacity, setAlertBoxOpacity] = useState<string>('0');

    const alertDialogBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(width !== 'fit-content' || height !== 'auto') setPaddingEnabled(false);
    }, [width, height]);

    useEffect(() => {
        // Handler to call on outside click of Dialog Box
        const handleClickOutside = (event: MouseEvent) => {
            if(alertDialogBoxRef.current && !alertDialogBoxRef.current.contains(event.target as Node)) {
                onClickOutside?.();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClickOutside])


    useEffect(() => {
        setAlertBoxOpacity('1');
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div 
            className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[9999]`}
            style={{
                backgroundColor: bgBlurColor,
                opacity,
            }}
        >
            <div 
                ref={alertDialogBoxRef}
                className={`
                    flex flex-col items-center justify-center gap-2 text-base transition-all duration-300 relative
                    ${paddingEnabled && 'px-5 py-4'}
                    ${rounded && rounded === 'none' && 'rounded-none'}
                    ${rounded && rounded === 'sm' && 'rounded-sm'}
                    ${rounded && rounded === 'md' && 'rounded-md'}
                    ${rounded && rounded === 'lg' && 'rounded-lg'}
                    ${rounded && rounded === 'full' && 'rounded-full'}
                `}
                style = {{
                    width: paddingEnabled ? 'fit-content' : width,
                    height: paddingEnabled ? 'auto' : height,
                    border: `1px solid ${borderColor}`,
                    color: textColor,
                    backgroundColor: bgColor,
                    fontSize: textSize,
                    opacity: alertBoxOpacity,
                }}
            >
                {
                    isCrossEnabled &&
                    <button 
                        className='absolute top-0 right-0 text-white text-2xl bg-transparent border border-transparent'
                        onClick={onCrossClick}
                    >
                        <X size={16} />
                    </button>
                }

                {label && <span>{label}</span>}
                
                {children}
            </div>
        </div>
    );
}

export default AlertBox;