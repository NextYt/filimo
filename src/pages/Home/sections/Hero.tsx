import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";
import Image from "../../../components/ImageComponent/Image";
import SectionDetailList from "../components/SectionDetailList/SectionDetailList";
import { useContentSelector } from "../../../context";
import "../../../style/Home/section-wrapper.css";

const Hero = () => {
  // Using optimized selector to only subscribe to the specific data needed
  const heroTexts = useContentSelector(context => context.state.heroTexts);
  const heroDetailList = useContentSelector(context => context.state.heroDetailList);
  
  const backgroundImage = assets.backgroundPoster;
  
  return (
    <section className="section-wrapper">
      <div
        className="back-img"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="color-gradient color-gradient1"></div>
        <div className="color-gradient color-gradient2"></div>
        <div className="section-wrapper-details">
          <div className="details">
            <span className="small-title section-detail-list-item">
              {heroTexts.text1}
            </span>
            <span className="title section-detail-list-item">
              {heroTexts.text2}
            </span>
            <div className="section-detail-list">
              <div className="section-detail-respon-800">
                {heroDetailList.map((item) => (
                  <SectionDetailList key={item.text} text={item.text} />
                ))}
              </div>
            </div>
            <div className="section-wrapper-buttoon section-detail-list-item">
              <Button className="btn licence-btn section-wrapper-btn">
                {heroTexts.text3}
              </Button>
            </div>
            <div className="section-wrapper-gift section-detail-list-item">
              <span>{heroTexts.text4}</span>
              <Image src={assets.gift} alt="gift" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
