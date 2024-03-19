'use client';

import { useEffect, useState } from 'react';
import { SocialMedia } from '../SocialMedia/index';
import { TMenuItem } from '../../shared/types/index';

export const MenuMobile = ({ menu }: { menu: TMenuItem[] }) => {
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

    const Menu = ({ menu }: { menu: TMenuItem[] }) => {
        const MenuItems = menu.map(({ url, title, id }) => (
            <li key={`menu-item-${id}`} className={'mb-2 text-center'}>
                <a href={url} className={'text text-[20px]'}>
                    <span>{title}</span>
                </a>
            </li>
        ));

        return !!menu.length ? (
            <nav className="header-menu mb-5">
                <ul>{MenuItems}</ul>
            </nav>
        ) : (
            ''
        );
    };

    return (
        <div className={'test-lg block lg:hidden'}>
            <MenuButton isActive={active} />

            {active && (
                <div className="menu-mobile d fixed inset-0 z-10 bg-black text-white">
                    <div className="container mx-auto flex max-w-[300px] flex-col items-center justify-center py-14">
                        <Menu menu={menu} />

                        <SocialMedia variant={'mobile'} />
                    </div>
                </div>
            )}
        </div>
    );
};
