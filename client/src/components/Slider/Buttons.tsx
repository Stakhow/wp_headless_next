import { ButtonHTMLAttributes } from 'react';

export const ButtonLeft = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className={
            'h-[50px] w-[50px] transition hover:opacity-80 md:h-[70px] md:w-[70px]'
        }
        {...props}
    >
        <svg
            className={'max-h-full max-w-full'}
            xmlns="http://www.w3.org/2000/svg"
            width="70.711"
            height="70.711"
            viewBox="0 0 70.711 70.711"
        >
            <path
                className={'fill-highlight'}
                data-name="Combined Shape"
                d="M0,49V1A1,1,0,0,1,1,0H49a1,1,0,1,1,0,2H2V49a1,1,0,1,1-2,0Z"
                transform="translate(0 35.356) rotate(-45)"
            />
        </svg>
    </button>
);

export const ButtonRight = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className={
            'h-[50px] w-[50px] transition hover:opacity-80 md:h-[70px] md:w-[70px]'
        }
        {...props}
    >
        <svg
            className={'max-h-full max-w-full'}
            xmlns="http://www.w3.org/2000/svg"
            width="70.711"
            height="70.711"
            viewBox="0 0 70.711 70.711"
        >
            <path
                className={'fill-highlight'}
                data-name="Combined Shape"
                d="M0,49V1A1,1,0,0,0-1,0H-49a1,1,0,0,0-1,1,1,1,0,0,0,1,1H-2V49a1,1,0,0,0,1,1A1,1,0,0,0,0,49Z"
                transform="translate(70.711 35.356) rotate(45)"
            />
        </svg>
    </button>
);
