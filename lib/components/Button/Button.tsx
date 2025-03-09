import { useEffect, useState } from 'react';

interface ButtonProps {
    label?: string | React.ReactNode;
    width?: string;
    height?: string;
    disabled?: boolean;
    onClick?: () => void;
    bgColor?: string;
    textColor?: string;
    rounded?: 'none'| 'sm'| 'md'| 'lg'| 'full';
    hoverBgColor?: string;
    hoverTextColor?: string;
    borderColor?: string;
    gap?: string;
    children?: React.ReactNode;
}

const Button = ({ 
    label, 
    width = 'auto',
    height = 'auto',
    disabled = false, 
    bgColor = 'white',
    textColor = 'black',
    rounded = 'sm',
    hoverBgColor = 'rgb(0, 150, 255)',
    hoverTextColor = 'white',
    borderColor = 'transparent',
    gap = '0px',
    onClick,
    children,
}: ButtonProps) => {

    const [paddingEnabled, setPaddingEnabled] = useState(true);

    useEffect(() => {
        if(width !== 'auto' || height !== 'auto') setPaddingEnabled(false);
    }, [width, height]);

    return (
        <button 
            className={`
                flex items-center justify-center relative transition-all duration-300 bg-blue-500 disabled:opacity-70
                ${paddingEnabled && 'px-4 py-1'}
                ${rounded && rounded === 'none' && 'rounded-none'}
                ${rounded && rounded === 'sm' && 'rounded-sm'}
                ${rounded && rounded === 'md' && 'rounded-md'}
                ${rounded && rounded === 'lg' && 'rounded-lg'}
                ${rounded && rounded === 'full' && 'rounded-full'}
            `}
            style={{
                backgroundColor: bgColor,
                color: textColor,
                width: paddingEnabled ? 'auto' : width,
                height: paddingEnabled ? 'auto' : height,
                border: `1px solid ${borderColor}`,
                gap: gap,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverBgColor;
                e.currentTarget.style.color = hoverTextColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bgColor;
                e.currentTarget.style.color = textColor;
            }}
            disabled={disabled}
            onClick={onClick}
        >
            {label || children}
        </button>
    )
}

export default Button;