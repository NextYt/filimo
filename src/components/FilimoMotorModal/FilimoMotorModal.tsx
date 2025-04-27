import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { useFilimoMotor } from "../../context";
import Button from "../Button/Button";
import CustomSwiper from "../CustomSwiper/CustomSwiper";
import Asset from "../ImageComponent/Image";
import { Swiper as SwiperType } from "swiper";

const FilimoMotorModal = () => {
  const { state, dispatch } = useFilimoMotor();
  const { shorts, currentShortId } = state;

  // Set initial active index based on currentShortId
  const initialIndex =
    shorts.findIndex((short) => short.id === currentShortId) || 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const swiperRef = useRef<SwiperType | null>(null);


    // Handle closing the modal with ESC key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          dispatch({ type: "CLOSE_MOTOR" });
        }
      };
  
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }, [dispatch]);

  // Handle slide change: update both activeIndex and currentShortId
  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
    const activeShortId = shorts[newIndex]?.id;
    if (activeShortId) {
      dispatch({ type: "SET_CURRENT_SHORT", payload: activeShortId });
    }
  };

  if (!state.isMotorOpen) return null;

  const swiperSlides = shorts.map((short, idOfCenterCart) => ({
    id: short.id,
    content: (
      <div
        key={short.id}
        className={`w-64 rounded-md h-[400px] relative transition-all duration-300 ease-in-out ${
          idOfCenterCart === activeIndex ? "scale-[1.7] h-[500px]" : ""
        }`}
        style={{
          backgroundImage: `url(${short.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Asset
          src={short.image}
          alt={short.title}
          className="w-full h-full object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button className="rounded-full bg-white/30 p-3 hover:bg-white/50 transition-colors">
            <Asset src={assets.iconPlay} alt="Play" className="w-10 h-10" />
          </Button>
        </div>
        {/* Title and episode info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-white text-xs">
              Episode {short.id}: {short.title}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button className="bg-white text-xs text-black font-bold px-4 py-1 rounded-full">
              Watch
            </Button>
            <Button className="bg-transparent border border-white rounded-full p-2">
              <Asset
                src={assets.share}
                alt="Share"
                className="w-4 h-4 text-white"
              />
            </Button>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="header-filimotor w-full min-h-screen overflow-hidden absolute top-0 left-0 bg-black">
      {/* header */}
      <div className="flex flex-row justify-between items-center p-4">
        <Asset src={assets.logo} alt="filimo" className="w-40 h-16" />
        <Button
          className="bg-white/20 rounded-full p-4"
          onClick={() => dispatch({ type: "CLOSE_MOTOR" })}
        >
          <Asset
            src={assets.times}
            alt="filimo"
            className="text-white w-5 h-5"
            onClick={() => dispatch({ type: "CLOSE_MOTOR" })}
          />
        </Button>
      </div>

      {/* swiper */}
      <div className="w-full h-[calc(100vh-100px)] flex flex-row justify-center items-center">
        <CustomSwiper
          className="w-full h-full py-[10%]"
          slides={swiperSlides}
          initialSlide={initialIndex}
          slidesPerView={4}
          centeredSlides={true}
          navigation={{
            prevEl: ".filimo-motor-prev",
            nextEl: ".filimo-motor-next",
            enabled: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          allowTouchMove={true}
          onSlideChange={handleSlideChange}
        />
      </div>

      {/* footer */}
      <div className="bottom-10 z-50 absolute w-full flex flex-row justify-start gap-2 items-center p-4">
        <Button
          ButtonElement="button"
          className="bg-white/20 cursor-pointer rounded-full p-4 filimo-motor-prev"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Asset
            src={assets.angleLeft}
            alt="filimo"
            className="text-white w-5 h-5"
          />
        </Button>
        <Button
          ButtonElement="button"
          className="bg-white/20 cursor-pointer rounded-full p-4 filimo-motor-next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Asset
            src={assets.angleRight}
            alt="filimo"
            className="text-white w-5 h-5"
          />
        </Button>
      </div>
    </div>
  );
};

export default FilimoMotorModal;
