import '../../../style/Home/section-tab.css';
import { assets } from '../../../assets/assets';
import Button from '../../../components/Button/Button';
import Image from '../../../components/ImageComponent/Image';
import { useSectionsSelector } from '../../../context';

const Tab = () => {
  // Using our sections context instead of direct import
  const tabSection = useSectionsSelector(context => context.state.tabSection);
  
  const { buttonText, features } = tabSection;

  return (
    <section className="section-tab">
      <div className="section-tab-gradient"></div>
      <div className="section-tab-dev">
        <div className="section-tab-logo">
          <Image src={assets.logoText} alt="logo-text" />
        </div>
        <div className="section-detail-list section-tab-list">
          <div className="section-tab-inner-dev">
            {features.map((feature, index) => (
              <div key={index} className="section-detail-list-item tab-text">
                <Image src={assets.checkmark} className="text-green-500 text-xl" alt="checkmark" />
                <span className="detail-tab-item-text">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Button className="btn licence-btn section-tab-btn">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Tab;
