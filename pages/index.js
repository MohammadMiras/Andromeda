import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

export default function Home() {
  const heroSlide = [1, 2, 3, 4, 5, 6]
  return <>
    <div className="w-full pt-5 pb-5 bg-Template-color2">
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}

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
                  <div className=" absolute w-8 h-12 bg-Template-color3 rounded-xl left-2 bottom-2 text-center opacity-60 py-2">
                    <p className="text-xs font-black">IMB</p>
                    <p className="text-sm font-medium text-slate-700">2</p>
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
