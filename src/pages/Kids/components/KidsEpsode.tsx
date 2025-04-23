import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import "./KidsEpsode.css";
import Button from "../../../components/Button/Button";
import { assets } from "../../../assets/assets";
import Image from "../../../components/ImageComponent/Image";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { KidsEspode } from "../../../types/kids";

const KidsEpsode = ({
  items,
}: {
  items: KidsEspode[];
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = items.map((item) => ({
    id: item.id,
    content: (
      <div
        className="kids-episode-card"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1)), url(${item.backgroundImage})`,
        }}
      >
        <div className="h-full w-4/6 p-4 flex gap-4">
          <Link to={`/kids/episode/${item.id}`} className="w-1/4">
            <Image src={item.posterUrl} alt="Tom Jerry" />
          </Link>
          <div className="w-1/2 flex flex-col items-start justify-center">
            <h3 className="text-white text-2xl font-bold">{item.title}</h3>
            <div className="flex gap-2">
              <span className="text-white text-sm font-bold">
                {typeof item.category === "string"
                  ? item.category
                  : item.category.join(" | ")}
              </span>
            </div>
            <span className="text-white text-sm font-bold">
              {item.ageRestriction} . {item.country} . {item.minutes} minutes .
              {item.hd ? "HD" : "SD"}
            </span>
            <Button
              ButtonElement="button"
              className="bg-white text-black flex flex-row mt-7 justify-center items-center gap-2 p-2 rounded-md"
            >
              <Image src={assets.info} alt="info" />
              More Information
            </Button>
          </div>
        </div>
        <Button
          ButtonElement="button"
          className="slider-control prev"
          aria-label="Previous slide"
        >
          <Image src={assets.angleLeft} alt="Previous" />
        </Button>

        <Button
          ButtonElement="button"
          className="slider-control next"
          aria-label="Next slide"
        >
          <Image src={assets.angleRight} alt="Next" />
        </Button>
      </div>
    ),
  }));

  return (
    <div className="kids-episode">
      <CustomSwiper
        className="kids-episode-swiper"
        slidesPerView={1}
        speed={800}
        autoplay={false}
        loop={false}
        slides={slides}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        navigation={{
          enabled: true,
          nextEl: ".slider-control.next",
          prevEl: ".slider-control.prev",
        }}
      />
    </div>
  );
};

export default KidsEpsode;
