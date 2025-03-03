import { useEffect, useState } from 'react';

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
    bgBlurColor = '#002',
    opacity = '0.8',
    rounded = 'md',
    children
}: AlertBoxProps) => {

    const [paddingEnabled, setPaddingEnabled] = useState(true);

    useEffect(() => {
        if(width !== 'fit-content' || height !== 'auto') setPaddingEnabled(false);
    }, [width, height]);

    const [alertBoxOpacity, setAlertBoxOpacity] = useState<string>('0');

    useEffect(() => {
        setAlertBoxOpacity('1');

        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = '';
        };

    }, []);

    return (
        <div 
            className={`fixed top-0 w-full h-screen flex items-center justify-center z-[9999]`}
            style={{
                backgroundColor: bgBlurColor,
                opacity,
            }}
        >
            <div 
                className={`
                    flex flex-col items-center justify-center gap-2 text-base transition-all duration-300
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
                {label && <span>{label}</span>}
                
                {children}
            </div>
        </div>
    );
}

export default AlertBox;