import { useEffect, useState, useRef } from 'react';

interface ToolTipProps {
    label: string;
    width?: string;
    height?: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    hoverBgColor?: string;
    hoverTextColor?: string;

    toolTipLabel: string;
    toolTipPosition?: 'top' | 'bottom' | 'left' | 'right';
    toolTipWidth?: string;
    toolTipHeight?: string;
    toolTipBorderColor?: string;
    toolTipBgColor?: string;
    toolTipTextColor?: string;
    toolTipRounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';

    isButton?: boolean;
    onClick?: () => void;
}

const ToolTip = ({ 
    label, 
    width = 'auto',
    height = 'auto',
    bgColor = 'white',
    textColor = 'black',
    rounded = 'sm',
    hoverBgColor = 'gray',
    hoverTextColor = 'white',
    borderColor = 'transparent',

    toolTipLabel,
    toolTipPosition = 'right',
    toolTipWidth = 'auto',
    toolTipHeight = 'auto',
    toolTipBorderColor = 'transparent',
    toolTipBgColor = 'white',
    toolTipTextColor = 'black',
    toolTipRounded = 'sm',

    isButton = false,
    onClick
}: ToolTipProps) => {

    const [paddingEnabled, setPaddingEnabled] = useState<boolean>(true);
    const [toolTipPaddingEnabled, setToolTipPaddingEnabled] = useState<boolean>(true);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null); 
    
    useEffect(() => {
        if(width !== 'auto' || height !== 'auto') setPaddingEnabled(false);
    }, [width, height]);

    useEffect(() => {
        if(toolTipWidth !== 'auto' || toolTipHeight !== 'auto') setToolTipPaddingEnabled(false);
    }, [toolTipWidth, toolTipHeight]);

    return (
        <div className='w-fit relative'>
            <button 
                className={`
                    transition-all duration-300
                    ${paddingEnabled && 'px-4 py-1'}
                    ${rounded && rounded === 'none' && 'rounded-none'}
                    ${rounded && rounded === 'sm' && 'rounded-sm'}
                    ${rounded && rounded === 'md' && 'rounded-md'}
                    ${rounded && rounded === 'lg' && 'rounded-lg'}
                    ${rounded && rounded === 'full' && 'rounded-full'}
                `}
                style={{
                    width: paddingEnabled ? 'auto' : width,
                    height: paddingEnabled ? 'auto' : height,
                    backgroundColor: bgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBgColor;
                    e.currentTarget.style.color = hoverTextColor;
                    timeOutRef.current = setTimeout(() => {
                        setIsHovered(true)
                    }, 300);
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bgColor;
                    e.currentTarget.style.color = textColor;
                    if (timeOutRef.current) {
                        clearTimeout(timeOutRef.current);
                    }
                    setIsHovered(false)
                }}
                onClick={onClick}
                disabled={isButton}
            >
                {label}
            </button>

            {isHovered && (
                <div 
                    className={`
                        transition-all duration-300 absolute z-[999]
                        ${toolTipPaddingEnabled && 'px-4 py-1'}
                        ${toolTipRounded && toolTipRounded === 'none' && 'rounded-none'}
                        ${toolTipRounded && toolTipRounded === 'sm' && 'rounded-sm'}
                        ${toolTipRounded && toolTipRounded === 'md' && 'rounded-md'}
                        ${toolTipRounded && toolTipRounded === 'lg' && 'rounded-lg'}
                        ${toolTipRounded && toolTipRounded === 'full' && 'rounded-full'}
                        
                        ${toolTipPosition === 'top' && '-translate-y-1/2 -top-10'}
                        ${toolTipPosition === 'bottom' && 'translate-y-1/2 -bottom-10'}
                        ${toolTipPosition === 'right' && 'translate-x-1/2 -translate-y-1/2 top-1/2 -right-19'}
                        ${toolTipPosition === 'left' && '-translate-x-1/2 -translate-y-1/2 top-1/2 -left-19'}  
                    `}
                    style={{
                        width: toolTipPaddingEnabled ? 'auto' : toolTipWidth,
                        height: toolTipPaddingEnabled ? 'auto' : toolTipHeight,
                        backgroundColor: toolTipBgColor,
                        color: toolTipTextColor,
                        border: `1px solid ${toolTipBorderColor}`,
                    }}
                >
                    {toolTipLabel}
                </div>
            )}
        </div>

    )
}


export default ToolTip;