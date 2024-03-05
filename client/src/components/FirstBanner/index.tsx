import { Button } from '../Button';
import { Slider } from '../Slider';

export const FirstBanner = () => {
    const OrderNowBtn = ({ onClick }: { onClick?: () => void }) => {
        return (
            <Button
                onClick={onClick}
                className={'mx-auto mt-5 w-auto md:w-[228px]'}
            >
                <span>Order Now</span>
            </Button>
        );
    };

    return (
        <>
            <div
                className="banner flex h-full min-h-screen w-full flex-grow items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/img/banner.jpg")',
                }}
            >
                <Slider
                    changeStyle={'fade'}
                    showButtons={false}
                    className={'flex h-screen flex-grow items-center pb-10'}
                    slides={[
                        {
                            component: (
                                <div>
                                    <div className="container h-full">
                                        <div className="banner-text mx-auto max-w-[720px] text-center text-white">
                                            <p>
                                                Design and order your new
                                                kitchen online today
                                            </p>
                                            <h1>
                                                Bespoke & made to measure
                                                handmade kitchen design
                                            </h1>
                                            <OrderNowBtn />
                                        </div>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            component: (
                                <div>
                                    <div className="container h-full">
                                        <div className="banner-text mx-auto max-w-[720px] text-center text-white">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Animi eligendi expedita incidunt
                                                minima nam possimus quaerat,
                                                vero! Alias, labore, quasi.
                                            </p>
                                            <h1>Lorem ipsum dolor sit amet.</h1>
                                            <OrderNowBtn />
                                        </div>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            component: (
                                <div>
                                    <div className="container h-full">
                                        <div className="banner-text mx-auto max-w-[720px] text-center text-white">
                                            <p>Lorem ipsum dolor sit amet.</p>
                                            <h1>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Dolorum, incidunt!
                                            </h1>
                                            <OrderNowBtn />
                                        </div>
                                    </div>
                                </div>
                            ),
                        },
                    ]}
                />
            </div>

            <div className="border opacity-80"></div>
        </>
    );
};
