'use client';

import { useEffect, useState } from 'react';
import { FacebookIcon } from '../Icons/FacebookIcon/index';
import { TwitterIcon } from '../Icons/TwitterIcon/index';
import { InstagramIcon } from '../Icons/InstagramIcon/index';
import { Logo } from '../Logo/index';

export const MenuMobile = () => {
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        if (active) {
            document.body.classList.add('overflow-hidden');
        } else document.body.classList.remove('overflow-hidden');
    }, [active]);

    const MenuButton = ({ isActive }: { isActive: boolean }) => (
        <button
            className="group relative z-20"
            onClick={() => {
                setActive((prev) => !prev);
            }}
        >
            <span
                className={`relative flex h-[50px] w-[50px] transform  items-center justify-center overflow-hidden transition-all ${isActive && 'ring-4'} shadow-md ring-opacity-30 duration-200`}
            >
                <span className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                    <span
                        className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${isActive && 'rotate-[42deg]'}`}
                    ></span>
                    <span
                        className={`h-[2px] w-1/2 transform rounded bg-white transition-all duration-300 ${isActive && '-translate-x-10'}`}
                    ></span>
                    <span
                        className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${isActive && '-rotate-[42deg]'}`}
                    ></span>
                </span>
            </span>
        </button>
    );

    return (
        <div className={'test-lg block lg:hidden'}>
            <MenuButton isActive={active} />

            {active && (
                <div className="menu-mobile d fixed inset-0 z-10 bg-black text-white">
                    <div className="container mx-auto flex max-w-[300px] flex-col items-center justify-center py-14">
                        <nav className="header-menu mb-5">
                            <ul>
                                <li className={'mb-2 text-center'}>
                                    <a
                                        href="/shop"
                                        className={'text text-[20px]'}
                                    >
                                        <span>Shop</span>
                                    </a>
                                </li>
                                <li className={'mb-2 text-center'}>
                                    <a
                                        href="/plan-my-kitchen"
                                        className={'text text-[20px]'}
                                    >
                                        <span>Plan my kitchen</span>
                                    </a>
                                </li>

                                <li className={'mb-2 text-center'}>
                                    <a
                                        href="/about-us"
                                        className={'text text-[20px]'}
                                    >
                                        <span>About us</span>
                                    </a>
                                </li>
                                <li className={'mb-2 text-center'}>
                                    <a
                                        href="/gallery"
                                        className={'text text-[20px]'}
                                    >
                                        <span>Gallery</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex justify-center">
                            <a
                                className="mx-3 inline-block"
                                href="https://facebook.com"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                className="mx-3 inline-block"
                                href="https://twitter.com"
                            >
                                <TwitterIcon />
                            </a>
                            <a
                                className="mx-3 inline-block"
                                href="https://instagram.com"
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
