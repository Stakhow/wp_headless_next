import { Slider } from '../Slider';
import { Button } from '../Button';
import { getTestimonials } from '../../api/index';

export const Testimonials = async () => {
    const testimonials = await getTestimonials();

    const FaqBtn = () => (
        <Button className={'mx-auto mt-7'}>
            <span className={'hidden md:inline'}>
                Frequently Asked Questions
            </span>
            <span className={'inline md:hidden'}>FAQ</span>
        </Button>
    );

    const slides = testimonials.map((i) => ({
        component: (
            <div className="post mx-auto max-w-[600px] py-5 text-center md:py-10">
                <div
                    dangerouslySetInnerHTML={{ __html: i.content.rendered }}
                ></div>
                <FaqBtn />
            </div>
        ),
    }));

    return (
        <div className="bg-light">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center md:min-h-[600px]">
                    <Slider showDots={false} slides={slides} />
                </div>
            </div>
        </div>
    );
};
