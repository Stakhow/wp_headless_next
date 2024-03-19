import { ButtonOutline } from '../ButtonOutline';
import { Logo } from '../Logo';
import { MenuMobile } from '../MenuMobile';
import { TMenu } from '../../shared/types/index';
import { SocialMedia } from '../SocialMedia/index';
import { getMenu } from '../../api/index';

export const Header = async () => {
    const menu1 = await getMenu('4');
    const menu2 = await getMenu('5');

    const Menu = ({ menu }: { menu: TMenu }) => {
        const MenuItems = menu.items.map(({ url, title, id }) => (
            <li key={`menu-item-${id}`} className={'mx-3 text-center'}>
                <a href={url} className={'menu-link'}>
                    <span>{title}</span>
                </a>
            </li>
        ));

        return !!menu.items.length ? (
            <nav className="header-menu hidden lg:flex">
                <ul className="flex">{MenuItems}</ul>
            </nav>
        ) : (
            ''
        );
    };

    return (
        <header
            className={
                'absolute left-0 right-0 top-0 z-10 w-full pt-3 text-light md:min-h-[111px] md:pt-[30px]'
            }
        >
            <div className="container mx-auto divide-y px-4">
                <div className="mb-3 flex items-center justify-between md:mb-[30px]">
                    <MenuMobile menu={[...menu1.items, ...menu2.items]} />

                    <SocialMedia variant={'header'} />

                    <Menu menu={menu1} />

                    <Logo className={'mx-3'} />

                    <Menu menu={menu2} />

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
