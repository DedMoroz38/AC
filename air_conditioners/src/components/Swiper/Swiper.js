import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Styles from "./Swiper.module.scss";
import { Pagination, Navigation } from "swiper";

const SwipingMenu = () => {
  const attachmentsArray = [1, 2, 3, 4];

  return (
    <div className={Styles.swiper_box}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {attachmentsArray.map((slide, index) => (
          <SwiperSlide>
            <div key={index} className={Styles.slide}>
              Slide {index}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipingMenu;
