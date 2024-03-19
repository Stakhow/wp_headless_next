'use client';

import { useState, useEffect, useRef } from 'react';
import { ButtonLeft, ButtonRight } from './Buttons';
import { Dot } from './Dot';
import { SliderItem } from './SliderItem';

export const Slider = ({
    slides,
    changeStyle = 'slide',
    showDots = true,
    showButtons = true,
    className,
    autoplay = true,
    intervalInSeconds = 3,
    ...props
}: {
    slides: { component: React.ReactNode }[];
    changeStyle?: 'fade' | 'slide';
    showDots?: boolean;
    showButtons?: boolean;
    className?: string;
    autoplay?: boolean;
    intervalInSeconds?: number;
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isAutoPlayOn, setAutoPlayOn] = useState<boolean | undefined>(
        autoplay
    );

    const increment = () =>
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : ++prev));

    const sliderInterval = useRef<number | undefined>();

    // useEffect(() => () => clearInterval(sliderInterval.current), []);

    useEffect(() => {
        if (isAutoPlayOn) {
            // sliderInterval.current = window.setInterval(() => {
            //     increment();
            // }, intervalInSeconds * 1000);
        } else {
            // clearInterval(sliderInterval.current);
            // sliderInterval.current = undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAutoPlayOn]);

    return (
        !!slides.length && (
            <div
                className={`slider overflow-hidden ${className || ''}`}
                {...props}
            >
                <div
                    className={`slider-outer relative h-full w-full ${showButtons && 'px-10'} pb-5`}
                >
                    {!!showButtons && slides.length > 1 && (
                        <div className="slider-buttons top-50 absolute left-0 right-0 top-1/2 z-10 flex w-full translate-y-[-50%] justify-between">
                            <ButtonLeft
                                onClick={() => {
                                    setActiveIndex((prev) =>
                                        prev === 0 ? slides.length - 1 : --prev
                                    );
                                    setAutoPlayOn(false);
                                }}
                            />
                            <ButtonRight
                                onClick={() => {
                                    increment();
                                    setAutoPlayOn(false);
                                }}
                            />
                        </div>
                    )}

                    <div
                        className="slider-container flex h-full w-full items-center transition duration-300"
                        style={{
                            transform:
                                changeStyle === 'slide'
                                    ? `translateX(-${activeIndex}00%)`
                                    : '',
                        }}
                    >
                        {slides.map(({ component }, idx: number) => (
                            <SliderItem
                                className={`${changeStyle === 'fade' ? (activeIndex === idx ? 'fade-in' : 'hidden') : ''} ${activeIndex === idx ? 'active' : 'opacity-0'}`}
                                key={`slider-items-${idx}`}
                            >
                                {component}
                            </SliderItem>
                        ))}
                    </div>

                    {slides.length > 1 && showDots && (
                        <div className="align-center absolute bottom-0 left-0 right-0 mt-5 flex justify-center">
                            {slides.map((i, idx) => (
                                <Dot
                                    onClick={() => {
                                        setActiveIndex(idx);
                                        setAutoPlayOn(false);
                                    }}
                                    key={`slider-dot-${idx}`}
                                    isActive={activeIndex === idx}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
