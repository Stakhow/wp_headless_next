'use client';

import { Button } from '../Button/index';
import {useEffect, useState} from 'react';
import {getGallery} from "../../api/index";
import {kMaxLength} from "buffer";

export const Gallery = ({
    items,
    props,
}: {
    items: { src: string }[];
    props?: React.HTMLAttributes<any>;
}) => {
    const [_items, _setItems] = useState(items);

    const loadMore = async () => {
        const arr = [..._items, { src: '/img/gallery-2.png' }];

        const res = await getGallery();
        console.log('res', res);
    };

    useEffect(() => {
    }, []);

    return (
        <div className="gallery" {...props}>
            <div className="gallery-container mx-auto mb-10 flex justify-center 2col:max-w-[640px] 3col:max-w-[970px] 4col:max-w-[1300px]">
                <div
                    className={
                        'mx-[-10px] flex flex-wrap justify-center 2col:justify-start'
                    }
                >
                    {_items.map((i, idx) => (
                        <a
                            href=""
                            key={idx}
                            className={
                                'm-2.5 block w-[310px] transition hover:scale-105'
                            }
                        >
                            <img src={i.src} alt="" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <Button className={'mx-auto'} onClick={loadMore}>
                    View More
                </Button>
            </div>
        </div>
    );
};
