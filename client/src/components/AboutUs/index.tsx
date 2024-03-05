import { Button } from '../Button/index';

export const AboutUs = () => {
    return (
        <div
            className={
                'about-us z=[-1] relative flex min-h-[500px] flex-row items-center justify-end xl:min-h-[667px]'
            }
        >
            <div
                className="absolute inset-0 w-full self-stretch bg-cover bg-center bg-no-repeat md:static md:w-1/2"
                style={{ backgroundImage: ' url(/img/Bitmap2.png)' }}
            ></div>

            <div
                className={`
            post w-full 
            py-3 pl-3 
            pr-3 sm:w-2/3 
            md:w-1/2 md:py-8 md:pl-[30px]
            md:pr-[calc((100vw-768px)/2)] lg:pl-[50px] lg:pr-[calc((100vw-1024px)/2)] xl:pr-[calc((100vw-1200px)/2)]`}
            >
                <div className="p-5 shadow-lg backdrop-blur-md md:p-0 md:shadow-none">
                    <p>
                        <strong>
                            Quality Craftmanship from build to delivery
                        </strong>
                    </p>
                    <h2>Discover the beauty of a handmade kitchen</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi eget est sit amet sapien venenatis maximus vel in
                        urna. Nam mauris arcu, feugiat in finibus vitae,
                        sollicitudin id purus. Ut imperdiet, magna eu pharetra
                        tincidunt, mauris purus ultrices.
                    </p>

                    <Button className={'mx-auto mt-7 block md:mx-0'}>
                        <span>About Us</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
