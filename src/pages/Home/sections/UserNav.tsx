import "../../../style/Home/section-user.css";
import UserFeedbackCard from "../components/UserFeedback/UserFeedbackCard";
import { useSectionsSelector } from "../../../context";
import { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "../../../components/ImageComponent/Image";
import { assets } from "../../../assets/assets";
import "swiper/css";
import "swiper/css/navigation";

const UserNav = () => {
  // Using our sections context instead of direct import
  const userFeedbackSection = useSectionsSelector(
    (context) => context.state.userFeedbackSection
  );

  const { title, userFeedbacks } = userFeedbackSection;

  // Reference to the swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  // Track custom navigation states
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Update navigation state
  const updateNavigationState = useCallback(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  // Handle manual navigation
  const handlePrev = useCallback(() => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
      updateNavigationState();
    }
  }, [isBeginning, updateNavigationState]);

  const handleNext = useCallback(() => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
      updateNavigationState();
    }
  }, [isEnd, updateNavigationState]);

  return (
    <section className="section-user-nav">
      <div className="section-user-dev">
        <div className="section-user-text">
          <div>
            <span className="text-base md:text-2xl">{title}</span>
          </div>
          <div className="move-button">
            <div
              onClick={handlePrev}
              className={`w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer ${
                isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <Image src={assets.angleLeft} alt="Previous" />
            </div>
            <div
              onClick={handleNext}
              className={`w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer ${
                isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <Image src={assets.angleRight} alt="Next" />
            </div>
          </div>
        </div>
        <div className="section-user-card-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={"auto"}
            watchSlidesProgress={true}
            onInit={(swiper) => {
              swiperRef.current = swiper;
              updateNavigationState();
            }}
            onSlideChange={() => {
              updateNavigationState();
            }}
            onResize={() => {
              setTimeout(updateNavigationState, 100);
            }}
            onAfterInit={() => {
              setTimeout(updateNavigationState, 100);
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
          >
            {userFeedbacks.map((feedback, index) => (
              <SwiperSlide key={`feedback-${feedback.id}-${index}`}>
                <UserFeedbackCard feedback={feedback} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UserNav;
