import { useSectionsSelector } from "../../../context";
import Button from "../../../components/Button/Button";
import "../../../style/Home/section-device.css";
import Image from "../../../components/ImageComponent/Image";
import DeviceItem from "../components/DeviceItem/DeviceItem";
import { DeviceItem as DeviceItemType } from "../../../types/mockdata";

const Device = () => {
  // Using our sections context instead of direct import
  const deviceSection = useSectionsSelector(
    (context) => context.state.deviceSection
  );

  const {
    title,
    description,
    buttonText,
    mainImage,
    responsiveImage,
    devices,
  } = deviceSection;

  return (
    <section className="section-device">
      <div className="section-dev">
        <div className="section-device-photo">
          <Image src={mainImage} alt="device" />
        </div>
        <div className="section-device-describe">
          <h3 className="section-device-describe-title text-base md:text-2xl">
            {title}
          </h3>
          <p className="section-device-describe-text text-base md:text-2xl">
            {description}
          </p>
          <div className="responsive-photo-mode">
            <Image src={responsiveImage} alt="device2" />
          </div>
          <div className="section-devices-name">
            {devices.map((device: DeviceItemType, index: number) => (
              <DeviceItem key={index} device={device} />
            ))}
          </div>
          <Button className="btn licence-btn ml-3 rounded-xl p-3 text-center transition-all duration-300 ease-in-out w-full sm:w-96 text-base md:text-xl">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Device;
