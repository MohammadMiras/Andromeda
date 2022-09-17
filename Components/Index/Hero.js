import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper';

const Hero = () => {

    const heroSlide = [1, 2, 3, 4, 5, 6]

    return <>
        <div className="w-full pt-5 pb-5 bg-Template-color2">
            <Swiper
                effect={"coverflow"}
                slidesPerView={3}
                grabCursor={true}
                centeredSlides={false}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    heroSlide?.map(item => <>
                        <SwiperSlide>
                            <div className="w-44 h-44 relative m-auto overflow-hidden rounded-sm shadow-2xl">
                                <Image src={`/images/${item}.jpg`} layout="fill" className="object-cover" />
                            </div>
                        </SwiperSlide>

                    </>)
                }

            </Swiper>
        </div>
    </>
}

export default Hero

