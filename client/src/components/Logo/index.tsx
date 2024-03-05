import { HTMLAttributes } from 'react';

export const Logo = (props: HTMLAttributes<any>) => {
    return (
        <div className="logo" {...props}>
            <a href="/">
                <img src="./img/logo.svg" alt="logo" />
            </a>
        </div>
    );
};
