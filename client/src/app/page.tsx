import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FirstBanner } from '../components/FirstBanner';
import { AboutUs } from '../components/AboutUs';
import { Testimonials } from '../components/Testimonials';
import { Gallery } from '../components/Gallery';

export default function Home() {
    return (
        <div className={'flex min-h-screen flex-col justify-between'}>
            <Header />

            <main className="h-full w-full flex-grow">
                <FirstBanner />

                <AboutUs />

                <Testimonials />

                <div className={'py-10 md:py-20'}>
                    <div className={'container'}>
                        <h3 className={'mb-10 text-center'}>
                            Customer Gallery
                        </h3>

                        <Gallery
                            items={[
                                { src: '/img/gallery-1.png' },
                                { src: '/img/gallery-2.png' },
                                { src: '/img/gallery-3.png' },
                                { src: '/img/gallery-4.png' },
                            ]}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
