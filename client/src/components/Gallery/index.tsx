'use client';

import { Button } from '../Button/index';
import { useEffect, useState } from 'react';
import { getGallery, TGalleryResponse } from '../../api/index';
import { Spinner } from '../Spinner/index';

export const Gallery = () => {
    const [items, setItems] = useState<TGalleryResponse['data']>([]);
    const [lastItemId, setLastItemId] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadImages = async () => {
        setIsLoading(true);

        const gallery = await getGallery(lastItemId);

        if (!!gallery) {
            setItems([...items, ...gallery.data]);
            setLastItemId(gallery.hasNextPage ? gallery.lastItemId : '');
        }

        setIsLoading(false);
    };

    useEffect(() => {
        loadImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="gallery">
            <div className="gallery-container mx-auto mb-10 flex justify-center 2col:max-w-[640px] 3col:max-w-[970px] 4col:max-w-[1300px]">
                <div
                    className={
                        'mx-[-10px] flex flex-wrap justify-center 2col:justify-start'
                    }
                >
                    {items.map(({ src, id, title }, idx) => (
                        <a
                            href=""
                            key={idx}
                            className={
                                'm-2.5 block h-[310px] w-[310px] transition hover:scale-105'
                            }
                        >
                            <img
                                src={src}
                                alt={title}
                                className={'h-full w-full object-cover'}
                            />
                        </a>
                    ))}
                </div>
            </div>

            {isLoading ? (
                <Spinner />
            ) : lastItemId ? (
                <div className="text-center">
                    <Button className={'mx-auto'} onClick={loadImages}>
                        View More
                    </Button>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};
