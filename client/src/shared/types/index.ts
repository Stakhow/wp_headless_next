export type TMenus = {
    name: string;
    slug: string;
    count: number;
    ID: number;
};

export type TMenu = {
    name: string;
    slug: string;
    count: number;
    ID: number;
    items: TMenuItem[];
};

export type TMenuItem = {
    id: number;
    title: string;
    url: string;
};

export type TTestimonials = {
    id: number;
    content: {
        rendered: string;
    };
}[];
