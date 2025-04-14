import "../../../style/Home/section-user.css";
import { assets } from "../../../assets/assets";
import Image from "../../../components/ImageComponent/Image";

const UserNav = () => {
  return (
    <section className="section-user-nav">
      <div className="section-user-dev">
        <div className="section-user-text">
          <div>
            <span> User Feedback after watching Filimo</span>
          </div>
          <div className="move-button">
            <div
              className="swiper-icon before-icon free-movie-swiper feedback-swiper"
              style={{ cursor: "pointer" }}
            ></div>
            <div
              className="swiper-icon next-icon free-movie-swiper feedback-swiper"
              style={{ cursor: "pointer" }}
            ></div>
          </div>
        </div>
        <div className="section-user-card-list">
          <div className="section-user-card-item">
            <div className="user-name">
              <div className="virgol">
                <Image src={assets.virgol} alt="virgol" />
              </div>
              <div className="avatar-name">
                <Image src={assets.avatar} alt="avatar" />
                <span>Seyyed</span>
              </div>
            </div>
            <div className="user-feedback">
              <p>
                Excellent, I recommend you install it, it also has free movies
                so install it 🤗🤗
              </p>
            </div>
          </div>
          <div className="section-user-card-item">
            <div className="user-name">
              <div className="virgol">
                <Image src={assets.virgol} alt="virgol" />
              </div>
              <div className="avatar-name">
                <Image src={assets.avatar} alt="avatar" />
                <span>Ramtin</span>
              </div>
            </div>
            <div className="user-feedback">
              <p>Excellent, it has very good movies and series</p>
            </div>
          </div>
          <div className="section-user-card-item">
            <div className="user-name">
              <div className="virgol">
                <Image src={assets.virgol} alt="virgol" />
              </div>
              <div className="avatar-name">
                <Image src={assets.avatar} alt="avatar" />
                <span>Ava</span>
              </div>
            </div>
            <div className="user-feedback">
              <p>
                It was very good, I could download the movie I liked and watch
                it without downloading. I am very happy with this program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserNav;
