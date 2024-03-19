export const urls = {
    base: 'http://admin.mtc-home-kitchen.local',
    menus: '/wp-json/wp-api-menus/v2/menus',
    graphql: '/graphql',
    testimonials: 'wp-json/wp/v2/testimonials',
};

export const isDevMode = process.env.NODE_ENV !== 'production';
