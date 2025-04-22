import "../../../style/Home/section-user.css";
import UserFeedbackCard from "../components/UserFeedback/UserFeedbackCard";
import { useSectionsSelector } from "../../../context";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "../../../components/ImageComponent/Image";
import { assets } from "../../../assets/assets";
import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import type { UserFeedback } from "../../../types/mockdata";
import "swiper/css";
import "swiper/css/navigation";

const UserNav = () => {
  const userFeedbackSection = useSectionsSelector(
    (context) => context.state.userFeedbackSection
  );

  const { title, userFeedbacks } = userFeedbackSection;
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-user-nav">
      <div className="section-user-dev">
        <div className="section-user-text">
          <div>
            <span className="text-base md:text-2xl">{title}</span>
          </div>
          <div className="move-button">
            <button
              className="nav-prev w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Previous slide"
            >
              <Image src={assets.angleLeft} alt="Previous" />
            </button>
            <button
              className="nav-next w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Next slide"
            >
              <Image src={assets.angleRight} alt="Next" />
            </button>
          </div>
        </div>
        <div className="section-user-card-container">
          <CustomSwiper
            slides={userFeedbacks.map((feedback: UserFeedback) => ({
              id: feedback.id,
              content: <UserFeedbackCard feedback={feedback} />
            }))}
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView="auto"
            watchSlidesProgress={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: '.section-user-nav .nav-prev',
              nextEl: '.section-user-nav .nav-next',
              disabledClass: 'opacity-30 cursor-not-allowed',
              enabled: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="section-user-card-list"
          />
        </div>
      </div>
    </section>
  );
};

export default UserNav;
