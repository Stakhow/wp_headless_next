import { FacebookIcon } from '../Icons/FacebookIcon/index';
import { TwitterIcon } from '../Icons/TwitterIcon/index';
import { InstagramIcon } from '../Icons/InstagramIcon/index';
import { ButtonOutline } from '../ButtonOutline/index';
import { Logo } from '../Logo/index';
import { MenuMobile } from '../MenuMobile/index';

export const Header = () => {
    return (
        <header
            className={
                'absolute left-0 right-0 top-0 z-10 w-full pt-3 text-light md:min-h-[111px] md:pt-[30px]'
            }
        >
            <div className="container mx-auto divide-y px-4">
                <div className="mb-3 flex items-center justify-between md:mb-[30px]">
                    <MenuMobile />

                    <div className="hidden lg:flex">
                        <a
                            className="mr-5 inline-block"
                            href="https://facebook.com"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            className="mr-5 inline-block"
                            href="https://twitter.com"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            className="mr-5 inline-block"
                            href="https://instagram.com"
                        >
                            <InstagramIcon />
                        </a>
                    </div>

                    <nav className="header-menu hidden lg:flex">
                        <ul className="flex">
                            <li className={'mx-3 text-center'}>
                                <a href="/shop" className={'menu-link'}>
                                    <span>Shop</span>
                                </a>
                            </li>
                            <li className={'mx-3 text-center'}>
                                <a
                                    href="/plan-my-kitchen"
                                    className={'menu-link'}
                                >
                                    <span>Plan my kitchen</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <Logo className={'mx-3'} />

                    <nav className="header-menu hidden lg:flex">
                        <ul className="flex">
                            <li className={'mx-3 text-center'}>
                                <a href="/about-us" className={'menu-link'}>
                                    <span>About us</span>
                                </a>
                            </li>
                            <li className={'mx-3 text-center'}>
                                <a href="/gallery" className={'menu-link'}>
                                    <span>Gallery</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="ml-2">
                        <ButtonOutline
                            className={
                                'h-[30px] rounded-[30px] px-4 leading-[30px] md:h-[50px] md:rounded-[50px] md:px-10 md:text-[13px] md:leading-[50px]'
                            }
                        >
                            <span className={'hidden align-middle md:inline'}>
                                My Order
                            </span>
                            <img
                                className={'inline-block md:ml-2'}
                                src="./icons/shopping-cart.png"
                                alt=""
                            />
                        </ButtonOutline>
                    </div>
                </div>

                <div className="border opacity-30"></div>
            </div>
        </header>
    );
};
