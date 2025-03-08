import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleProps {
    label: string;
    width?: string;
    height?: string;
    bgColor?: string;
    textSize?: string;
    textColor?: string;
    hoverColor?: string;
    borderColor?: string;
    isLabelBold?: boolean;
    hoverBgColor?: string;
    hoverTextColor?: string;
    collapsibleLabel?: string;
    collapsibleBgColor?: string;
    collapsibleTextColor?: string;
    collapsibleTextSize?: string;
    children?: React.ReactNode;
    overallBorderColor?: string;
}
const Collapsible = ({
    label,
    width = '300px',
    height = '40px',
    bgColor = 'transparent',
    textColor = 'white',
    textSize = 'none',
    hoverBgColor = '#4a5565',
    hoverTextColor = 'white',
    isLabelBold = false,
    borderColor = 'white',
    collapsibleLabel,
    collapsibleBgColor = 'transparent',
    collapsibleTextColor = 'white',
    collapsibleTextSize = 'none',
    overallBorderColor = 'transparent',
    children,

}: CollapsibleProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [contentHeight, setContentHeight] = useState<string>("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);
    
    
    return (
        <div
            style={{
                width: width,
                minHeight: height,
                backgroundColor: bgColor,
                color: textColor,
                fontSize: textSize,
                border: `1px solid ${overallBorderColor}`,
            }}
        >
            <div 
                className='w-full h-full flex justify-between items-center p-2 border border-transparent transition-all duration-300'
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBgColor;
                    e.currentTarget.style.color = hoverTextColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bgColor;
                    e.currentTarget.style.color = textColor;
                }}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: bgColor,
                    color: textColor,
                    fontSize: textSize,
                }}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <p className={`text-white ${isLabelBold && 'font-bold'}`}>{label}</p>
                <div 
                    className={`${isOpen && 'rotate-540'} p-2 transition-all duration-500`} 
                >
                    <ChevronDown size={textSize === 'none' ? 16 : textSize} />
                </div>
            </div>

            <div
                className={`
                    transition-all duration-500 overflow-hidden 
                `}
                style={{
                    width,
                    maxHeight: contentHeight,
                    backgroundColor: collapsibleBgColor,
                    color: collapsibleTextColor,
                    borderTop: `1px solid ${borderColor}`,
                    fontSize: collapsibleTextSize,
                }}
            >
                <div className="p-2" ref={contentRef}>
                    {collapsibleLabel && collapsibleLabel}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Collapsible;