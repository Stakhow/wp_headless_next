import { ButtonHTMLAttributes } from 'react';

export const Dot = ({
    isActive,
    onClick,
    ...props
}: {
    isActive: boolean;
    onClick?: () => void;
    props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) => (
    <button
        className={`slider-dot mx-[5px] h-[5px] w-[50px] rounded-[3px] text-black transition hover:opacity-80 ${isActive ? 'bg-highlight' : 'bg-white'}`}
        {...props}
    ></button>
);
