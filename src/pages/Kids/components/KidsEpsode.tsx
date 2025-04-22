import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import "./KidsEpsode.css";
import { useContent } from "../../../context/ContentContext";

const KidsEpsode = () => {
  const { state } = useContent();

  const slides = state.kidsData.episodes.map((item) => ({
    id: item.id,
    content: <div className="kids-episode-card">{item.title}</div>,
  }));

  return (
    <div className="kids-episode">
      <CustomSwiper
        slidesPerView={1}
        speed={800}
        autoplay={false}
        loop={false}
        slides={slides}
      />
    </div>
  );
};

export default KidsEpsode;
