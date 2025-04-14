import { assets } from '../../../assets/assets';
import Image from '../../../components/ImageComponent/Image';
import Button from '../../../components/Button/Button';
import '../../../style/Home/section-online.css';

// translate to english

const Online = () => {
  return (
    <section className="section-online">
      <div className="section-inner">
        <div className="section-online-text">
          <h3 className="section-title section-online-title">
            Online Cinema Filimo
          </h3>
          <div className="section-online-list">
            <div className="section-online-list-dev">
              <div className="section-online-list-item">
                <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
                <span>Iran Cinema Movies</span>
              </div>
              <div className="section-online-list-item">
                <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
                <span>8 hours time for watching movies anywhere</span>
              </div>
              <div className="section-online-list-item">
                <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
                <span>Buy one ticket for watching with the whole family</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-online-collection">
          <div className="section-online-box">
            <div className="section-online-card">
              <div className="section-ticket">
                <Image src={assets.ticket} alt="ticket" />
                <span>Online Cinema</span>
              </div>
              <Button ButtonElement='a' className="section-online-card-img">
                <Image src={assets.cardImg1} alt="card-img-1" />
              </Button>
              <div className="section-online-card-text">
                <a className="section-online-card-text-title">White Veil</a>
                <div className="section-online-director">
                  Director: Shahram Meshkini
                </div>
                <span className="movie-data-item data-like online-like">
                  <Image src={assets.iconLikeFill} alt="icon-like_fill" />
                  <span>56%</span>
                </span>
                <div className="online-section-sub">
                  <span className="movie-data-item">Relity Show</span>
                  <span className="movie-data-item">Game Show</span>
                </div>
                <button className="section-online-buy">Buy Ticket</button>
              </div>
            </div>
            <div className="section-online-card">
              <div className="section-ticket">
                <Image src={assets.ticket} alt="ticket" />
                <span>Online Cinema</span>
              </div>
              <Button ButtonElement='a' className="section-online-card-img">
                <Image src={assets.cardImg2} alt="card-img-2" />
              </Button>
              <div className="section-online-card-text">
                <Button ButtonElement='a' className="section-online-card-text-title">Bone Brain</Button>
                <div className="section-online-director">
                  Director: Hamidreza Qorbani
                </div>
                <span className="movie-data-item data-like online-like">
                  <Image src={assets.iconLikeFill} alt="icon-like_fill" />
                  <span>77%</span>
                </span>
                <div className="online-section-sub">
                  <span className="movie-data-item">Drama</span>
                  <span className="movie-data-item">Family</span>
                </div>
                <button className="section-online-buy">Buy Ticket</button>
              </div>
            </div>
            <div className="section-online-card">
              <div className="section-ticket">
                <Image src={assets.ticket} alt="ticket" />
                <span>Online Cinema</span>
              </div>
              <Button ButtonElement='a' className="section-online-card-img">
                <Image src={assets.cardImg3} alt="card-img-3" />
              </Button>
              <div className="section-online-card-text">
                <Button ButtonElement='a' className="section-online-card-text-title">Zalava</Button>
                <div className="section-online-director">
                  Director: Arsalan Amir
                </div>
                <span className="movie-data-item data-like online-like">
                  <Image src={assets.iconLikeFill} alt="icon-like_fill" />
                  <span>73%</span>
                </span>
                <div className="online-section-sub">
                  <span className="movie-data-item">Drama</span>
                  <span className="movie-data-item">Secret</span>
                </div>
                <button className="section-online-buy">Buy Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
