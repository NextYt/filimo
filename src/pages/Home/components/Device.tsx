import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";
import "../../../style/Home/section-device.css";
import Image from "../../../components/ImageComponent/Image";

const Device = () => {
  return (
    <section className="section-device">
      <div className="section-dev">
        <div className="section-device-photo">
          <Image src={assets.device} alt="device" />
        </div>
        <div className="section-device-describe">
          <h3 className="section-device-describe-title">
            Watch Filimo on all devices
          </h3>
          <p className="section-device-describe-text">
            You can watch Filimo on 3 different devices at the same time like
            mobile, tablet, laptop, TV and...
          </p>
          <div className="responsive-photo-mode">
            <Image src={assets.device2} alt="device2" />
          </div>
          <div className="section-devices-name">
            <div className="section-user">
              <div className="pc-icon">
                <Image src={assets.laptop} alt="laptop" />
              </div>
              <div className="section-text">
                <span className="section-pc-title"> Computer and Laptop</span>
                <span className="section-pc-describe">
                  Windows PC - MacOS - Chrome OS
                </span>
              </div>
            </div>
            <div className="section-user">
              <div className="pc-icon laptob-icon">
                <Image src={assets.mobile} alt="mobile" />
              </div>
              <div className="section-text">
                <span className="section-pc-title"> Mobile and Tablet</span>
                <span className="section-pc-describe">
                  Android Phone & Tablets - Iphone and Ipad - Amazon Fire
                  Tablets
                </span>
              </div>
            </div>
            <div className="section-user">
              <div className="pc-icon">
                <Image src={assets.game} alt="game" />
              </div>
              <div className="section-text">
                <span className="section-pc-title">Browser Games</span>
                <span className="section-pc-describe">
                  Xbox Series S - Xbox Seris X - PS5 - PS4
                </span>
              </div>
            </div>
          </div>
          <Button className="btn licence-btn section-device-btn">
            Buy License and Watch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Device;
