import axios, { AxiosResponse } from 'axios';
import { urls, isDevMode } from '../constants/index';
import { TMenu, TTestimonials } from '../shared/types/index';
import { GalleryItem, RootQuery } from '../gql/graphql';

const clientInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ADMIN_HOST,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

export type TGallery = {
    data: RootQuery;
};

export type TGalleryResponse = {
    lastItemId: string;
    hasNextPage: boolean;
    data: { src: string; id: string; title: string }[] | [];
};

export const getGallery = async (
    lastItemId: string
): Promise<TGalleryResponse | undefined> => {
    try {
        const response = await clientInstance.post<
            TGallery,
            AxiosResponse<TGallery>
        >(urls.graphql, {
            query: `query GalleryQuery {
          gallery(first: 4, after: "${lastItemId}") {
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
            }
            nodes {
              id
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
            }
          }
        }`,
        });

        const _galery = response.data.data.gallery;

        const data = _galery
            ? _galery.nodes.map((i: GalleryItem) => ({
                  src:
                      i.featuredImage && i.featuredImage.node.sourceUrl
                          ? i.featuredImage.node.sourceUrl
                          : '',
                  title: i.title ? i.title : '',
                  id: i.id ? i.id : '',
              }))
            : [];

        return {
            data: data,
            hasNextPage:
                _galery && _galery.pageInfo.hasNextPage
                    ? _galery.pageInfo.hasNextPage
                    : false,
            lastItemId:
                _galery && _galery.pageInfo.endCursor
                    ? _galery.pageInfo.endCursor
                    : '',
        };
    } catch (e) {
        console.log(e);
    }
};

const serverInstance = axios.create({
    baseURL: process.env.ADMIN_HOST,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

if (0) {
    serverInstance.interceptors.request.use((request) => {
        console.log('Starting Request', request);
        return request;
    });

    serverInstance.interceptors.response.use((response) => {
        console.log('Response:', response);
        return response;
    });
}

export const getMenu = (param: string): Promise<TMenu> =>
    serverInstance.get(`${urls.menus}/${param}`).then((i) => i.data);

export const getTestimonials = (): Promise<TTestimonials> =>
    serverInstance.get(urls.testimonials).then((i) => i.data);
