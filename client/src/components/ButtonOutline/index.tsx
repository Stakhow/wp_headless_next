import { Button } from '../Button/index';
import { ButtonHTMLAttributes } from 'react';

export const ButtonOutline = ({
    className,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <Button
            className={`border-width-[1px] border bg-transparent ${className || 'hover:border-highlight-hover'}`}
            {...props}
        >
            {children}
        </Button>
    );
};
