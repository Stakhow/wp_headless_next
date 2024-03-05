import { Slider } from '../Slider';
import { Button } from '../Button';

export const Testimonials = () => {
    const FaqBtn = () => (
        <Button className={'mx-auto mt-7'}>
            <span className={'hidden md:inline'}>
                Frequently Asked Questions
            </span>
            <span className={'inline md:hidden'}>FAQ</span>
        </Button>
    );

    return (
        <div className="bg-light">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center md:min-h-[600px]">
                    <Slider
                        showDots={false}
                        slides={[
                            {
                                component: (
                                    <div className="post mx-auto max-w-[600px] py-5 text-center md:py-10">
                                        <p>
                                            <strong>
                                                What Our Customers Say
                                            </strong>
                                        </p>
                                        <h3>
                                            Over 35 years experience designing
                                            handmade kitchens
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Morbi
                                            eget est sit amet sapien venenatis
                                            maximus vel in urna. Nam mauris
                                            arcu, feugiat in finibus vitae,
                                            sollicitudin id purus. Ut imperdiet,
                                            magna eu pharetra tincidunt, mauris
                                            purus ultrices.
                                        </p>

                                        <FaqBtn />
                                    </div>
                                ),
                            },
                            {
                                component: (
                                    <div className="post mx-auto max-w-[600px] py-5 text-center md:py-10">
                                        <p>
                                            <strong>
                                                What Our Customers Say
                                            </strong>
                                        </p>
                                        <h3>
                                            Over 35 years experience designing
                                            handmade kitchens
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Morbi
                                            eget est sit amet sapien venenatis
                                            maximus vel in urna. Nam mauris
                                            arcu, feugiat in finibus vitae,
                                            sollicitudin id purus. Ut imperdiet,
                                            magna eu pharetra tincidunt, mauris
                                            purus ultrices.
                                        </p>

                                        <FaqBtn />
                                    </div>
                                ),
                            },
                            {
                                component: (
                                    <div className="post mx-auto max-w-[600px] py-5 text-center md:py-10">
                                        <p>
                                            <strong>Lorem ipsum.</strong>
                                        </p>
                                        <h3>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Eaque
                                            labore, perspiciatis.
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Aperiam, hic!
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Atque
                                            cupiditate deleniti enim eos
                                            explicabo impedit laboriosam
                                            perspiciatis velit voluptatum.
                                            Adipisci aspernatur consequuntur
                                            dolores veritatis vero. Dolorum
                                            eveniet maxime modi voluptate.
                                        </p>

                                        <FaqBtn />
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
