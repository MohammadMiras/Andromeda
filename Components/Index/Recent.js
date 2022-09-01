import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper';

const Recent = () => {

    const heroSlide = [1, 2, 3, 4, 5, 6]

    return <>
        <div className="w-full pt-5 pb-5 bg-Template-color2">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    heroSlide?.map(item => <>
                        <SwiperSlide>
                            <div className="h-44 w-25 overflow-hidden  shadow-lg">
                                <div className="h-full w-full relative">
                                    <Image src={`/images/${item}.jpg`} layout="fill" className="object-cover" />
                                    <div className=" absolute w-8 h-10 bg-Template-color3 rounded-xl left-2 bottom-2 bg-opacity-70 text-center py-2 ">
                                        <p className="text-[10px] font-bold">IMB</p>
                                        <p className="text-[10px]">10</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                    )
                }
            </Swiper>
        </div>
    </>
}

export default Recent