import { Logo } from '../Logo/index';
import { TMenu } from '../../shared/types/index';
import { SocialMedia } from '../SocialMedia/index';
import { getMenu } from '../../api/index';

export const Footer = async () => {
    const menuAbout = await getMenu('7');
    const menuService = await getMenu('6');

    const Menu = ({ menu }: { menu: TMenu }) => {
        const MenuItems = menu.items.map(({ url, title, id }) => (
            <li key={`menu-item-${id}`} className={'mb-2'}>
                <a href={url} className={'menu-link opacity-80'}>
                    {title}
                </a>
            </li>
        ));

        return !!menu.items.length ? (
            <ul className={'text'}>{MenuItems}</ul>
        ) : (
            ''
        );
    };

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
                        <Menu menu={menuAbout} />
                    </div>

                    <div className="mb-3 md:mb-0">
                        <h4 className={'mb-8 text-white'}>Service</h4>
                        <Menu menu={menuService} />
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

                        <SocialMedia variant={'footer'} />
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
