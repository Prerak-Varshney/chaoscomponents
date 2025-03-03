import { ReactNode } from 'react';

interface ChaosComponentsProps {
    children: ReactNode;
}

const ChaosComponents = ({ children }: ChaosComponentsProps) => {
    return (
        <div className={`w-full min-h-screen bg-black`}>
            {children}
        </div>
    )
}

export default ChaosComponents;