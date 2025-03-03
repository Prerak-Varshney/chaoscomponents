import { useState, useEffect } from 'react';

interface InputProps {
    title: string;
    type: string;
    width?: string;
    height?: string;
    disabled?: boolean;
    bgColor?: string;
    outlineColor?: string;
    textColor?: string;
    rounded?: 'none'| 'sm'| 'md'| 'lg'| 'full';
    borderColor?: string;
    value?: string;
    setValue?: (value: string) => void;
}

const Input = ({
    title,
    width = '200px',
    height = '40px',
    bgColor = '#000',
    outlineColor = 'rgb(0, 150, 255)',
    textColor = 'black',
    rounded = 'sm',
    type = 'text',
    disabled = false,
    borderColor = 'black',
    value,
    setValue
}: InputProps) => {

    const [ isFocused, setIsFocused ] = useState<boolean>(false);

    useEffect(() => {
        if(value && setValue) setValue(value);
    }, [value, setValue]);

    return (
        <div 
            className={`relative w-fit ${disabled && 'opacity-70'}`}
            style = {{ backgroundColor: bgColor }}
        >
            <input 
                className={`
                    peer relative z-10 bg-transparent px-2 transition-all duration-300
                    ${rounded && rounded === 'none' && 'rounded-none'}
                    ${rounded && rounded === 'sm' && 'rounded-sm'}
                    ${rounded && rounded === 'md' && 'rounded-md'}
                    ${rounded && rounded === 'lg' && 'rounded-lg'}
                    ${rounded && rounded === 'full' && 'rounded-full'}
                `}
                style={{
                    width,
                    height, 
                    outline: isFocused ? '1px solid ' + outlineColor : 'none',
                    color: textColor,
                    border: isFocused ? 'transparent' : '1px solid ' + borderColor,
                }}
                type={type} 
                disabled={disabled}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                onChange={(e) => setValue && setValue(e.target.value)}
            />
            <label 
                className={`absolute transition-all duration-300 -translate-y-1/2 transalate-y-[-50%] ${!value ? `top-1/2  left-2 peer-focus:top-0 peer-focus:left-2 peer-focus:text-xs peer-focus:z-10` : `text-xs top-0 left-2 z-10`}`}
                style={{
                    backgroundColor: bgColor,
                    color: isFocused ? outlineColor : textColor,
                }}
            >
                {title}
            </label>
        </div>
        
    )
}

export default Input;