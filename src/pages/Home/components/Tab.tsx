import '../../../style/Home/section-tab.css';
import { assets } from '../../../assets/assets';
import Button from '../../../components/Button/Button';
import Image from '../../../components/ImageComponent/Image';


const Tab = () => {
  return (
    <section className="section-tab">
      <div className="section-tab-gradient"></div>
      <div className="section-tab-dev">
        <div className="section-tab-logo">
          <Image src={assets.logoText} alt="logo-text" />
        </div>
        <div className="section-detail-list section-tab-list">
          <div className="section-tab-inner-dev">
            <div className="section-detail-list-item tab-text">
              <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
              <span className="detail-tab-item-text">
                Thousands of foreign movies and series (dubbed and subtitles)
              </span>
            </div>
            <div className="section-detail-list-item tab-text">
              <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
              <span className="detail-tab-item-text">
                Thousands of cartoons for children
              </span>
            </div>
            <div className="section-detail-list-item tab-text">
              <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
              <span className="detail-tab-item-text">
                Support 24 hours for your guidance
              </span>
            </div>
          </div>
        </div>
        <Button className="btn licence-btn section-tab-btn">
          Buy License and Watch
        </Button>
      </div>
    </section>
  );
};

export default Tab;
