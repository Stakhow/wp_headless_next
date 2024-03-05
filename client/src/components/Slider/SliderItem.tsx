export const SliderItem = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`slider-item w-full min-w-full transition duration-300 ${className || ''}`}
    >
        {children}
    </div>
);
