import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface BadgeProps {
    label: string;
    width?: string;
    height?: string;
    bgColor?: string;
    textColor?: string;
    textSize?: 'xs' | 'sm' | 'md' | 'lg';
    borderColor?: string;
    rounded?: 'none'| 'sm'| 'md'| 'lg'| 'full';
    crossButton?: boolean;
    crossButtonColor?: string;
    crossColor?: string;
    onCrossClick?: () => void;
}
const Badge = ({ 
    label,
    width = 'fit-content',
    height = 'auto',
    bgColor = 'white',
    textColor = 'black',
    textSize = 'md',
    borderColor = 'transparent',
    rounded = 'sm',
    crossButton = false,
    crossButtonColor = 'black',
    crossColor = 'white',
    onCrossClick
 }: BadgeProps) => {

    const [paddingEnabled, setPaddingEnabled] = useState(true);

    useEffect(() => {
        if(width !== 'fit-content' || height !== 'auto') setPaddingEnabled(false);
    }, [width, height]);

    return (
        <div 
            className={`
                relative transition-all duration-300 bg-blue-500 disabled:opacity-70
                flex items-center justify-center
                ${paddingEnabled && ''}
                ${rounded && rounded === 'none' && 'rounded-none'}
                ${rounded && rounded === 'sm' && 'rounded-sm'}
                ${rounded && rounded === 'md' && 'rounded-md'}
                ${rounded && rounded === 'lg' && 'rounded-lg'}
                ${rounded && rounded === 'full' && 'rounded-full'}
                ${textSize === 'xs' && 'text-xs'}
                ${textSize === 'sm' && 'text-sm'}
                ${textSize === 'md' && 'text-md'}
                ${textSize === 'lg' && 'text-lg'}
            `}
            style={{
                backgroundColor: bgColor,
                color: textColor,
                width: paddingEnabled ? 'fit-content' : width,
                height: paddingEnabled ? 'auto' : height,
                border: `1px solid ${borderColor}`
            }}
        >
            {label}

            { crossButton && (
                <button
                    className='absolute -translate-y-1/2 -right-2 top-0 rounded-full'
                    onClick={onCrossClick}
                    style={{
                        backgroundColor: crossButtonColor,
                        color: crossColor
                    }}
                >
                <X size={10}/>
                </button>
            )}
        </div>
    );
}

export default Badge;