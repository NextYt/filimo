import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";
import Image from "../../../components/ImageComponent/Image";
import SectionDetailList from "../../../components/SectionDetailList/SectionDetailList";
import { HERO_DETAIL_LIST, HERO_TEXTS } from "../../../data/mockData";
import "../../../style/Home/section-wrapper.css";

const Hero = () => {
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
              {HERO_TEXTS.text1}
            </span>
            <span className="title section-detail-list-item">
              {HERO_TEXTS.text2}
            </span>
            <div className="section-detail-list">
              <div className="section-detail-respon-800">
                {HERO_DETAIL_LIST.map((item) => (
                  <SectionDetailList key={item.text} text={item.text} />
                ))}
              </div>
            </div>
            <div className="section-wrapper-buttoon section-detail-list-item">
              <Button className="btn licence-btn section-wrapper-btn">
                {HERO_TEXTS.text3}
              </Button>
            </div>
            <div className="section-wrapper-gift section-detail-list-item">
              <span>{HERO_TEXTS.text4}</span>
              <Image src={assets.gift} alt="gift" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
