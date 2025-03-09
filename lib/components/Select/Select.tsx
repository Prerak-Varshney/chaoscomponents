import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ChevronDown } from 'lucide-react';

interface SelectProps {
    label: string;
    width?: string;
    height?: string;
    bgColor?: string;
    textColor?: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    hoverBgColor?: string;
    hoverTextColor?: string;
    borderColor?: string;
    optionsBgColor?: string;
    optionsTextColor?: string;
    optionsHoverBgColor?: string;
    optionsHoverTextColor?: string;
    optionsBorderColor?: string;
    optionsSeperatorColor?: string;
    maxOptionsHeight?: string;
    optionHeight?: string;
    optionsList: string[];
    selectedOptionsBgColor?: string;
    selectedOptionsTextColor?: string;
    type?: 'single' | 'multiple';
    disabled?: boolean;
    opacity?: number;
    selectedOptions: string[];
    scrollbarColor?: string;
    set?: boolean;
    removeFromSelectedOptionsAllowed?: boolean
    setSelectedOptions: (prev: string[] | ((prev: string[]) => string[])) => void;
}

const Select = ({
    label,
    width = '200px',
    height = '40px',
    bgColor = 'transparent',
    textColor = 'white',
    rounded = 'none',
    hoverBgColor = '#444',
    hoverTextColor = 'white',
    borderColor = 'white',
    optionsBgColor = 'black',
    optionsTextColor = 'white',
    maxOptionsHeight = '200px',
    optionHeight = '40px',
    optionsHoverBgColor = 'white',
    optionsHoverTextColor = 'black',
    optionsBorderColor = 'transparent',
    optionsSeperatorColor = 'transparent',
    selectedOptionsBgColor = 'white',
    selectedOptionsTextColor = 'black',
    optionsList = [],
    type = 'single',
    disabled = false,
    opacity = 0.7,
    selectedOptions,
    scrollbarColor = 'white',
    set = true,
    removeFromSelectedOptionsAllowed = true,
    setSelectedOptions,

}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selected, setSelected] = useState(label);
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const searchTimeoutRef = useRef<any | null>(null);
    const options = useMemo(() => optionsList, [optionsList]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle outside click to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle keyboard events
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) return;

            if (event.key === "ArrowDown") {
                setSelectedIndex((prev) => (prev === null || prev === options.length - 1 ? 0 : prev + 1));

            } else if (event.key === "ArrowUp") {
                setSelectedIndex((prev) => (prev === null || prev === 0 ? options.length - 1 : prev - 1));

            } 
            // else if (event.key === "Enter" && selectedIndex !== null) {
            //     handleSelection(options[selectedIndex]);
            // } 
            else if (event.key === "Escape") {
                setIsOpen(false);

            } else if (/^[a-zA-Z0-9]$/.test(event.key)) {
                setSearch((prevSearch) => {
                    const newSearch = prevSearch + event.key.toLowerCase();
                    
                    const foundIndex = options.findIndex((option) =>
                        option.toLowerCase().startsWith(newSearch)
                    );
                    if (foundIndex !== -1) setSelectedIndex(foundIndex);
                    searchTimeoutRef.current = setTimeout(() => setSearch(""), 1000);

                    return newSearch;
                });

            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        };
    }, [isOpen, selectedIndex, search, options, type, setSelectedOptions]);

    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        if (selectedIndex !== null && optionRefs.current[selectedIndex]) {
            optionRefs.current[selectedIndex]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [selectedIndex]);

    const handleSelection = useCallback((option: string) => {
        if(type === 'single'){
            if(removeFromSelectedOptionsAllowed){
                if(selected === option){
                    setSelectedOptions([]);
                    setSelected(label);
                    return setIsOpen(false);
                }
            }
            setSelectedOptions([option]);
            setSelected(option);
            return setIsOpen(false);
        }
        setSelectedOptions((prev) => {
            if (removeFromSelectedOptionsAllowed && prev.includes(option)) {
                return prev.filter((item) => item !== option);
            }
    
            if(set && prev.includes(option)) return prev;
            
            return [...prev, option];
        });
        setIsOpen(false);
    }, [type, removeFromSelectedOptionsAllowed, selected, setSelectedOptions, label, set]);

    return (
        <div ref={containerRef} className="relative">
            {/* Custom Select Box */}
            <div
                className={`
                    w-full flex items-center ${label ? 'justify-between' : 'justify-end'} px-4 cursor-pointer transitiona-all duration-300
                    ${rounded === 'none' && 'rounded-none'}
                    ${rounded === 'sm' && 'rounded-sm'}
                    ${rounded === 'md' && 'rounded-md'}
                    ${rounded === 'lg' && 'rounded-lg'}
                    ${rounded === 'full' && 'rounded-full'}
                `}
                style={{
                    width,
                    height,
                    backgroundColor: bgColor,
                    color: textColor,
                    border: `1px solid ${borderColor}`,
                    opacity: disabled ? opacity : 1
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = !disabled ? hoverBgColor : bgColor;
                    e.currentTarget.style.color = !disabled ? hoverTextColor : textColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bgColor;
                    e.currentTarget.style.color = textColor;
                }}
                onClick={() => {
                    if(!disabled){
                        setIsOpen((prev) => !prev);
                    }
                }}
            >
                {type === 'single' ? selected : label}
                <span className={`${isOpen && 'rotate-540'} transition-all duration-500`}><ChevronDown size={16}/></span>
            </div>

            {/* Dropdown */}
            {isOpen && (
                <ul 
                    className={`absolute top-full left-0 mt-1 z-10 overflow-y-scroll`}
                    style={{
                        width,
                        maxHeight: maxOptionsHeight,
                        backgroundColor: optionsBgColor,
                        color: optionsTextColor,
                        border: `1px solid ${optionsBorderColor}`,
                        //scrollbar should be of the same color as the optionsBgColor and it should be thin
                        scrollbarColor: `${scrollbarColor} ${optionsBgColor}`,
                        scrollbarWidth: 'thin',

                    }}
                >
                    {options.map((option, index) => (
                        <li
                            ref={(el) => {
                                optionRefs.current[index] = el;
                            }}
                            key={index}
                            className={`p-2 cursor-pointer transitiona-all duration-300`}
                            style={{
                                minHeight: optionHeight,
                                backgroundColor: selectedOptions.includes(option) ? selectedOptionsBgColor : optionsBgColor,
                                color: selectedOptions.includes(option) ? selectedOptionsTextColor : optionsTextColor,
                                borderBottom: `1px solid ${optionsSeperatorColor}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = selectedOptions.includes(option) ? selectedOptionsBgColor : optionsHoverBgColor;
                                e.currentTarget.style.color = selectedOptions.includes(option) ? selectedOptionsTextColor : optionsHoverTextColor;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = selectedOptions.includes(option) ? selectedOptionsBgColor : optionsBgColor;
                                e.currentTarget.style.color = selectedOptions.includes(option) ? selectedOptionsTextColor : optionsTextColor;
                            }}
                            onClick={() => {
                                handleSelection(option)}
                            }
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Select;