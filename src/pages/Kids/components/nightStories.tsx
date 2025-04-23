import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";
import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import useScreenItems from "../../../context/useScreenItems";
import { KidsContent } from "../../../types/kids";
import KidsCard from "./KidsCard";
import Image from "../../../components/ImageComponent/Image";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

const nightStories = ({
  items,
  category,
}: {
  items: KidsContent[];
  category?: string;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const itemCount = useScreenItems();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slides = items.map((item) => ({
    id: item.id,
    content: <KidsCard key={item.id} item={item} />,
  }));
  return (
    <div className="relative mb-2 w-full">
      <h2 className="text-white text-2xl font-bold mb-2">{category}</h2>
      <CustomSwiper
        modules={[Navigation]}
        slidesPerView={itemCount}
        slides={slides}
        watchOverflow={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          prevEl: `.slider-prev`,
          nextEl: `.slider-next`,
          enabled: true,
        }}
        allowTouchMove={true}
        grabCursor={true}
      />

      <div className="absolute top-[10%] left-0 w-full h-full pointer-events-none z-10">
        <Button
          ButtonElement="button"
          className={`slider-prev absolute -left-3 top-1/3 translate-y-1/3 w-12 h-12 rounded-full bg-white/40 flex items-center justify-center cursor-pointer transition-all duration-300 pointer-events-auto z-20 border-none hover:bg-white/70 hover:scale-110 ${
            isBeginning ? "opacity-10 cursor-not-allowed" : ""
          }`}
          aria-label="Previous slide"
          disabled={isBeginning}
        >
          <Image src={assets.angleLeft} alt="Previous" />
        </Button>
        <Button
          ButtonElement="button"
          className={`slider-next absolute top-1/3 translate-y-1/3 -right-3 w-12 h-12 rounded-full bg-white/40 flex items-center justify-center cursor-pointer transition-all duration-300 pointer-events-auto z-20 border-none hover:bg-white/70 hover:scale-110 ${
            isEnd ? "opacity-10 cursor-not-allowed" : ""
          }`}
          aria-label="Next slide"
          disabled={isEnd}
        >
          <Image src={assets.angleRight} alt="Next" />
        </Button>
      </div>
    </div>
  );
};

export default nightStories;
