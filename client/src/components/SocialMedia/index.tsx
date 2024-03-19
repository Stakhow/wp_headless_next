import { FacebookIcon } from '../Icons/FacebookIcon/index';
import { TwitterIcon } from '../Icons/TwitterIcon/index';
import { InstagramIcon } from '../Icons/InstagramIcon/index';
import { FaceBookFilledIcon } from '../Icons/FacebookFilledIcon/index';
import { TwitterFilledIcon } from '../Icons/InstagramFilledIcon/index';
import { InstagramFilledIcon } from '../Icons/TwitterFilledIcon/index';

export const SocialMedia = ({
    variant,
}: {
    variant: 'header' | 'mobile' | 'footer';
}) => {
    const variants = {
        header: (
            <div className="hidden lg:flex">
                <a
                    className="group mr-5 inline-block hover:text-highlight"
                    href="https://facebook.com"
                >
                    <FacebookIcon />
                </a>
                <a
                    className="group mr-5 inline-block hover:text-highlight"
                    href="https://twitter.com"
                >
                    <TwitterIcon />
                </a>
                <a
                    className="group mr-5 inline-block hover:text-highlight"
                    href="https://instagram.com"
                >
                    <InstagramIcon />
                </a>
            </div>
        ),
        mobile: (
            <div className="flex justify-center">
                <a className="mx-3 inline-block" href="https://facebook.com">
                    <FacebookIcon />
                </a>
                <a className="mx-3 inline-block" href="https://twitter.com">
                    <TwitterIcon />
                </a>
                <a className="mx-3 inline-block" href="https://instagram.com">
                    <InstagramIcon />
                </a>
            </div>
        ),
        footer: (
            <>
                <a
                    className="group mr-5 inline-block hover:text-highlight"
                    href="https://facebook.com"
                >
                    <FaceBookFilledIcon />
                </a>
                <a
                    className="group mr-5 inline-block hover:text-highlight"
                    href="https://twitter.com"
                >
                    <TwitterFilledIcon />
                </a>
                <a
                    className="group mr-5 inline-block hover:text-highlight"
                    href="https://instagram.com"
                >
                    <InstagramFilledIcon />
                </a>
            </>
        ),
    };

    return variant ? variants[variant] : variant['header'];
};
