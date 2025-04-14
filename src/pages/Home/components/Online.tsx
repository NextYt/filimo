import { ONLINE_SECTION } from '../../../data/mockData';
import { assets } from '../../../assets/assets';
import Image from '../../../components/ImageComponent/Image';
import OnlineMovieCard from '../../../components/OnlineMovie/OnlineMovieCard';
import '../../../style/Home/section-online.css';

const Online = () => {
  const { title, features, ticketLabel, buyTicketButtonText, movies } = ONLINE_SECTION;
  
  return (
    <section className="section-online">
      <div className="section-inner">
        <div className="section-online-text">
          <h3 className="section-title section-online-title">
            {title}
          </h3>
          <div className="section-online-list">
            <div className="section-online-list-dev">
              {features.map((feature, index) => (
                <div key={index} className="section-online-list-item">
                  <Image src={assets.checkmark} className="text-green-500" alt="checkmark" />
                  <span className="text-base md:text-xl">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-online-collection">
          <div className="section-online-box">
            {movies.map((movie) => (
              <OnlineMovieCard 
                key={movie.id} 
                movie={movie} 
                ticketLabel={ticketLabel}
                buyTicketButtonText={buyTicketButtonText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
