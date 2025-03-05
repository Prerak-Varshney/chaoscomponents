import { useEffect, useState } from 'react';

interface ButtonProps {
    label: string;
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
    hoverBgColor = 'black',
    hoverTextColor = 'white',
    borderColor = 'transparent',
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
                transition-all duration-300 bg-blue-500 disabled:opacity-70
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
                border: `1px solid ${borderColor}`
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
            { label && label }

            {children}
        </button>
    )
}

export default Button;