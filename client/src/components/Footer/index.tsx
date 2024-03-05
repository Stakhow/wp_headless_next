import { Logo } from '../Logo/index';
import { FaceBookFilledIcon } from '../Icons/FacebookFilledIcon/index';
import { TwitterFilledIcon } from '../Icons/InstagramFilledIcon/index';
import { InstagramFilledIcon } from '../Icons/TwitterFilledIcon/index';

export const Footer = () => {
    return (
        <footer
            className={'w-full bg-black bg-cover bg-center bg-no-repeat py-10'}
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 100%), url("/img/banner.jpg")',
            }}
        >
            <div className="container">
                <div className="mb-10 flex items-center justify-center">
                    <div className="flex-grow border-b opacity-30"></div>
                    <Logo className={'mx-5'} />
                    <div className="flex-grow border-b opacity-30"></div>
                </div>
            </div>

            <div className="container max-w-full md:max-w-[600px] lg:max-w-[900px]">
                <div className="mb-10 grid grid-cols-1 gap-3 text-center text-white md:grid-cols-2 md:text-left lg:grid-cols-4">
                    <div className="mb-3 md:mb-0">
                        <h4 className={'mb-8 text-white'}>About</h4>
                        <ul className={'text'}>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Shop
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Plan My Kitchen
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    About Us
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h4 className={'mb-8 text-white'}>Service</h4>
                        <ul className={'text'}>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Faq
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Contact
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    How to buy
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Downloads
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h4 className={'mb-8 text-white'}>Info</h4>
                        <ul className={'text'}>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Delivery
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Terms
                                </a>
                            </li>
                            <li className={'mb-2'}>
                                <a href="" className={'menu-link opacity-80'}>
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h4 className={'mb-8 text-white'}>Follow</h4>

                        <a
                            className="mr-5 inline-block"
                            href="https://facebook.com"
                        >
                            <FaceBookFilledIcon />
                        </a>
                        <a
                            className="mr-5 inline-block"
                            href="https://twitter.com"
                        >
                            <TwitterFilledIcon />
                        </a>
                        <a
                            className="mr-5 inline-block"
                            href="https://instagram.com"
                        >
                            <InstagramFilledIcon />
                        </a>
                    </div>
                </div>

                <div className="copyrights text-center">
                    <p className={'text-[12px] md:text-sm'}>
                        Copyright Online MTC Home Kitchens 2018 - All rights
                        reserved.
                    </p>
                    <p className={'text-[12px] md:text-sm'}>
                        Responsive website design, Development & Hosting by mtc.
                    </p>
                </div>
            </div>
        </footer>
    );
};
