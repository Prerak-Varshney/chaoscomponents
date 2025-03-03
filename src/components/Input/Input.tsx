import { useState, useEffect } from 'react';
import { EyeClosed, Eye } from 'lucide-react';
interface InputProps {
    placeholder: string;
    type?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
    bgColor?: string;
    outlineColor?: string;
    textColor?: string;
    borderColor?: string;
    rounded?: 'none'| 'sm'| 'md'| 'lg'| 'full';
    buttonStyle?: 'google' | 'normal';
    value?: string;
    setValue?: (value: string) => void;
}

const Input = ({
    placeholder,
    buttonStyle = 'google',
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
    const [ buttonType, setButtonType ] = useState<string>(type);

    useEffect(() => {
        if(value && setValue) setValue(value);
    }, [value, setValue]);

    return (
        buttonStyle === 'normal' ? (
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
                        color: textColor,
                        outline: isFocused ? '1px solid ' + outlineColor : '1px solid transparent',
                        border: isFocused ? '1px solid transparent' : '1px solid ' + borderColor,
                    }}
                    type={buttonType} 
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
                    {placeholder}
                </label>
                {
                    type === 'password' &&
                    <button 
                        className={`absolute transition-all duration-300 -translate-y-1/2 top-1/2 right-2 z-10 bg-transparent opacity-60 hover:opacity-100 cursor-pointer text-xs`}
                        style={{ color: textColor }}
                        onClick={() => setButtonType(buttonType === 'password' ? 'text' : 'password')}
                    >
                        {buttonType === 'password' ? <EyeClosed size={16} /> : <Eye size={16} />}
                    </button>
                }
            </div>
        ) : (
            <div className={`w-fit relative`}>
                <input 
                    className={`
                        px-2 transition-all duration-300 disabled:opacity-70
                        ${rounded && rounded === 'none' && 'rounded-none'}
                        ${rounded && rounded === 'sm' && 'rounded-sm'}
                        ${rounded && rounded === 'md' && 'rounded-md'}
                        ${rounded && rounded === 'lg' && 'rounded-lg'}
                        ${rounded && rounded === 'full' && 'rounded-full'}
                    `}
                    style={{
                        width,
                        height, 
                        color: textColor,
                        backgroundColor: bgColor,
                        outline: isFocused ? '1px solid ' + outlineColor : '1px solid transparent',
                        border: isFocused ? '1px solid transparent' : '1px solid ' + borderColor,
                    }}
                    type={buttonType} 
                    disabled={disabled}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={value}
                    onChange={(e) => setValue && setValue(e.target.value)}
                    placeholder={placeholder}
                />
                {
                    type === 'password' &&
                    <button 
                        className={`absolute transition-all duration-300 -translate-y-1/2 top-1/2 right-2 z-10 bg-transparent opacity-60 hover:opacity-100 cursor-pointer text-xs`}
                        style={{ color: textColor }}
                        onClick={() => setButtonType(buttonType === 'password' ? 'text' : 'password')}
                    >
                        {buttonType === 'password' ? <EyeClosed size={16} /> : <Eye size={16} />}
                    </button>
                }

            </div>
        )
        
    )
}

export default Input;