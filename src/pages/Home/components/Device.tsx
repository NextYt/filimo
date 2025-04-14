import { DEVICE_SECTION } from "../../../data/mockData";
import Button from "../../../components/Button/Button";
import "../../../style/Home/section-device.css";
import Image from "../../../components/ImageComponent/Image";
import DeviceItem from "../../../components/DeviceItem/DeviceItem";

const Device = () => {
  const {
    title,
    description,
    buttonText,
    mainImage,
    responsiveImage,
    devices,
  } = DEVICE_SECTION;

  return (
    <section className="section-device">
      <div className="section-dev">
        <div className="section-device-photo">
          <Image src={mainImage} alt="device" />
        </div>
        <div className="section-device-describe">
          <h3 className="section-device-describe-title">{title}</h3>
          <p className="section-device-describe-text">{description}</p>
          <div className="responsive-photo-mode">
            <Image src={responsiveImage} alt="device2" />
          </div>
          <div className="section-devices-name">
            {devices.map((device, index) => (
              <DeviceItem key={index} device={device} />
            ))}
          </div>
          <Button className="btn licence-btn section-device-btn">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Device;
