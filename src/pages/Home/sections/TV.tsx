import { useSectionsSelector } from "../../../context";
import { assets } from "../../../assets/assets";
import "../../../style/Home/section-tv.css";
import Image from "../../../components/ImageComponent/Image";
import Button from "../../../components/Button/Button";
import TvDeviceItem from "../components/TvDevice/TvDeviceItem";
import { TvDevice } from "../../../types/mockdata";

const TV = () => {
  // Using our sections context instead of direct import
  const tvSection = useSectionsSelector(context => context.state.tvSection);
  
  const {
    title,
    description,
    buttonText,
    mainImage,
    responsiveImage,
    tvDevices,
  } = tvSection;

  return (
    <section className="section-device tv">
      <div className="section-tv">
        <div className="section-device-photo section-tv-img">
          <Image src={mainImage} alt="TV Background" />
        </div>

        <div className="section-device-describe text-wrap">
          <h3 className="section-device-describe-title">{title}</h3>
          <p className="section-device-describe-text tv-text">{description}</p>
          <div className="responsive-photo-mode">
            <Image src={responsiveImage} alt="TV Background Mobile" />
          </div>
          <div className="section-devices-name">
            {tvDevices.map((device: TvDevice, index: number) => (
              <TvDeviceItem
                key={index}
                tvDevice={device}
                isLastItem={index === tvDevices.length - 1}
              />
            ))}
          </div>
          <Button className="btn flex items-center justify-center gap-2 section-device-btn tv-btn">
            {buttonText}
            <Image src={assets.angleRight} className="w-4 h-4" alt="downArrow" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TV;
