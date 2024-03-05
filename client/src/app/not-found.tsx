import { Button } from '../components/Button/index';
import { Header } from '../components/Header/index';

const NotFound = () => {
    return (
        <div className={'flex min-h-screen flex-col justify-between'}>
            <Header />

            <main
                className="flex w-full flex-grow items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/img/banner.jpg")',
                }}
            >
                <div className="container mx-auto h-full px-4">
                    <div className="banner-text mx-auto max-w-[720px] text-center text-white">
                        <h1>Page not found</h1>
                        <a href="/">
                            <Button
                                className={
                                    'mx-auto mt-5 h-[60px] w-[228px] text-[15px]'
                                }
                            >
                                <span>Go Home</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
