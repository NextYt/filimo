import { OnlineMovie } from '../../../../types/mockdata';
import { assets } from '../../../../assets/assets';
import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';

interface OnlineMovieCardProps {
  movie: OnlineMovie;
  ticketLabel: string;
  buyTicketButtonText: string;
}

const OnlineMovieCard = ({ movie, ticketLabel, buyTicketButtonText }: OnlineMovieCardProps) => {
  const { title, director, likePercentage, categories, poster } = movie;

  return (
    <div className="section-online-card">
      <div className="section-ticket">
        <Image src={assets.ticket} alt="ticket" />
        <span>{ticketLabel}</span>
      </div>
      <div className="section-online-card-img-wrapper">
        <Button ButtonElement='a' className="section-online-card-img">
          <Image src={poster} alt={title} />
        </Button>
      </div>
      <div className="section-online-card-text">
        <Button ButtonElement='a' className="section-online-card-text-title">{title}</Button>
        <div className="section-online-director">
          Director: {director}
        </div>
        <span className="movie-data-item data-like online-like">
          <Image src={assets.iconLikeFill} alt="icon-like_fill" />
          <span>{likePercentage}%</span>
        </span>
        <div className="online-section-sub">
          {categories.map((category, index) => (
            <span key={index} className="movie-data-item">{category}</span>
          ))}
        </div>
        <button className="section-online-buy">{buyTicketButtonText}</button>
      </div>
    </div>
  );
};

export default OnlineMovieCard;