import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
    return (
        <div className='relative mb-6'>
            <div className='absolute w-full h-20 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 '/>
            <Carousel
                className=''
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading='lazy' src="/images/banner4.gif" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="/images/banner5.gif" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="/images/banner4.gif" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="/images/banner4.gif" alt="" />
                </div>
            </Carousel>
            
        </div>
    )
}

export default Banner
