import { ButtonHTMLAttributes } from 'react';

export const Button = ({
    children,
    className,
    disabled = false,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}) => {
    return (
        <button
            className={`
        h-[40px] 
        max-w-full 
        truncate
        rounded-[40px]
        bg-highlight
        px-10
        text-center font-roboto
        text-[12px]
        uppercase leading-[40px]
        tracking-[2px]
        text-white
        transition
        hover:bg-highlight-hover
        hover:shadow-[0px_2px_5px_#00000040] sm:text-[15px] md:h-[60px] md:rounded-[60px] md:leading-[60px] md:tracking-[3px]
        ${className || ''}
        `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
