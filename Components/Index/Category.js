import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Categoy = () => {

    const items = [1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 15]

    return <>
        <div className="flex px-3 py-4 items-center">
            <div className="w-full flex overflow-hidden">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={4}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 4,
                        },
                        768: {
                            slidesPerView: 8,
                            spaceBetween:4,
                        },
                        1024: {
                            slidesPerView: 10,
                            spaceBetween: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        items?.map(item => <>
                            <SwiperSlide>
                                <div className="px-4 py-2 text-center  border-2  border-Template-color3 rounded-lg text-white hover:bg-Template-color3 hover:text-black">
                                    دسته بندی
                                </div>
                            </SwiperSlide>
                        </>
                        )
                    }
                </Swiper>
            </div>
        </div>
    </>
}

export default Categoy