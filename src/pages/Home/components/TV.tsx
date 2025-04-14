import { assets } from "../../../assets/assets";
import "../../../style/Home/section-tv.css";
import Image from "../../../components/ImageComponent/Image";

const TV = () => {
  return (
    <section className="section-device tv">
      <div className="section-tv">
        <div className="section-device-photo section-tv-img">
          <Image src={assets.tvbg} alt="TVBG" />
        </div>

        <div className="section-device-describe">
          <h3 className="section-device-describe-title">
            How to watch Filimo on TV?
          </h3>
          <p className="section-device-describe-text tv-text">
            We have provided 6 methods for your convenience and to watch Filimo
            on different TVs. Each method has a video tutorial that you can
            watch from the link below and choose the method that is compatible
            with your TV.
          </p>
          <div className="responsive-photo-mode">
            <Image src={assets.tvbgYaghi} alt="TVBG-yaghi" />
          </div>
          <div className="section-devices-name">
            <div className="section-user">
              <div className="pc-icon">
                <Image src={assets.laptop} alt="laptop" />
              </div>
              <div className="section-text">
                <span className="section-pc-title"> TV</span>
                <span className="section-pc-describe">
                  Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV
                  devices - Samsung
                </span>
              </div>
            </div>
            <div className="section-user" style={{ marginBottom: "64px" }}>
              <div className="pc-icon laptob-icon andtv-img">
                <Image src={assets.androidTv} alt="androidTV" />
              </div>
              <div className="section-text">
                <span className="section-pc-title"> Android TV</span>
                <span className="section-pc-describe">
                  NVIDIA - amazon - xiaomi - minix - skystream - turewell -
                  ematic - humax - matricom
                </span>
              </div>
            </div>
          </div>
          <button className="btn licence-btn section-device-btn tv-btn">
            Video Tutorials for TV
            <Image src={assets.downArrow} alt="downArrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TV;
